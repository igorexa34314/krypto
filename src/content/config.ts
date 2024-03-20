// Import utilities from `astro:content`
import { defineCollection, z, reference } from 'astro:content';

// Define a `type` and `schema` for each collection
const companies = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			homepage: z.string().url(),
			logo: image(),
		}),
});

const reviewers = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			firstname: z.string(),
			lastname: z.string(),
			photoURL: image(),
		}),
});

const reviews = defineCollection({
	type: 'content',
	schema: z.object({
		content: z.string(),
		reviewer: reference('reviewers'),
	}),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
	companies,
	reviewers,
	reviews,
};
