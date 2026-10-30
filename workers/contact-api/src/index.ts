import { handleContactRequest, type ContactWorkerEnv } from '../../../src/lib/contactHandler.ts';

export default {
  async fetch(request: Request, env: ContactWorkerEnv): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' || url.pathname === '/api/contact/') {
      return handleContactRequest(request, env);
    }

    return new Response(
      JSON.stringify({
        ok: false,
        code: 'NOT_FOUND',
        message: 'Endpoint no encontrado.',
      }),
      {
        status: 404,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
        },
      },
    );
  },
};
