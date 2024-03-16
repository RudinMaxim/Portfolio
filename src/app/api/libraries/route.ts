import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../../prisma/client';
import { handleError } from '../../../lib/utils/handleError';
import {
	DeleteLibrarySchema,
	LibrariesSchema,
	Library,
	UpdateLibrarySchema,
	createLibrarySchema,
} from './schema';

export async function GET(): Promise<NextResponse> {
	try {
		const libraries = await prisma.libraries.findMany({
			orderBy: {
				name: 'asc',
			},
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
		});

		const parsedLibraries: Library[] = await LibrariesSchema.parseAsync(
			libraries
		);

		return NextResponse.json(parsedLibraries);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}
		return handleError(error, 'Failed to fetch libraries');
	}
}

export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		const requestData = await request.json();

		const { name, description, versions, technologyId, projectId } =
			await createLibrarySchema.parseAsync(requestData);

		const newLibrary = await prisma.libraries.create({
			data: {
				name,
				description,
				versions,
				technologyId,
				projectId,
			},
		});

		return NextResponse.json(newLibrary);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}

		return handleError(error, 'Failed to create library');
	}
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
	try {
		const requestData = await request.json();

		const { id } = await DeleteLibrarySchema.parseAsync(requestData);

		const deletedLibrary = await prisma.libraries.delete({
			where: {
				id,
			},
		});

		return NextResponse.json(deletedLibrary);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}
		return handleError(error, 'Failed to delete library');
	}
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
	try {
		const requestData = await request.json();

		const { id, ...data } = await UpdateLibrarySchema.parseAsync(requestData);

		const updatedLibrary = await prisma.libraries.update({
			where: {
				id,
			},
			data,
		});

		return NextResponse.json(updatedLibrary);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}
		return handleError(error, 'Failed to update library');
	}
}
