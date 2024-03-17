import { z } from 'zod';

export const createSubmissionSchema = z.object({
	name: z.string(),
	email: z.string().email().optional().nullable(),
	phone: z.string().optional().nullable(),
	message: z.string().optional().nullable(),
});
