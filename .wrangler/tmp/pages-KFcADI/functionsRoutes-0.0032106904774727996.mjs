import { onRequestPost as __api_auth_logout_js_onRequestPost } from "/Volumes/shreyash_ex/suchbliss_website/functions/api/auth/logout.js"
import { onRequestPost as __api_auth_send_otp_js_onRequestPost } from "/Volumes/shreyash_ex/suchbliss_website/functions/api/auth/send-otp.js"
import { onRequestPost as __api_auth_verify_otp_js_onRequestPost } from "/Volumes/shreyash_ex/suchbliss_website/functions/api/auth/verify-otp.js"
import { onRequestGet as ___next_image_js_onRequestGet } from "/Volumes/shreyash_ex/suchbliss_website/functions/_next/image.js"
import { onRequest as ___middleware_js_onRequest } from "/Volumes/shreyash_ex/suchbliss_website/functions/_middleware.js"

export const routes = [
    {
      routePath: "/api/auth/logout",
      mountPath: "/api/auth",
      method: "POST",
      middlewares: [],
      modules: [__api_auth_logout_js_onRequestPost],
    },
  {
      routePath: "/api/auth/send-otp",
      mountPath: "/api/auth",
      method: "POST",
      middlewares: [],
      modules: [__api_auth_send_otp_js_onRequestPost],
    },
  {
      routePath: "/api/auth/verify-otp",
      mountPath: "/api/auth",
      method: "POST",
      middlewares: [],
      modules: [__api_auth_verify_otp_js_onRequestPost],
    },
  {
      routePath: "/_next/image",
      mountPath: "/_next",
      method: "GET",
      middlewares: [],
      modules: [___next_image_js_onRequestGet],
    },
  {
      routePath: "/",
      mountPath: "/",
      method: "",
      middlewares: [___middleware_js_onRequest],
      modules: [],
    },
  ]