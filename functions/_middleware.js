// Serves pre-captured React Server Component (flight) payloads so Next.js
// client-side navigation works on static hosting. The Next router requests
// pages with an `RSC: 1` header (and `?_rsc=` query); we answer with the
// matching payload stored under /_rsc/<page>.txt. Everything else falls
// through to the static assets.
export async function onRequest({ request, env, next }) {
  const url = new URL(request.url);
  const isRsc = request.headers.get("RSC") === "1" || url.searchParams.has("_rsc");
  const isPage = !url.pathname.startsWith("/_next/") && !url.pathname.startsWith("/api/");

  if (isRsc && isPage) {
    const name = url.pathname === "/" ? "index" : url.pathname.replace(/^\/|\/$/g, "");
    const flight = await env.ASSETS.fetch(new URL(`/_rsc/${name}.txt`, url.origin));
    if (flight.ok) {
      return new Response(flight.body, {
        headers: {
          "Content-Type": "text/x-component",
          "Cache-Control": "no-store",
          "Vary": "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
        },
      });
    }
    // No payload captured for this path: let the router hard-navigate.
    return new Response(null, { status: 404 });
  }

  return next();
}
