import { z } from 'zod';
import { LibrariesSchema } from '../libraries/schema';
import { TechnologiesSchema } from '../technologies/schema';

export const ProjectSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	description: z.string().nullable(),
	tag: z.enum(['PERSONAL', 'COMMERCIAL']).default('PERSONAL'),
	links: z.array(z.string()),
	technologies: TechnologiesSchema,
	libraries: LibrariesSchema.nullable(),
	start: z.string(),
	end: z.string().nullable(),
	views: z.number().default(0),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const createProjectSchema = z.object({
	name: z.string(),
	description: z.string().nullable().optional(),
	tag: z.enum(['PERSONAL', 'COMMERCIAL']).optional(),
	links: z.array(z.string()).optional(),
	technologies: z.array(z.string()).optional(),
	libraries: z.array(z.string()).optional().nullable(),
	start: z.string(),
	end: z.string().nullable().optional(),
});

export const updateProjectSchema = ProjectSchema.omit({
	createdAt: true,
}).partial();

export const deleteProjectSchema = z.object({
	id: z.string().uuid(),
});

export type TypeProject = z.infer<typeof ProjectSchema>;
