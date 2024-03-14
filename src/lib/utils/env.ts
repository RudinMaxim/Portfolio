// import { z } from 'zod';

// const envSchema = z.object({
// 	DATABASE_URL: z.string(),
// 	BASE_URL: z.string(),
// });

// const { DATABASE_URL, BASE_URL } = process.env;

// const envServerSchema = envSchema.safeParse({ DATABASE_URL, BASE_URL });

// if (!envServerSchema.success) {
// 	// @ts-check
// 	console.error(envServerSchema.error.issues);

// 	throw new Error(`Environment variables are not correct: ${envServerSchema}`);
// }

// export const envVariablesData = envServerSchema.data;

// type EnvVariablesType = z.infer<typeof envSchema>;

// declare global {
// 	namespace NodeJS {
// 		interface ProcessEnv extends EnvVariablesType {}
// 	}
// }
