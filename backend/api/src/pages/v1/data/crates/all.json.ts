import type { APIRoute } from "astro";
import { apiData } from "../../../../lib/apiFetches";

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      compatibilitydate: Date.now(),
      crates: await apiData.v1apiFetches.crates(),
    })
  );
};
