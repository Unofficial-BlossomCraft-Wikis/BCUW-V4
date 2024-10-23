import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    author: reference('authors'),
  }),
});

const itembcCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    images: z.object({
      mono: z.string().url(),
      color: z.string().url(),
    }),
    type: z.enum(["magic/infinite", "weapon", "armor", "consumable", "tool"]),
    crate: reference("crates"),
  }),
});

const itemmcollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    images: z.object({
      mono: z.string().url(),
      color: z.string().url(),
    }),
    type: z.enum(["weapon", "armor", "consumable", "tool", "building", "other"]),
    crate: reference("crates"),
  }),
});

const crateCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    release: z.string().transform((val) => new Date(val)),
    items: z.array(z.string()),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    socials: z.array(z.string()),
    avatar: z.string().url(),
  })
});

export const collections = {
  blog: blogCollection,
  authors: authors,
  bcitems: itembcCollection,
  crates: crateCollection,
  mcitems: itemmcollection,
};
