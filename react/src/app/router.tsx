import NotFoundPage from "@/app/not-found"
import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./home"

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/" index element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	)
}
