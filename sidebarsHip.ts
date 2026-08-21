import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebarsHip: SidebarsConfig = {
  hipSidebar: [
    'index',
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview',
        'how-it-works',
      ],
    },
    {
      type: 'category',
      label: 'Get access & onboard',
      link: {
        type: 'doc',
        id: 'getting-started/index',
      },
      items: [
        'getting-started/request-access',
        'getting-started/dashboard',
        'getting-started/create-workspace',
        'getting-started/manage-workspaces',
        'getting-started/open-session',
        'getting-started/launch-app',
      ],
    },
    {
      type: 'category',
      label: 'User guides',
      items: [
        'user-guides/working-with-bids-ieeg',
        'user-guides/upload-ieeg-data',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/seeg-preprocessing',
        'tutorials/electrode-localization-ciclone',
        'tutorials/coregistration',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/applications',
        'reference/datasets',
        'reference/faq-support',
      ],
    },
  ],
}

export default sidebarsHip