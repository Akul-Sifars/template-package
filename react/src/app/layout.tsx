import { TooltipProvider } from "@/components/ui/tooltip"
import { Outlet } from "react-router"

export default function Layout() {
	return (
		<TooltipProvider>
			<Outlet />
		</TooltipProvider>
	)
}
