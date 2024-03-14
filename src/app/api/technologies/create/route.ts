import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../../../prisma/client';

const createTechnologiesSchema = z.object({
	name: z.string(),
	description: z.string().optional(),
	versions: z.string().optional(),
});

export async function POST(request: NextRequest) {
	const body = await request.json();

	try {
		const bodyTechnolog = createTechnologiesSchema.parse(body);

		const newProject = await prisma.technology.createMany({
			data: {
				name: bodyTechnolog.name,
				description: bodyTechnolog.description,
				versions: bodyTechnolog.versions,
			},
		});

		return NextResponse.json(newProject);
	} catch (error) {
		console.error('Error creating technology:', error);

		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}

		return NextResponse.json(
			{ error: 'Failed to create technology' },
			{ status: 500 }
		);
	}
}
