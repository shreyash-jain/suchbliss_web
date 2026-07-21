// The client clears its own locally-stored user after calling this,
// so acknowledging is enough.
export async function onRequestPost() {
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
