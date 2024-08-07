import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import type { AppDispatch, RootState } from '../store';

// actions
import { repository, user } from '@features/index';

export const useReduxActions = () => {
    const dispatch = useDispatch<AppDispatch>();

    return bindActionCreators(
        {
            ...user.actions,
            ...repository.actions,
        },
        dispatch,
    );
};

export const useAppState = <T>(selector: (state: RootState) => T) => {
    return useSelector<RootState, T>(selector);
};
