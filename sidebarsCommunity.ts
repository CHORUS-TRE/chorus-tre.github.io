import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebarsCommunity: SidebarsConfig = {
  communitySidebar: [
    'index',
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview',
        'communities',
      ],
    },
    {
      type: 'category',
      label: 'Participate',
      items: [
        'get-involved',
      ],
    },
  ],
}

export default sidebarsCommunity
