import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const BaseLayout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default BaseLayout;