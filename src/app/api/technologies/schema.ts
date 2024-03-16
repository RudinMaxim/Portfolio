import { z } from 'zod';

export const TechnologySchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	description: z.string().nullable(),
	versions: z.string().nullable(),
	direction: z.enum(['FRONTEND', 'BACKEND', 'DEVOPS', 'OTHER']),
	isShowed: z.boolean(),
	createdAt: z.date(),
	updatedAt: z.date(),
});
export const TechnologiesSchema = z.array(TechnologySchema);

export const createTechnologiesSchema = z.object({
	name: z.string(),
	description: z.string().optional().nullable(),
	versions: z.string().optional().nullable(),
	isShowed: z.boolean().optional(),
});

export const DeleteTechnologySchema = z.object({
	id: z.string().uuid(),
});

export const UpdateTechnologySchema = z.object({
	id: z.string().uuid(),
	name: z.string().optional(),
	description: z.string().nullable().optional(),
	versions: z.string().nullable().optional(),
	direction: z.enum(['FRONTEND', 'BACKEND', 'DEVOPS']).optional(),
	isShowed: z.boolean().optional(),
});

export type Technology = z.infer<typeof TechnologySchema>;
