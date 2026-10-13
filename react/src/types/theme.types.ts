export type ThemeMode = "light" | "dark" | "system"

export type ResolvedThemeMode = "light" | "dark"

export type ColorTokens =
	typeof import("@/constants/theme.constants").colorTokens

export interface UseThemeValue {
	theme: ThemeMode | undefined
	resolvedTheme: ResolvedThemeMode | undefined
	tokens: ColorTokens
	setTheme: (mode: ThemeMode) => void
}
