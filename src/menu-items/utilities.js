// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  DashboardOutlined,
  InfoCircleOutlined,
  UserOutlined,
  ApartmentOutlined,
  HistoryOutlined,
  DisconnectOutlined,
  SettingOutlined,
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  DashboardOutlined,
  InfoCircleOutlined,
  UserOutlined,
  ApartmentOutlined,
  HistoryOutlined,
  DisconnectOutlined,
  SettingOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  // title: "Utilities-Component",
  type: 'group',
  children: [
    // {
    //   id: 'util-typography',
    //   title: 'Typography',
    //   type: 'item',
    //   url: '/typography',
    //   icon: icons.FontSizeOutlined,
    // },
    // {
    //   id: 'util-color',
    //   title: 'Color',
    //   type: 'item',
    //   url: '/color',
    //   icon: icons.BgColorsOutlined,
    // },
    // {
    //   id: 'util-shadow',
    //   title: 'Shadow',
    //   type: 'item',
    //   url: '/shadow',
    //   icon: icons.BarcodeOutlined,
    // },
    // {
    //   id: 'ant-icons',
    //   title: 'Ant Icons',
    //   type: 'item',
    //   url: '/icons/ant',
    //   icon: icons.AntDesignOutlined,
    //   breadcrumbs: true,
    // },
    // {
    //   id: 'demo',
    //   title: 'Demo',
    //   type: 'item',
    //   url: '/demo',
    //   icon: icons.AntDesignOutlined,
    //   breadcrumbs: true,
    // },
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
    {
      id: 'thong_tin_app_ky',
      title: 'Thông tin app ký',
      type: 'item',
      url: '/thong_tin_app_ky',
      icon: icons.InfoCircleOutlined,
      breadcrumbs: true,
    },
    {
      id: 'thong_tin_nguoi_dung',
      title: 'Thông tin người dùng',
      type: 'item',
      url: '/thong_tin_nguoi_dung',
      icon: icons.UserOutlined,
      breadcrumbs: true,
    },
    {
      id: 'quan_ly_thiet_bi',
      title: 'Quản lý thiết bị',
      type: 'item',
      url: '/quan_ly_thiet_bi',
      icon: icons.ApartmentOutlined,
      breadcrumbs: true,
    },
    {
      id: 'lich_su_nguoi_dung',
      title: 'Lịch sử người dùng',
      type: 'item',
      url: '/lich_su_nguoi_dung',
      icon: icons.HistoryOutlined,
      breadcrumbs: true,
    },
    {
      id: 'quan_ly_dau_noi',
      title: 'Quản lý đầu nối',
      type: 'item',
      url: '/quan_ly_dau_noi',
      icon: icons.DisconnectOutlined,
      breadcrumbs: true,
    },
    {
      id: 'thong_so_cau_hinh',
      title: 'Thông số cấu hình',
      type: 'item',
      url: '/thong_so_cau_hinh',
      icon: icons.SettingOutlined,
      breadcrumbs: true,
    },
    {
      id: 'lich_su_thao_tac',
      title: 'Lịch sử thao tác',
      type: 'item',
      url: '/lich_su_thao_tac',
      icon: icons.HistoryOutlined,
      breadcrumbs: true,
    },
  ],
};

export default utilities;
