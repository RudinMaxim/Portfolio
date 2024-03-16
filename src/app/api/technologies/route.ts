import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../../prisma/client';
import { handleError } from '../../../lib/utils/handleError';
import {
	DeleteTechnologySchema,
	TechnologiesSchema,
	Technology,
	UpdateTechnologySchema,
	createTechnologiesSchema,
} from './schema';

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
				isShowed: true,
				createdAt: true,
				updatedAt: true,
			},
		});

		const parsedTechnologies: Technology[] =
			await TechnologiesSchema.parseAsync(technologies);

		return NextResponse.json(parsedTechnologies);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}
		return handleError(error, 'Failed to fetch technologies');
	}
}

export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		const requestData = await request.json();

		const { name, description, versions, isShowed } =
			await createTechnologiesSchema.parseAsync(requestData);

		const newTechnology = await prisma.technology.create({
			data: {
				name,
				description,
				versions,
				isShowed,
			},
		});

		return NextResponse.json(newTechnology);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}

		return handleError(error, 'Failed to create technology');
	}
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
	try {
		const requestData = await request.json();

		const { id } = await DeleteTechnologySchema.parseAsync(requestData);

		const deletedTechnology = await prisma.technology.delete({
			where: {
				id,
			},
		});

		return NextResponse.json(deletedTechnology);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}
		return handleError(error, 'Failed to delete technology');
	}
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
	try {
		const requestData = await request.json();

		const { id, ...data } = await UpdateTechnologySchema.parseAsync(
			requestData
		);

		const updatedTechnology = await prisma.technology.update({
			where: {
				id,
			},
			data,
		});

		return NextResponse.json(updatedTechnology);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}
		return handleError(error, 'Failed to update technology');
	}
}
