// Stub — see send-otp.js. Original contract from the client JS:
//   POST { mobile, otp, token } -> 200 {}  (client then stores the user locally
//   and redirects to /profile)
//   error -> { error: "message shown to the user" }
export async function onRequestPost() {
  return new Response(
    JSON.stringify({ error: "Login is temporarily unavailable. Please reach us on WhatsApp." }),
    { status: 503, headers: { "Content-Type": "application/json" } }
  );
}
