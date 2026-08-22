---
title: Community
slug: /
sidebar_position: 0
description: The ecosystem of research communities, institutions, and contributors built on CHORUS.
---

import { Globe } from 'lucide-react'

<div className="hip-home">

<section className="hip-home-hero community-home-hero">
  <svg className="hip-home-wave community-home-wave" viewBox="0 0 300 300" aria-hidden="true">
    <polygon className="community-home-wave-poly" style={{ animationDelay: '0s' }} points="82.9,99.4 47.8,119.6 12.7,99.4 12.7,58.9 47.8,38.6 82.9,58.9" />
    <polygon className="community-home-wave-poly" style={{ animationDelay: '0.1s' }} points="251.4,75.1 223.3,91.3 195.2,75.1 195.2,42.7 223.3,26.5 251.4,42.7" />
    <polygon className="community-home-wave-poly" style={{ animationDelay: '0.2s' }} points="189.0,191.2 142.3,218.2 95.6,191.2 95.6,137.2 142.3,110.2 189.0,137.2" />
    <polygon className="community-home-wave-poly" style={{ animationDelay: '0.3s' }} points="93.8,256.0 68.1,270.8 42.3,256.0 42.3,226.3 68.1,211.4 93.8,226.3" />
    <polygon className="community-home-wave-poly" style={{ animationDelay: '0.4s' }} points="287.3,250.6 247.6,273.5 207.9,250.6 207.9,204.7 247.6,181.7 287.3,204.7" />
  </svg>

  <div className="hip-home-eyebrow">Community</div>

  # The CHORUS community

  <p className="hip-home-lead">CHORUS is more than a platform - it's a growing ecosystem of research communities, institutions, and contributors. Find a community, join one, or bring CHORUS to your own institution.</p>

  <div className="hip-home-cta">
    <a className="hip-home-btn hip-home-btn-primary" href="/community/communities">Browse the communities <span>→</span></a>
    <a className="hip-home-btn hip-home-btn-ghost" href="/community/get-involved">Get involved</a>
  </div>

  <p className="hip-home-note">New to the model? Start with <a href="/community/overview">the CHORUS ecosystem</a>.</p>
</section>

<section id="choose" className="hip-home-section">
  <div className="hip-home-head">
    <div>
      <h2>Explore the community</h2>
      <p>Three ways in.</p>
    </div>
  </div>

  <div className="hip-home-cards">
    <a className="hip-home-card" href="/community/overview">
      <span className="hip-home-k">Concept</span>
      <h3>The CHORUS ecosystem <span>→</span></h3>
      <p>How CHORUS organizes people and institutions - instances, communities, projects, and federation.</p>
    </a>

    <a className="hip-home-card" href="/community/communities">
      <span className="hip-home-k">Directory</span>
      <h3>Communities <span>→</span></h3>
      <p>The scientific communities running on CHORUS today - CHORUS.HIP, CHORUS.EBRAINS, CHORUS.CHUV.</p>
    </a>

    <a className="hip-home-card" href="/community/get-involved">
      <span className="hip-home-k">Guide</span>
      <h3>Get involved <span>→</span></h3>
      <p>Join a community, deploy CHORUS at your institution, or contribute to the open-source project.</p>
    </a>
  </div>
</section>

<section className="hip-home-section hip-home-section-tight">
  <div className="hip-home-xstrip">
    <div className="hip-home-ic" aria-hidden="true"><Globe size={20} strokeWidth={2} /></div>
    <div className="hip-home-xstrip-text">
      <b>The wider project</b>
      <p>For the vision, the team, and the latest news, visit the CHORUS website.</p>
    </div>
    <a href="https://www.chorus-tre.ch/en/">Visit chorus-tre.ch →</a>
  </div>
</section>

</div>
