---
title: CHORUS.HIP
slug: /
sidebar_position: 1
description: The Human Intracerebral EEG Platform.
---

import { Globe } from 'lucide-react'

<div className="hip-home">

<section className="hip-home-hero hip-home-hero-eeg">
  <svg className="hip-home-wave hip-home-wave-eeg" viewBox="0 0 300 300" aria-hidden="true">
    <polyline className="hip-home-wave-trace" style={{ animationDelay: '0.0s' }} points="12,150 30,150 39,58" />
    <polyline className="hip-home-wave-trace" style={{ animationDelay: '0.07s' }} points="39,58 48,212 64,196" />
    <polyline className="hip-home-wave-trace" style={{ animationDelay: '0.14s' }} points="64,196 82,150 118,150" />
    <polyline className="hip-home-wave-trace" style={{ animationDelay: '0.21s' }} points="118,150 127,58 136,212" />
    <polyline className="hip-home-wave-trace" style={{ animationDelay: '0.28s' }} points="136,212 152,196 170,150" />
    <polyline className="hip-home-wave-trace" style={{ animationDelay: '0.35s' }} points="170,150 206,150 215,58" />
    <polyline className="hip-home-wave-trace" style={{ animationDelay: '0.42s' }} points="215,58 224,212 240,196" />
    <polyline className="hip-home-wave-trace" style={{ animationDelay: '0.49s' }} points="240,196 258,150 288,150" />
  </svg>

  <div className="hip-home-eyebrow">CHORUS.HIP</div>

  # The Human Intracerebral EEG Platform

  <p className="hip-home-lead">The secure, collaborative home for intracerebral EEG and neuroimaging research - collect, curate, analyze, and share sensitive brain data without it ever leaving the protected environment.</p>

  <div className="hip-home-cta">
    <a className="hip-home-btn hip-home-btn-primary" href="/hip/getting-started/request-access">Request access <span>→</span></a>
    <a className="hip-home-btn hip-home-btn-ghost" href="#documentation">Browse the documentation</a>
  </div>
</section>

<section id="start" className="hip-home-section">
  <div className="hip-home-head">
    <div>
      <h2>New here? Start with these three.</h2>
      <p>The shortest path from "what is this?" to running your first analysis.</p>
    </div>
    <span className="hip-home-chip">Overview</span>
  </div>

  <div className="hip-home-path">
    <a className="hip-home-step" href="#documentation">
      <span className="hip-home-num">1</span>
      <h3>Understand the platform</h3>
      <p>What CHORUS.HIP is, who it is for, and how secure iEEG research works here.</p>
      <span className="hip-home-go">Read the overview <span>→</span></span>
    </a>

    <a className="hip-home-step" href="/hip/getting-started/request-access">
      <span className="hip-home-num">2</span>
      <h3>Get access</h3>
      <p>Request an account through your center, then log in to your dashboard.</p>
      <span className="hip-home-go">Request access <span>→</span></span>
    </a>

    <a className="hip-home-step" href="/hip/getting-started">
      <span className="hip-home-num">3</span>
      <h3>Run your first analysis</h3>
      <p>Create a workspace, open a session, and launch a tool on your data.</p>
      <span className="hip-home-go">Getting started <span>→</span></span>
    </a>
  </div>
</section>

<section id="documentation" className="hip-home-section hip-home-section-tight">
  <div className="hip-home-head">
    <div>
      <h2>Documentation</h2>
      <p>Everything specific to iEEG and neuroimaging research on CHORUS.HIP.</p>
    </div>
  </div>

  <div className="hip-home-cards">
    <a className="hip-home-card" href="/hip/getting-started">
      <span className="hip-home-k">Guide</span>
      <h3>Get access &amp; onboard <span>→</span></h3>
      <p>Request access, understand participating centers, and take your first steps in the platform.</p>
    </a>

    <a className="hip-home-card" href="/hip/user-guides/working-with-bids-ieeg">
      <span className="hip-home-k">Guide</span>
      <h3>User guides <span>→</span></h3>
      <p>Work in the BIDS-iEEG standard, and upload and curate your iEEG recordings.</p>
    </a>

    <a className="hip-home-card" href="/hip/tutorials/seeg-preprocessing">
      <span className="hip-home-k">Tutorial</span>
      <h3>Tutorials <span>→</span></h3>
      <p>End-to-end neuroscience workflows: SEEG preprocessing, electrode localization, coregistration.</p>
    </a>

    <a className="hip-home-card" href="/hip/reference/applications">
      <span className="hip-home-k">Reference</span>
      <h3>Applications <span>→</span></h3>
      <p>The HIP tool catalogue - AnyWave, Brainstorm, IntrAnat, CiCLONE, FreeSurfer and more.</p>
    </a>

    <a className="hip-home-card" href="/hip/reference/datasets">
      <span className="hip-home-k">Reference</span>
      <h3>Datasets <span>→</span></h3>
      <p>Curated iEEG datasets available in the environment and the conditions for accessing them.</p>
    </a>

    <a className="hip-home-card" href="/hip/reference/faq-support">
      <span className="hip-home-k">Help</span>
      <h3>FAQ &amp; support <span>→</span></h3>
      <p>Common questions, troubleshooting, and how to reach the HIP support team.</p>
    </a>
  </div>
</section>

<section className="hip-home-section hip-home-section-tight">
  <div className="hip-home-xstrip">
    <div className="hip-home-ic" aria-hidden="true"><Globe size={20} strokeWidth={2} /></div>
    <div className="hip-home-xstrip-text">
      <b>Looking for how CHORUS works in general?</b>
      <p>Platform concepts, security frameworks, and deployment live under the CHORUS tab. CHORUS.HIP covers only what is specific to iEEG research.</p>
    </div>
    <a href="/docs">Go to CHORUS docs →</a>
  </div>
</section>

</div>