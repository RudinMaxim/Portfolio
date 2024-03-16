import { NextResponse } from 'next/server';
import { toast } from 'sonner';

export function handleError(error: unknown, message: string) {
	const errorMessage = `${message}: ${error}`;
	console.error(errorMessage);
	toast.error(errorMessage);
	return NextResponse.json({ error: errorMessage }, { status: 500 });
}
