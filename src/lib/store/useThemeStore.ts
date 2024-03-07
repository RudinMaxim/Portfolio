import { create } from 'zustand';

type Theme = 'light' | 'dark';

type IStateTheme = {
	theme: Theme;
};

type IActionTheme = {
	toggleTheme: () => void;
};

// TODO Сделать запоминание темы и автоматический выбор
export const useThemeStore = create<IStateTheme & IActionTheme>()(
	// persist(
	(set, get) => ({
		theme: 'light',
		toggleTheme: () =>
			set((state) => {
				const newTheme = state.theme === 'light' ? 'dark' : 'light';

				localStorage.setItem('theme', newTheme);

				document.documentElement.dataset.theme = newTheme;

				return { theme: newTheme };
			}),
	})
	// 	{
	// 		name: 'theme',
	// 	}
	// )
);
