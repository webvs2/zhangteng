import { WorkflowEntrypoint, WorkflowStep } from "cloudflare:workers";
import type { WorkflowEvent } from "cloudflare:workers";

type Params = { name?: string };

type IPResponse = { result: { ipv4_cidrs: string[] } };

/**
 * 多步骤、可持久化、可重试的 durable workflow。
 * 步骤之间用 step.do / step.sleep 拆分，失败可从上一成功步骤恢复。
 */
export class MyWorkflow extends WorkflowEntrypoint<Env, Params> {
  async run(event: WorkflowEvent<Params>, step: WorkflowStep) {
    const data = await step.do("fetch data", async () => {
      const response = await fetch("https://api.cloudflare.com/client/v4/ips");
      if (!response.ok) {
        throw new Error(`ips API failed: ${response.status}`);
      }
      return await response.json<IPResponse>();
    });

    await step.sleep("pause", "20 seconds");

    return await step.do(
      "process data",
      { retries: { limit: 3, delay: "5 seconds", backoff: "linear" } },
      async () => {
        return {
          name: event.payload.name ?? "World",
          ipCount: data.result.ipv4_cidrs.length,
        };
      }
    );
  }
}
