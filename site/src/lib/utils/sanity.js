import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "6akigqdh",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: "",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};

export default client;
