import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../../prisma/client';

const TechnologySchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	description: z.string().nullable(),
	versions: z.string().nullable(),
	direction: z.enum(['FRONTEND', 'BACKEND', 'DEVOPS']),
	createdAt: z.date(),
	updatedAt: z.date(),
});

const TechnologiesSchema = z.array(TechnologySchema);

export type Technology = z.infer<typeof TechnologySchema>;

export async function GET() {
	try {
		const technologies = await prisma.technology.findMany({
			orderBy: {
				direction: 'asc',
			},
			select: {
				id: true,
				name: true,
				description: true,
				versions: true,
				direction: true,
				createdAt: true,
				updatedAt: true,
			},
		});

		const parsedTechnologies: Technology[] =
			TechnologiesSchema.parse(technologies);

		return NextResponse.json(parsedTechnologies);
	} catch (error) {
		console.error('Error fetching technologies:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch technologies' },
			{ status: 500 }
		);
	}
}
