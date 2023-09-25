import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { userFeatures } from "@/redux/features/index";
import { AppDispatch, AppState } from "@/redux/store";

export const useReduxActions = () => {
	const dispatch = useDispatch<AppDispatch>();

	return bindActionCreators(
		{
			...userFeatures.actions,
		},
		dispatch
	);
};

export const useReduxState: TypedUseSelectorHook<AppState> = (state) =>
	useSelector(state);
