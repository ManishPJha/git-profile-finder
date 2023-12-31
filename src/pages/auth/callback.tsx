import React, { useEffect, useMemo } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { useReduxActions } from "@/hooks/useReduxActions";

const Callback: React.FC = () => {
	const { isAuthenticated, error, user } = useAuth0();

	const { setProfile } = useReduxActions();

	const navigate = useNavigate();

	const profile = useMemo(() => {
		if (isAuthenticated && user) {
			return user;
		}

		return null;
	}, [isAuthenticated, user]);

	useEffect(() => {
		setProfile(null);
		if (error) {
			console.error(
				"🚀 ~ file: callback.tsx:17 ~ useEffect ~ error:",
				error
			);
		}

		if (profile) {
			setProfile(profile);
			navigate("/");
		}
	}, [error, profile]);

	return <div>Please wait redirecting you if no issue...</div>;
};

export default Callback;
