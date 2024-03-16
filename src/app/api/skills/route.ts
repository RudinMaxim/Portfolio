import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../../prisma/client';
import { handleError } from '../../../lib/utils/handleError';

export async function GET(): Promise<NextResponse> {
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
				libraries: {
					select: {
						id: true,
						name: true,
						description: true,
						versions: true,
						technologyId: true,
						projectId: true,
						createdAt: true,
						updatedAt: true,
					},
					where: {
						isShowed: true,
					},
				},
			},
		});

		return NextResponse.json(technologies);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}
		return handleError(error, 'Failed to fetch technologies');
	}
}
