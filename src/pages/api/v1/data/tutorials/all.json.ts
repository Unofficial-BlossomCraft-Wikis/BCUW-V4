import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry, render } from "astro:content";

type V1APIResponse = {
  slug: string;
  body: any;
  metadata: {
    title: string;
    description: string;
    publishDate: Date;
    authors: string[];
    proofreaders?: { name: string; isAuthor: boolean }[];
    footnote?: string;
    isDraft: boolean;
    socialImage?: string;
    coverImage?: string;
    coverImageURL?: string;
  };
};

export const GET: APIRoute = async ({ params, request }) => {
  const allItems = await getCollection("tutorials");
  // @ts-expect-error error be gone
  const formattedItems: V1APIResponse = await Promise.all(allItems.map(
    async (item: CollectionEntry<"tutorials">) => {
      const {Content} = await render(item);
      return {
        slug: item.slug,
        body: Content,
        metadata: {
          title: item.data.title,
          description: item.data.description,
          publishDate: item.data.publishDate,
          authors: item.data.authors,
          proofreaders: item.data.proofreaders,
          footnote: item.data.footnote,
          isDraft: item.data.isDraft,
          socialImage: item.data.socialImage,
          coverImage: item.data.coverImage,
          coverImageURL: item.data.coverImageURL,
        },
      };
    }
  ));
  console.log(formattedItems);
  return new Response(
    JSON.stringify({
      turorials: formattedItems,
    })
  );
};

export type V1TutorialsAPIResponse = V1APIResponse;