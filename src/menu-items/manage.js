
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  DashboardOutlined,
  ChromeOutlined, QuestionOutlined
} from "@ant-design/icons";

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  DashboardOutlined,
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const manage = {
  id: 'manage',
  // title: 'manage',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Quản lý',
      type: 'collapse',
      // url: '/sample-page',
      icon: icons.ChromeOutlined,
      children: [
        {
          id: "quan_ly_thiet_bi",
          title: "Quản Lý Thiết Bị",
          type: "item",
          url: "/quan_ly_thiet_bi",
          icon: icons.AntDesignOutlined,
          breadcrumbs: true,
        },
        {
          id: "lich_su_nguoi_dung",
          title: "Lịch Sử Người Dùng",
          type: "item",
          url: "/lich_su_nguoi_dung",
          icon: icons.AntDesignOutlined,
          breadcrumbs: true,
        },
      ]
  },
  ],
};

export default manage;
