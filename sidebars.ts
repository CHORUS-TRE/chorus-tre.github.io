import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Overview',
      items: ['overview/what-is-chorus', 'overview/how-chorus-works'],
    },
    {
      type: 'category',
      label: 'Get started',
      items: ['get-started/log-in-and-your-dashboard'],
    },
    {
      type: 'category',
      label: 'Workspaces',
      items: [
        'workspaces/what-a-workspace-is',
        'workspaces/create',
        'workspaces/manage-members-and-roles',
        'workspaces/roles-and-permissions',
        'workspaces/close',
      ],
    },
    {
      type: 'category',
      label: 'Sessions',
      items: [
        'sessions/what-a-session-is',
        'sessions/open',
        'sessions/resources-and-lifecycle',
      ],
    },
    {
      type: 'category',
      label: 'Apps',
      items: ['apps/what-apps-are', 'apps/launch', 'apps/the-app-store'],
    },
    {
      type: 'category',
      label: 'Security & governance',
      items: [
        'security-governance/five-safes',
        'security-governance/data-access-model',
        'security-governance/exporting-results',
        'security-governance/standards',
      ],
    },
    {
      type: 'category',
      label: 'Deploy CHORUS',
      items: ['deploy-chorus/requirements', 'deploy-chorus/install'],
    },
  ],
}

export default sidebars
