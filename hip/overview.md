---
title: What is CHORUS.HIP
sidebar_position: 2
description: Concept overview of CHORUS.HIP.
---

import { CircleAlert, Shield } from 'lucide-react'

<div className="hip-page">

<div className="hip-crumb">
  <a href="/hip">CHORUS.HIP</a>
  <span className="hip-sep">/</span>
  <span>What is CHORUS.HIP</span>
</div>

<div className="hip-page-head">
  <div>
    <div className="hip-eyebrow">Overview</div>

    # What is CHORUS.HIP
  </div>

  <span className="hip-chip">Concept</span>
</div>

<p className="hip-lead">
CHORUS.HIP is a secure, collaborative platform for intracerebral EEG and neuroimaging research - a place to collect, curate, share, and analyze sensitive brain data at international scale, without it ever leaving the protected environment.
</p>

<div className="hip-content">
  <div className="hip-notebox">
    <span className="hip-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
    <div>
      <b>In short</b>
      <p>CHORUS.HIP is the Human Intracerebral EEG Platform, now built on CHORUS - a Trusted Research Environment for sensitive data. It brings iEEG data, specialized tools, and governance together in one browser-based workspace.</p>
    </div>
  </div>

  ## Why it exists

  Intracerebral EEG data is unusual: it's **rare** - recorded from patients with drug-resistant epilepsy during pre-surgical evaluation - and **highly sensitive**, carrying strict privacy requirements. It's also **scattered**, sitting in individual clinical centers, each with its own formats, storage, and policies.

  On top of that, tools and workflows are fragmented: researchers rely on local software installs, manual file transfers, and ad-hoc organization, which limits reproducibility and makes multi-center work hard. Large-scale iEEG research needs a way to securely bring de-identified data from many hospitals together, standardize it, and analyze it - all under one consistent set of rules. That's what CHORUS.HIP is for.

  ## What it gives you

  - A **browser-based environment** for accessing, curating, and analyzing iEEG data - no local installation.
  - Ready-to-use **neuroscience tools**: AnyWave, Brainstorm, IntrAnat, CiCLONE, FreeSurfer, MNE-Python, MATLAB, and more.
  - **BIDS-iEEG** data management, with automated conversion and curation.
  - Flexible **workspaces** - personal for private work, collaborative for multi-center projects.
  - Role-based access, project-level permissions, and full auditability.

  ## Who it's for

  CHORUS.HIP is built for researchers and clinicians working with intracerebral EEG and neuroimaging - principal investigators running multi-center studies, contributing centers sharing data, and analysts working on pooled datasets. Because it's aligned with the standards institutions already require, it's also designed to be straightforward for ethics boards and data governance committees to approve.

  ## The HIP, now powered by CHORUS

  CHORUS.HIP is the evolution of the Human Intracerebral EEG Platform (the HIP), which has been operational since 2022. The platform researchers know is preserved - the same workspaces, tools, and data pipelines - while CHORUS provides the infrastructure underneath: structured governance, security, and scalable storage.

  <div className="hip-notebox">
    <span className="hip-notebox-ic" aria-hidden="true"><Shield size={18} strokeWidth={2} /></span>
    <div>
      <b>How the two tabs relate</b>
      <p>Anything generic to the platform - core concepts, the full security model, deployment - lives under the <a href="/docs">CHORUS</a> tab. CHORUS.HIP covers only what's specific to iEEG research. So when a topic here is really about CHORUS in general, this documentation points you across rather than repeating it.</p>
    </div>
  </div>

  ## Where to start

  If you want to understand the moving parts first, read <a href="/hip/how-it-works">How it works</a>. If you're ready to get in, head to <a href="/hip/getting-started/request-access">Request access</a>.
</div>

<div className="hip-pager">
  <a href="/hip">
    <div className="hip-pager-lbl">&lt;- Previous</div>
    <div className="hip-pager-ttl">CHORUS.HIP home</div>
  </a>
  <a className="hip-pager-next" href="/hip/how-it-works">
    <div className="hip-pager-lbl">Next -&gt;</div>
    <div className="hip-pager-ttl">How it works</div>
  </a>
</div>

</div>
