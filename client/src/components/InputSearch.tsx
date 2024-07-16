import { useState } from 'react';

import searchIcon from '@public/assets/search.svg';
import Button from './Button';

import type { InputSearchPropsTypes } from '@_types/components/InputSearch';

const InputSearch = ({
    dispatch,
    getUserByUserName,
    getRepositoriesByUsername,
}: InputSearchPropsTypes) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = e.currentTarget['user'];
        if (!user.value) {
            user.focus();
            setErrorMessage('Please enter a username');
            return;
        }
        setErrorMessage(undefined);
        dispatch(getUserByUserName(user.value));
        dispatch(getRepositoriesByUsername(user.value));
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="relative flex items-center bg-gray-light"
            >
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <img src={searchIcon} className="h-6 w-6" alt="Search Icon" />
                </div>

                <input
                    placeholder="Search GitHub Username"
                    name="user"
                    className="pl-10 pr-24 py-3 bg-gray-light border w-full border-gray-500 rounded-none focus:outline-none"
                />

                <div className="absolute inset-y-0 right-0 flex items-center m-1 mr-2">
                    <Button type="submit" variant="primary">
                        Search
                    </Button>
                </div>
            </form>
            {errorMessage && <div className="text-red-500 text-xs mt-1">{errorMessage}</div>}
        </>
    );
};

export default InputSearch;
