---
sidebar_position: 2
---

import React from 'react';
import AppCard from '@site/src/components/AppCard';
import appsRaw from '@site/src/data/apps-raw.json';

# App Catalog

{(() => {
  // Slugs present in CHORUS-TRE/images/apps (derived from repo directories)
  const repoSlugs = new Set([
    'arx', 'benchmark', 'bidsificator', 'brainstorm', 'btvreplay', 'chorus-assistant', 'ciclone',
    'dcm2niix', 'filemanager', 'freesurfer', 'fsl', 'hibop', 'itksnap', 'jupyterlab', 'kiosk',
    'localizer', 'onlyoffice', 'rstudio', 'sciterminal', 'slicer', 'trcanonymizer', 'vscode',
  ]);

  const logoMap = {
    arx: '/img/app-catalog/arx.png',
    bidsificator: '/img/app-catalog/bidsmanager.png',
    brainstorm: '/img/app-catalog/brainstorm.png',
    didata: '/img/app-catalog/didata.png',
    jupyterlab: '/img/app-catalog/jupyterlab.png',
    localizer: '/img/app-catalog/localizer.png',
    rstudio: '/img/app-catalog/rstudio.png',
    vscode: '/img/app-catalog/vscode.png',
  };

  function slugify(name) {
    return String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
  }

  const apps = appsRaw?.result?.apps || [];
  const cards = apps
    .map((app) => {
      const slug = slugify(app.name);
      if (!repoSlugs.has(slug)) return null;
      const logo = logoMap[slug];
      const version = app.dockerImageTag || app.dockerImageReleaseTag || 'latest';
      const link = app.kioskConfigURL || undefined;
      return { slug, name: app.name, logo, version, link };
    })
    .filter(Boolean);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'flex-start' }}>
      {cards.map((c) => (
        <AppCard
          key={`${c.slug}-${c.version}`}
          logo={c.logo}
          name={c.name}
          version={c.version}
          link={c.link}
        />
      ))}
    </div>
  );
})()}
