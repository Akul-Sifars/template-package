import { useTheme as useNextTheme } from "next-themes"

import { colorTokens } from "@/constants/theme.constants"
import type { ThemeMode, ResolvedThemeMode } from "@/types/theme.types"

export function useTheme() {
	const { theme, resolvedTheme, setTheme } = useNextTheme()

	return {
		theme: theme as ThemeMode | undefined,
		resolvedTheme: resolvedTheme as ResolvedThemeMode | undefined,
		tokens: colorTokens,
		setTheme: (mode: ThemeMode) => setTheme(mode),
	}
}
