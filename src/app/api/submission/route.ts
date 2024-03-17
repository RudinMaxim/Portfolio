import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../../prisma/client';
import { handleError } from '../../../lib/utils/handleError';
import { createSubmissionSchema } from './schema';

export async function POST(request: NextRequest) {
	try {
		const requestData = await request.json();

		const { name, email, message } = createSubmissionSchema.parse(requestData);

		const newSubmission = await prisma.submission.create({
			data: {
				name,
				email,
				message,
			},
		});

		return NextResponse.json(newSubmission);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.issues }, { status: 400 });
		}

		return handleError(error, 'Failed to create submission');
	}
}
