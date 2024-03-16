import { z } from 'zod';
import { LibrarySchema } from '../libraries/schema';

export const SkillsSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	description: z.string().nullable(),
	versions: z.string().nullable(),
	direction: z.enum(['FRONTEND', 'BACKEND', 'DEVOPS', 'OTHER']),
	isShowed: z.boolean(),
	createdAt: z.date(),
	updatedAt: z.date(),
	libraries: z.array(LibrarySchema),
});

export type TypeSkills = z.infer<typeof SkillsSchema>;
