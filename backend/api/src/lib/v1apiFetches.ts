import { getCollection, type CollectionEntry, render } from "astro:content";
import type {
  V1BlogAPIResponse,
  V1CratesAPIResponse,
  V1ItemsAPIResponse,
  V1TutorialsAPIResponse,
  V1AuthorsAPIResponse,
  V1PatchnotesAPIResponse,
  V1AnnouncementsAPIResponse,
} from "./apiTypes";
import { renderMDX } from "./renderer";

// all data

async function authors(): Promise<V1AuthorsAPIResponse[]> {
  const allItems = await getCollection("authors");
  const formattedItems: V1AuthorsAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"authors">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: {
          name: item.data.name,
          MCusername: item.data.MCusername,
          BCusername: item.data.BCusername,
          role: item.data.role,
          pfp: item.data.pfp,
        },
      };
    })
  );
  return formattedItems;
}

async function items(): Promise<V1ItemsAPIResponse[]> {
  const allItems = await getCollection("bcitems");
  const formattedItems: V1ItemsAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"bcitems">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: {
          type: item.data.type,
          title: item.data.title,
          images: {
            color: item.data.images.color,
            colornotes: item.data.images.colornotes,
            item: item.data.images.item,
          },
          crate: item.data.crate,
          cratequantity: item.data.cratequantity,
          rarity: item.data.rarity,
          enchantments: item.data.enchantments,
          unmodifiable: item.data.unmodifiable,
          unbreaking: item.data.unbreaking,
          winChance: item.data.winChance,
          multiinstance: item.data.multiinstance,
          multiinstanceuuid: item.data.multiinstanceuuid,
          multiinstancebaseitem: item.data.multiinstancebaseitem,
        },
      };
    })
  );
  return formattedItems;
}

async function crates(): Promise<V1CratesAPIResponse[]> {
  const allItems = await getCollection("crates");
  const formattedItems: V1CratesAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"crates">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: {
          title: item.data.title,
          release: item.data.release,
          cratePreview: item.data.cratePreview,
          items: item.data.items,
          tags: item.data.tags,
          warpKeyShopPurchasable: item.data.warpKeyShopPurchasable,
          warpKeyShopPrice: item.data.warpKeyShopPrice,
          shopPurchasable: item.data.shopPurchasable,
          shopPrice: item.data.shopPrice,
        },
      };
    })
  );
  return formattedItems;
}

async function tutorials(): Promise<V1TutorialsAPIResponse[]> {
  const allItems = await getCollection("tutorials");
  const formattedItems: V1TutorialsAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"tutorials">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
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
    })
  );
  return formattedItems;
}

async function blogposts(): Promise<V1BlogAPIResponse[]> {
  const allItems = await getCollection("blog");
  const formattedItems: V1BlogAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"blog">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: {
          title: item.data.title,
          description: item.data.description,
          publishDate: item.data.publishDate,
          authors: item.data.authors,
          footnote: item.data.footnote,
          isDraft: item.data.isDraft,
          socialImage: item.data.socialImage,
          coverImage: item.data.coverImage,
        },
      };
    })
  );
  return formattedItems;
}

async function patchnotes(): Promise<V1PatchnotesAPIResponse[]> {
  const allItems = await getCollection("patchnotes");
  const formattedItems: V1PatchnotesAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"patchnotes">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: {
          title: item.data.title,
          description: item.data.description,
          publishDate: item.data.publishDate,
        },
      };
    })
  );
  return formattedItems;
}

async function announcements(): Promise<V1AnnouncementsAPIResponse[]> {
  const allItems = await getCollection("announcements");
  const formattedItems: V1AnnouncementsAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"announcements">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: {
          poster: item.data.poster,
          publishDate: item.data.publishDate,
        },
      };
    })
  );
  return formattedItems;
}

export {
  authors,
  items,
  crates,
  tutorials,
  blogposts,
  patchnotes,
  announcements,
};

// newest data

async function newestCrates(): Promise<V1CratesAPIResponse | null> {
  const allItems = await getCollection("crates");
  const formattedItems: V1CratesAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"crates">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: {
          title: item.data.title,
          release: item.data.release,
          cratePreview: item.data.cratePreview,
          items: item.data.items,
          tags: item.data.tags,
          warpKeyShopPurchasable: item.data.warpKeyShopPurchasable,
          warpKeyShopPrice: item.data.warpKeyShopPrice,
          shopPurchasable: item.data.shopPurchasable,
          shopPrice: item.data.shopPrice,
        },
      };
    })
  );

  formattedItems.sort((a, b) => {
    return (
      new Date(b.metadata.release).getTime() -
      new Date(a.metadata.release).getTime()
    );
  });

  return formattedItems.length > 0 ? formattedItems[0] : null;
}

async function newestTutorials(): Promise<V1TutorialsAPIResponse | null> {
  const allItems = await getCollection("tutorials");
  const formattedItems: V1TutorialsAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"tutorials">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
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
    })
  );

  formattedItems.sort((a, b) => {
    return (
      new Date(b.metadata.publishDate).getTime() -
      new Date(a.metadata.publishDate).getTime()
    );
  });

  return formattedItems.length > 0 ? formattedItems[0] : null;
}

async function newestBlogposts(): Promise<V1BlogAPIResponse | null> {
  const allItems = await getCollection("blog");
  const formattedItems: V1BlogAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"blog">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: {
          title: item.data.title,
          description: item.data.description,
          publishDate: item.data.publishDate,
          authors: item.data.authors,
          footnote: item.data.footnote,
          isDraft: item.data.isDraft,
          socialImage: item.data.socialImage,
          coverImage: item.data.coverImage,
        },
      };
    })
  );
  formattedItems.sort((a, b) => {
    return (
      new Date(b.metadata.publishDate).getTime() -
      new Date(a.metadata.publishDate).getTime()
    );
  });

  return formattedItems.length > 0 ? formattedItems[0] : null;
}

async function newestPatchnotes(): Promise<V1PatchnotesAPIResponse | null> {
  const allItems = await getCollection("patchnotes");
  const formattedItems: V1PatchnotesAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"patchnotes">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: {
          title: item.data.title,
          description: item.data.description,
          publishDate: item.data.publishDate,
        },
      };
    })
  );
  formattedItems.sort((a, b) => {
    return (
      new Date(b.metadata.publishDate).getTime() -
      new Date(a.metadata.publishDate).getTime()
    );
  });

  return formattedItems.length > 0 ? formattedItems[0] : null;
}

async function newestAnnouncements(): Promise<V1AnnouncementsAPIResponse | null> {
  const allItems = await getCollection("announcements");
  const formattedItems: V1AnnouncementsAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"announcements">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: {
          poster: item.data.poster,
          publishDate: item.data.publishDate,
        },
      };
    })
  );
  formattedItems.sort((a, b) => {
    return (
      new Date(b.metadata.publishDate).getTime() -
      new Date(a.metadata.publishDate).getTime()
    );
  });

  return formattedItems.length > 0 ? formattedItems[0] : null;
}

export { newestCrates, newestTutorials, newestBlogposts, newestPatchnotes, newestAnnouncements };