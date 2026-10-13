import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "next-themes"
import "@/app/global.css"
import QueryProvider from "@/app/providers/query-provider"
import Router from "@/app/router"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<QueryProvider>
				<Router />
			</QueryProvider>
		</ThemeProvider>
	</StrictMode>,
)
