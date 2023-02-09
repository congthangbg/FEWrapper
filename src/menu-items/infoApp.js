
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
const infoApp = {
    id: 'infoApp',
    title: 'InfoApp',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Thông tin',
            type: 'collapse',
            // url: '/sample-page',
            icon: icons.ChromeOutlined,
            children: [
                {
                    id: "thong_tin_app_ky",
                    title: "Thông Tin App Ký",
                    type: "item",
                    url: "/thong_tin_app_ky",
                    icon: icons.AntDesignOutlined,
                    breadcrumbs: true,
                  },
                  {
                    id: "thong_tin_nguoi_dung",
                    title: "Thông Tin Người Dùng",
                    type: "item",
                    url: "/thong_tin_nguoi_dung",
                    icon: icons.AntDesignOutlined,
                    breadcrumbs: true,
                  },
            ]
        },
        
    ]
};
// const infoApp = {
//     id: 'infoApp',
//     // title: 'InfoApp',
//     type: 'group',
//     children: [
//         {
//             id: 'sample-page',
//             title: 'Thông tin',
//             type: 'collapse',
//             // url: '/sample-page',
//             icon: icons.ChromeOutlined,
//             children: [
//                 {
//                     id: "thong_tin_app_ky",
//                     title: "Thông Tin App Ký",
//                     type: "item",
//                     url: "/thong_tin_app_ky",
//                     icon: icons.AntDesignOutlined,
//                     breadcrumbs: true,
//                   },
//                   {
//                     id: "thong_tin_nguoi_dung",
//                     title: "Thông Tin Người Dùng",
//                     type: "item",
//                     url: "/thong_tin_nguoi_dung",
//                     icon: icons.AntDesignOutlined,
//                     breadcrumbs: true,
//                   },
//             ]
//         },
        
//     ]
// };

export default infoApp;
