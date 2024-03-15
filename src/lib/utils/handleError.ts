import { NextResponse } from 'next/server';

export function handleError(error: unknown, message: string) {
	const errorMessage = `${message}: ${error}`;
	console.error(errorMessage);
	return NextResponse.json({ error: errorMessage }, { status: 500 });
}
