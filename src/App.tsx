import "./App.css";

import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

import { AppContextProvider } from "@/context/AppContext";
import { routes } from "@/routes/AppRoutes";

import { store } from "@/redux/store";

import config from "./config/default";

const AppContent = () => {
	const content = useRoutes(routes);

	return content;
};

function App() {
	return (
		<Provider store={store}>
			<AppContextProvider>
				<Auth0Provider
					domain={config.AUTH0_DOMAIN}
					clientId={config.AUTH0_CLIENT_ID}
					authorizationParams={{
						redirect_uri: window.location.origin + "/callback",
					}}
				>
					<AppContent />
				</Auth0Provider>
			</AppContextProvider>
		</Provider>
	);
}

export default App;
