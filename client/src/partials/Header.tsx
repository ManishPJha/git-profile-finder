import { cn } from '@utils/cn';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navItems = [
        {
            path: '/',
            label: 'Home',
        },
        {
            path: '/about',
            label: 'About',
        },
        {
            path: '/contact',
            label: 'Contact',
        },
    ];

    return (
        <header className="header sticky top-0 flex items-center justify-center px-8 py-02 z-10">
            <nav className="nav font-semibold text-lg bg-gray-light shadow-sm shadow-white rounded-full md:px-16 sm:px-8 mt-4">
                <ul className="flex items-center">
                    {navItems.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={(state) =>
                                cn([
                                    'p-4 md:border-b-2 border-cyan-500 border-opacity-0 hover:border-opacity-100 hover:text-slate-300 duration-200 cursor-pointer',
                                    state.isActive ? 'border-opacity-100' : undefined,
                                ])
                            }
                        >
                            <li>{item.label}</li>
                        </NavLink>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
