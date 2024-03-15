import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../../prisma/client';
import {
	DeleteTechnologySchema,
	TechnologiesSchema,
	Technology,
	UpdateTechnologySchema,
	createTechnologiesSchema,
} from './schema';

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

export async function DELETE(request: NextRequest) {
	try {
		const { id } = DeleteTechnologySchema.parse(await request.json());

		const deletedTechnology = await prisma.technology.delete({
			where: {
				id,
			},
		});

		return NextResponse.json(deletedTechnology);
	} catch (error) {
		console.error('Error deleting technology:', error);
		return NextResponse.json(
			{ error: 'Failed to delete technology' },
			{ status: 500 }
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const { name, description, versions } = createTechnologiesSchema.parse(
			await request.json()
		);

		const newProject = await prisma.technology.createMany({
			data: {
				name,
				description,
				versions,
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

export async function PUT(request: NextRequest) {
	try {
		const { id, ...data } = UpdateTechnologySchema.parse(await request.json());

		const updatedTechnology = await prisma.technology.update({
			where: {
				id,
			},
			data,
		});

		return NextResponse.json(updatedTechnology);
	} catch (error) {
		console.error('Error updating technology:', error);
		return NextResponse.json(
			{ error: 'Failed to update technology' },
			{ status: 500 }
		);
	}
}
