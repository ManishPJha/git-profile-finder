import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import { persistedStore, store } from './store';
import { type PageWithReactNode } from './types/page';

const Providers = ({ children }: PageWithReactNode) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistedStore}>
                    {children}
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
};

export default Providers;
