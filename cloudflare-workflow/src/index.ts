export { MyWorkflow } from "./workflow";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const instanceId = url.searchParams.get("instanceId");

    if (instanceId) {
      const instance = await env.MY_WORKFLOW.get(instanceId);
      return Response.json(await instance.status());
    }

    if (request.method === "POST") {
      let name: string | undefined;
      try {
        const body = (await request.json()) as { name?: string };
        name = body.name;
      } catch {
        // 无 body 时仍创建实例
      }
      const instance = await env.MY_WORKFLOW.create({ params: { name } });
      return Response.json({ instanceId: instance.id });
    }

    const instance = await env.MY_WORKFLOW.create();
    return Response.json({ instanceId: instance.id });
  },
} satisfies ExportedHandler<Env>;
