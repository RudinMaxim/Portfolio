'use client';
import { ButtonIcon } from '../../ui';
import { useTheme } from './useTheme';

export function ThemeButton() {
	const { theme, icon, toggleTheme } = useTheme();

	return (
		<ButtonIcon onClick={toggleTheme} icon={icon} alt={`${theme} theme`} />
	);
}
