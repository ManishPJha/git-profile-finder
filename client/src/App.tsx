import { useRoutes } from 'react-router-dom';

import { AppRoutes, RoutesWithoutLayout } from './routes';

const AppContent = () => {
    const routes = useRoutes([...AppRoutes, ...RoutesWithoutLayout]);

    return routes;
};

const App = () => {
    return (
        <div>
            <AppContent /> {/* Render the app routes */}
        </div>
    );
};

export default App;
