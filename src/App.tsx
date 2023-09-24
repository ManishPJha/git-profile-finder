import "./App.css";

import { useRoutes } from "react-router-dom";

import { AppContextProvider } from "@/context/AppContext";
import { routes } from "@/routes/AppRoutes";

const AppContent = () => {
	const content = useRoutes(routes);

	return content;
};

function App() {
	return (
		<AppContextProvider>
			<AppContent />
		</AppContextProvider>
	);
}

export default App;
