// Stub for the original Vercel serverless OTP endpoint (server code was lost
// with the source). The original contract, reconstructed from the client JS:
//   POST { mobile } -> 200 { token }   (token is later echoed to verify-otp)
//   error           -> { error: "message shown to the user" }
// To restore real logins, wire this up to your SMS provider and return an
// HMAC-signed token encoding the OTP + expiry.
export async function onRequestPost() {
  return new Response(
    JSON.stringify({ error: "Login is temporarily unavailable. Please reach us on WhatsApp." }),
    { status: 503, headers: { "Content-Type": "application/json" } }
  );
}
