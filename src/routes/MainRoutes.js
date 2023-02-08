import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import Demo from 'pages/demo';
import Thong_tin_app_ky from 'pages/Thong_tin_app_ky/thong_tin_app_ky';
import Thong_tin_nguoi_dung from 'pages/Thong_tin_nguoi_dung/thong_tin_nguoi_dung';
import Quan_ly_thiet_bi from 'pages/Quan_ly_thiet_bi/quan_ly_thiet_bi';
import Lich_su_nguoi_dung from 'pages/Lich_su_nguoi_dung/lich_su_nguoi_dung';
import Quan_ly_dau_noi from 'pages/Quan_ly_dau_noi/quan_ly_dau_noi';
import Thong_so_cau_hinh from 'pages/Thong_so_cau_hinh/thong_so_cau_hinh';
import Lich_su_thao_tac from 'pages/Lich_su_thao_tac/lich_su_thao_tac';
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(
  lazy(() => import('pages/components-overview/Typography'))
);
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(
  lazy(() => import('pages/components-overview/AntIcons'))
);
const NotFound = Loadable(lazy(() => import('pages/404')));
// const Demo = Loadable(lazy(() => import('pages/demo/demo.js')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />,
    },
    // {
    //   path: 'color',
    //   element: <Color />,
    // },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />,
        },
      ],
    },
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />,
    // },
    // {
    //   path: 'shadow',
    //   element: <Shadow />,
    // },
    // {
    //   path: 'typography',
    //   element: <Typography />,
    // },
    // {
    //   path: 'icons/ant',
    //   element: <AntIcons />,
    // },
    // {
    //   path: '*',
    //   element: <NotFound />,
    // },
    // {
    //   path: '/demo',
    //   element: <Demo />,
    // },
    {
      path: '/thong_tin_app_ky',
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Thong_tin_app_ky />,
    },
    {
      path: '/thong_tin_nguoi_dung',
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Thong_tin_nguoi_dung />,
    },
    {
      path: '/quan_ly_thiet_bi',
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Quan_ly_thiet_bi />,
    },
    {
      path: '/lich_su_nguoi_dung',
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Lich_su_nguoi_dung />,
    },
    {
      path: '/quan_ly_dau_noi',
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Quan_ly_dau_noi />,
    },
    {
      path: '/thong_so_cau_hinh',
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Thong_so_cau_hinh />,
    },
    {
      path: '/lich_su_thao_tac',
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Lich_su_thao_tac />,
    },
  ],
};

export default MainRoutes;
