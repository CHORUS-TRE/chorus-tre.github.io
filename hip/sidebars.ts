import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  defaultSidebar: [
    'about',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['training', 'helpdesk'],
    },
    {
      type: 'category',
      label: 'Scientific Workflows',
      items: ['chat', 'governance'],
    },
  ],
}

export default sidebars