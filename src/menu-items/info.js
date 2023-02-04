// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const info = {
  id: 'info',
  title: 'info',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'collapse',
      // url: '/sample-page',
      icon: icons.ChromeOutlined,
      children: [
        {
          id: 'test',
          title: 'test',
          type: 'item',
          url: '/demo',
          icon: icons.QuestionOutlined,
          // external: true, // load lại form
          // target: true, //next tab
          breadcrumbs: true,
        },
      ],
    },
  ],
};

export default info;
