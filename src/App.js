// project import
import  Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import Loadable from 'components/Loadable';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //
const App = () => (
    <ThemeCustomization>
        <ScrollTop>
            <Routes/>
        </ScrollTop>
        <ToastContainer />
    </ThemeCustomization>
);

export default App;
