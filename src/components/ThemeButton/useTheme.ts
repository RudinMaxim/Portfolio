import { useEffect, useState } from 'react';
import { dark_mode, light_mode } from '../../assets/icons';

export const useTheme = (): {
	theme: string;
	icon: any;
	toggleTheme: () => void;
} => {
	const [theme, setTheme] = useState(
		window.matchMedia
			? window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
			: 'light'
	);
	const icon = theme === 'light' ? dark_mode : light_mode;

	useEffect(() => {
		const themeInStorage = localStorage.getItem('theme');
		if (themeInStorage) {
			setTheme(themeInStorage);
		} else {
			const userPrefersDark =
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches;
			const initialTheme = userPrefersDark ? 'dark' : 'light';
			setTheme(initialTheme);
			localStorage.setItem('theme', initialTheme);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	return {
		theme,
		icon,
		toggleTheme,
	};
};
