import { z } from "astro:content";

// Version 1 API Responses
const V1TutorialsAPIResponseZod = z.object({
  slug: z.string(),
  body: z.string(),
  metadata: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    authors: z.array(z.string()),
    proofreaders: z.array(z.object({name: z.string(), isAuthor: z.boolean()})).optional(),
    footnote: z.string().optional(),
    isDraft: z.boolean(),
    socialImage: z.string().optional(),
    coverImage: z.string().optional(),
    coverImageURL: z.string().optional(),
  }),
});

export type V1TutorialsAPIResponse = z.infer<typeof V1TutorialsAPIResponseZod>;

const V1PatchnotesAPIResponseZod = z.object({
  slug: z.string(), 
  body: z.string(),
  metadata: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
  }),
});

export type V1PatchnotesAPIResponse = z.infer<typeof V1PatchnotesAPIResponseZod>;

const V1ItemsAPIResponseZod = z.object({
  slug: z.string(),
  body: z.string(),
  metadata: z.object({
    title: z.string(),
      release: z.date().optional(),
      images: z.object({
        color: z.string(),
        colornotes: z.array(z.object({
          type: z.enum(['note', 'tip', 'caution', 'danger']),
          title: z.string().optional(),
          content: z.string(),
        })).optional(),
        item: z.string(),
      }),
      type: z.enum(["magic/infinite", "weapon", "armor", "consumable", "tool", "key", "other"]),
      crate: z.any().optional(),
      cratequantity: z.number().optional(),
      rarity: z
        .enum(["common", "uncommon", "rare", "epic", "legendary"])
        .optional(),
      enchantments: z.array(z.string()).optional(),
      unmodifiable: z.boolean().optional(),
      unbreaking: z.boolean().optional(),
      winChance: z.number().optional(),
      multiinstance: z.boolean().optional(),
      multiinstanceuuid: z.string().default("00000000-0000-0000-0000-000000000000"),
      multiinstancebaseitem: z.any().optional(),
    }),
});

export type V1ItemsAPIResponse = z.infer<typeof V1ItemsAPIResponseZod>;

const V1CratesAPIResponseZod = z.object({
  slug: z.string(),
  body: z.string(),
  metadata: z.object({
      title: z.string(),
      release: z.date(),
      cratePreview: z.array(z.string()),
      items: z.any(),
      tags: z.array(z.enum(["infinite crate", "season", "lt", "holiday", "other"])),
      warpKeyShopPurchasable: z.boolean().optional().default(true),
      warpKeyShopPrice: z.number().optional(),
      shopPurchasable: z.boolean().default(false),
      shopPrice: z.number().optional(),
    }),
});

export type V1CratesAPIResponse = z.infer<typeof V1CratesAPIResponseZod>;

const V1BlogAPIResponseZod = z.object({
  slug: z.string(),
  body: z.string(),
  metadata: z.object({
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

export type V1BlogAPIResponse = z.infer<typeof V1BlogAPIResponseZod>;

const V1AuthorsAPIResponseZod = z.object({
  slug: z.string(),
  body: z.string(),
  metadata: z.object({
    name: z.string(),
    MCusername: z.string(),
    BCusername: z.string(),
    role: z.string(),
    pfp: z.string().url(),
  }),
});

export type V1AuthorsAPIResponse = z.infer<typeof V1AuthorsAPIResponseZod>;

const V1AnnouncementsAPIResponseZod = z.object({
  slug: z.string(), 
  body: z.string(),
  metadata: z.object({
    poster: z.string(),
    publishDate: z.date(),
  }),
});

export type V1AnnouncementsAPIResponse = z.infer<typeof V1AnnouncementsAPIResponseZod>;

// End of Version 1 API Responses