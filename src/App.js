// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import Loadable from 'components/Loadable';
import { lazy } from 'react';
import { Router } from 'react-router';
import { useNavigate } from 'react-router-dom';
const NotFound = Loadable(lazy(() => import('pages/404')));
// let navigate = useNavigate();
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //
// var Router = require('Routes');
const App = () => (
    <ThemeCustomization>
        <ScrollTop>
            <Routes>
                <Router path='*' to='/404' element={<NotFound/>} />
            </Routes>
        </ScrollTop>
    </ThemeCustomization>
);

export default App;
