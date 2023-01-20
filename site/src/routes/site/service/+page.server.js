import { services } from "$lib/data/services.js";

export function load() {
  return {
    summaries: services.map((service) => ({
      slug: service.slug,
      title: service.title,
      preview: service.preview,
    })),
  };
}
