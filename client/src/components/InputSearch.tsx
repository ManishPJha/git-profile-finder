import { getUserByUserName } from '@features/user';
import searchIcon from '@public/assets/search.svg';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import Button from './Button';

const InputSearch = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Fetch data from GitHub API using the input value
        // Then, dispatch an action to update the Redux store with the fetched data
        console.log(`?`, e.currentTarget['user'].value);
        dispatch(getUserByUserName(e.currentTarget['user'].value));
    };

    return (
        <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="relative flex items-center bg-gray-light"
        >
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <img src={searchIcon} className="h-6 w-6" />
            </div>

            <input
                placeholder="Search GitHub Username"
                name="user"
                // onChange={(e) => setUsername(e.target.value)}
                className="pl-10 pr-24 py-3 bg-gray-light border w-full border-gray-500 rounded-none focus:outline-none"
            />

            <div className="absolute inset-y-0 right-0 flex items-center m-1 mr-2">
                <Button type="submit" variant="primary">
                    Search
                </Button>
            </div>
        </form>
    );
};

export default InputSearch;
