import { error } from "@sveltejs/kit";
import { services } from "$lib/data/services.js";

export function load({ params }) {
  const service = services.find((service) => service.slug === params.slug);

  if (!service) throw error(404);

  return {
    service,
  };
}
