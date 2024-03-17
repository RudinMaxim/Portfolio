import { useCallback, useEffect, useRef, useState } from 'react';

export const useRequestThrottler = (
	maxRequestsPerMinute: number,
	minuteInMs: number
) => {
	const [requestCount, setRequestCount] = useState(0);
	const lastRequestTimeRef = useRef<number | null>(null);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			// Очистка таймера при размонтировании компонента
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, []);

	const canSubmit = useCallback(() => {
		const currentTime = Date.now();

		if (
			!lastRequestTimeRef.current ||
			currentTime - lastRequestTimeRef.current >= minuteInMs
		) {
			lastRequestTimeRef.current = currentTime;
			setRequestCount(1);

			// Установка таймера для сброса счетчика через minuteInMs
			timerRef.current = setTimeout(() => {
				setRequestCount(0);
				lastRequestTimeRef.current = null;
			}, minuteInMs);

			return true;
		} else {
			setRequestCount(requestCount + 1);
			return requestCount + 1 <= maxRequestsPerMinute;
		}
	}, [maxRequestsPerMinute, minuteInMs, requestCount]);

	const resetRequestCount = useCallback(() => {
		setRequestCount(0);
		lastRequestTimeRef.current = null;

		// Очистка текущего таймера и установка нового
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		timerRef.current = setTimeout(() => {
			setRequestCount(0);
			lastRequestTimeRef.current = null;
		}, minuteInMs);
	}, [minuteInMs]);

	return { canSubmit, resetRequestCount };
};
