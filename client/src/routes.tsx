import { RouteObject } from 'react-router-dom';

import { About, Dashboard, NotFound } from '@pages/index';
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
        ],
    },
];

export const RoutesWithoutLayout: RouteObject[] = [
    {
        path: '*',
        element: <NotFound />,
    },
];
