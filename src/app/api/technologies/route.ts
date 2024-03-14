import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

export async function POST() {
	try {
		const technologies = await prisma.technology.findMany({
			include: {
				modules: true,
			},
		});

		NextResponse.json({ technologies });
	} catch (error) {
		console.error(error);
		NextResponse.json({ error: 'Internal server error' });
	}
}
