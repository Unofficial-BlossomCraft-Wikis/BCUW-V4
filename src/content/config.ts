import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    authors: z.array(z.string()),
    footnote: z.string().optional(),
    isDraft: z.boolean(),
    socialImage: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

const itembcCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    images: z.object({
      mono: z.string().url(),
      color: z.string().url(),
      itemslot: z.string().url(),
    }),
    type: z.enum(["magic/infinite", "weapon", "armor", "consumable", "tool"]),
    crate: reference("crates"),
    rarity: z.enum(["common", "uncommon", "rare", "epic", "legendary"]),
    enchantments: z.array(z.string()),
    unmodifiable: z.boolean(),
    unbreaking: z.boolean(),
  }),
});

const itemmcollection = defineCollection({
  schema: z.object({
    title: z.string(),
    images: z.object({
      mono: z.string().url(),
      color: z.string().url(),
    }),
    type: z.enum([
      "weapon",
      "armor",
      "consumable",
      "tool",
      "building",
      "other",
    ]),
    crate: reference("crates"),
  }),
});

const crateCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    release: z.string().transform((val) => new Date(val)),
    items: z.array(z.string()),
  }),
});

const authors = defineCollection({
  schema: z.object({
    name: z.string(),
    MCusername: z.string(),
    BCusername: z.string(),
    role: z.string(),
    pfp: z.string().url(),
  }),
});

export const collections = {
  blog: blogCollection,
  authors: authors,
  bcitems: itembcCollection,
  crates: crateCollection,
  mcitems: itemmcollection,
};
