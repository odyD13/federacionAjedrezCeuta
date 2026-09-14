// @ts-check
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// https://docs.astro.build/en/guides/content-collections/
const news = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
	schema: z.object({
		title: z.string(),
		tag: z.string(),
		image: z.string(),
		alt: z.string(),
		excerpt: z.string(),
		author: z.string().optional(),
		date: z.coerce.date(),
	}),
});

export const collections = { news };