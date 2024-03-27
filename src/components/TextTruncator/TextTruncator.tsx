'use client';
import { useState } from 'react';

export function TextTruncator({ text, maxLength = 250 }) {
	const [truncated, setTruncated] = useState(true);

	const toggleTruncate = () => {
		setTruncated(!truncated);
	};

	const truncatedText = text.slice(0, maxLength) + '...';

	return (
		<div>
			{truncated ? truncatedText : text}
			<button onClick={toggleTruncate}>
				{truncated ? 'Раскрыть' : 'Свернуть'}
			</button>
		</div>
	);
}
