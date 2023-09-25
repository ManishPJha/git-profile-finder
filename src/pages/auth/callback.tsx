import React, { useEffect, useMemo } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { useReduxActions } from "@/hooks/useReduxActions";

const Callback: React.FC = () => {
	const { isAuthenticated, error, user } = useAuth0();

	const navigate = useNavigate();

	const actions = useReduxActions();

	const profile = useMemo(() => {
		if (isAuthenticated && user) {
			return user;
		}

		return;
	}, [isAuthenticated, user]);

	useEffect(() => {
		if (error) {
			console.error(
				"🚀 ~ file: callback.tsx:17 ~ useEffect ~ error:",
				error
			);
		}

		if (profile) {
			actions.setProfile(profile);
			navigate("/");
		}
	}, [error, profile]);

	return <div>Something Went Wrong!</div>;
};

export default Callback;
