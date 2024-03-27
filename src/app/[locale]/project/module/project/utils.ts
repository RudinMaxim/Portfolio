export function dateRange(start: string, end: string | null) {
	return end ? `${start} - ${end}` : `${start} - Today`;
}
