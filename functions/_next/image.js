// Cloudflare Pages replacement for Vercel's /_next/image optimizer.
// The Next.js bundles request images as /_next/image?url=<path>&w=..&q=..;
// we serve the original asset directly (no resizing) so every image keeps working.
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const target = url.searchParams.get("url");
  if (!target) {
    return new Response("Missing url parameter", { status: 400 });
  }
  if (/^https?:\/\//.test(target)) {
    return Response.redirect(target, 302);
  }
  if (!target.startsWith("/")) {
    return new Response("Invalid url parameter", { status: 400 });
  }
  const asset = await env.ASSETS.fetch(new URL(target, url.origin));
  if (!asset.ok) {
    return new Response("Image not found", { status: 404 });
  }
  const res = new Response(asset.body, asset);
  res.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  return res;
}
