import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../../prisma/client';
import { handleError } from '../../../lib/utils/handleError';
import { ProjectSchema, TypeProject, createProjectSchema } from './schema';

export async function GET(): Promise<NextResponse> {
	try {
		const projects = await prisma.project.findMany({
			orderBy: {
				name: 'asc',
			},
			include: {
				technologies: true,
				libraries: true,
			},
		});

		const parsedProjects: TypeProject[] =
			await ProjectSchema.array().parseAsync(projects);

		return NextResponse.json(parsedProjects);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}
		return handleError(error, 'Failed to fetch projects');
	}
}

export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		const requestData = await request.json();

		const {
			name,
			description,
			tag,
			links,
			technologies,
			libraries,
			start,
			end,
		} = await createProjectSchema.parseAsync(requestData);

		const newProject = await prisma.project.create({
			data: {
				name,
				description,
				tag,
				links,
				technologies: {
					connect: technologies.map((technologyId) => ({ id: technologyId })),
				},
				libraries: {
					connect: libraries?.map((libraryId) => ({ id: libraryId })) || [],
				},
				start,
				end,
			},
		});

		return NextResponse.json(newProject);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}

		return handleError(error, 'Failed to create project');
	}
}

// export async function DELETE(request: NextRequest): Promise<NextResponse> {
// 	try {
// 		const requestData = await request.json();

// 		const { id } = await deleteProjectSchema.parseAsync(requestData);

// 		const deletedProject = await prisma.project.delete({
// 			where: {
// 				id,
// 			},
// 		});

// 		return NextResponse.json(deletedProject);
// 	} catch (error) {
// 		if (error instanceof z.ZodError) {
// 			return NextResponse.json({ errors: error.issues }, { status: 400 });
// 		}
// 		return handleError(error, 'Failed to delete project');
// 	}
// }

// export async function PUT(request: NextRequest): Promise<NextResponse> {
// 	try {
// 		const requestData = await request.json();

// 		const { id, ...data } = await updateProjectSchema.parseAsync(requestData);

// 		const updatedProject = await prisma.project.update({
// 			where: {
// 				id,
// 			},
// 			data: {
// 				...data,
// 				technologies: {
// 					connect:
// 						data.technologies?.map((technologyId) => ({ id: technologyId })) ||
// 						[],
// 				},
// 				libraries: {
// 					connect:
// 						data.libraries?.map((libraryId) => ({ id: libraryId })) || [],
// 				},
// 			},
// 		});

// 		return NextResponse.json(updatedProject);
// 	} catch (error) {
// 		if (error instanceof z.ZodError) {
// 			return NextResponse.json({ errors: error.issues }, { status: 400 });
// 		}
// 		return handleError(error, 'Failed to update project');
// 	}
// }
