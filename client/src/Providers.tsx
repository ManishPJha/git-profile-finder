import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/es/integration/react';

import ErrorFallback from '@components/ErrorFallback';
import { persistedStore, store } from './store';
import { type PageWithReactNode } from './types/page';

const Providers = ({ children }: PageWithReactNode) => {
    return (
        <BrowserRouter>
            <ErrorBoundary fallback={<ErrorFallback />}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistedStore}>
                        {children}
                        <ToastContainer />
                    </PersistGate>
                </Provider>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

export default Providers;
