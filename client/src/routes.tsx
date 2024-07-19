import { RouteObject } from 'react-router-dom';

import { About, Contact, Dashboard, NotFound } from '@pages/index';
import BaseLayout from '@partials/Base';

export const AppRoutes: RouteObject[] = [
    {
        path: '',
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
];

export const RoutesWithoutLayout: RouteObject[] = [
    {
        path: '*',
        element: <NotFound />,
    },
];
