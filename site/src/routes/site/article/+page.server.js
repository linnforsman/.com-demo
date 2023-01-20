import { error } from "@sveltejs/kit";
import client from "$lib/utils/sanity";

let query = `*[_type == 'article'][0]
{
  image,
  title,
  slug,
  publishdate,
  body
}`;

export const load = async () => {
  const articles = await client.fetch(query);

  if (!articles) throw error();
  return {
    articles,
  };
};
