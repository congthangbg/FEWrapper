import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import Demo from 'pages/demo'
import Thong_tin_app_ky from 'pages/Thong_tin_app_ky/thong_tin_app_ky';
import Thong_tin_nguoi_dung from 'pages/Thong_tin_nguoi_dung/thong_tin_nguoi_dung';
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const NotFound = Loadable(lazy(() => import('pages/404')));
// const Demo = Loadable(lazy(() => import('pages/demo/demo.js')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        },
        {
            path: '*',
            element: <NotFound />
        },
        {
            path: '/demo',
            element: <Demo />
        },
        {
            path: '/thong_tin_app_ky',
            // eslint-disable-next-line react/jsx-pascal-case
            element: <Thong_tin_app_ky />
        },
        {
            path: '/thong_tin_nguoi_dung',
            // eslint-disable-next-line react/jsx-pascal-case
            element: <Thong_tin_nguoi_dung />
        }
    ]
};

export default MainRoutes;
