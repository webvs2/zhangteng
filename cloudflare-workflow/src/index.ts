export { MyWorkflow } from "./workflow";

const WORKFLOW_PATH = /^\/api\/workflow\/?$/;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (!WORKFLOW_PATH.test(url.pathname)) {
      if (url.pathname.startsWith("/api/")) {
        return new Response("Not Found", { status: 404 });
      }
      return env.ASSETS.fetch(request);
    }

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

    if (request.method === "GET") {
      const instance = await env.MY_WORKFLOW.create();
      return Response.json({ instanceId: instance.id });
    }

    return new Response("Method Not Allowed", { status: 405 });
  },
} satisfies ExportedHandler<Env>;
