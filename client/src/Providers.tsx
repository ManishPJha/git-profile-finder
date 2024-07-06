import { BrowserRouter } from 'react-router-dom';
import { type PageWithReactNode } from './types/page';

const Providers = ({ children }: PageWithReactNode) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};

export default Providers;
