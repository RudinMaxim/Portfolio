import { z } from 'zod';

export const LibrarySchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	description: z.string().nullable(),
	versions: z.string().nullable(),
	technologyId: z.string().uuid(),
	projectId: z.string().uuid().nullable(),
	isShowed: z.boolean(),
	createdAt: z.date(),
	updatedAt: z.date(),
});
export const LibrariesSchema = z.array(LibrarySchema);

export const createLibrarySchema = z.object({
	name: z.string(),
	description: z.string().optional().nullable(),
	versions: z.string().optional().nullable(),
	technologyId: z.string().uuid(),
	projectId: z.string().uuid().optional().nullable(),
	isShowed: z.boolean().optional(),
});

export const DeleteLibrarySchema = z.object({
	id: z.string().uuid(),
});

export const UpdateLibrarySchema = z.object({
	id: z.string().uuid(),
	name: z.string().optional(),
	description: z.string().optional().nullable(),
	versions: z.string().optional().nullable(),
	technologyId: z.string().uuid().optional(),
	projectId: z.string().uuid().optional().nullable(),
	isShowed: z.boolean().optional(),
});

export type Library = z.infer<typeof LibrarySchema>;
