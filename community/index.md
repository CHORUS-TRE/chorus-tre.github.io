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
    <polygon className="community-home-wave-poly" style={{ animationDelay: '0s' }} points="106.0,110.0 80.0,125.0 54.0,110.0 54.0,80.0 80.0,65.0 106.0,80.0" />
    <polygon className="community-home-wave-poly" style={{ animationDelay: '0.1s' }} points="230.8,92.0 210.0,104.0 189.2,92.0 189.2,68.0 210.0,56.0 230.8,68.0" />
    <polygon className="community-home-wave-poly" style={{ animationDelay: '0.2s' }} points="184.6,178.0 150.0,198.0 115.4,178.0 115.4,138.0 150.0,118.0 184.6,138.0" />
    <polygon className="community-home-wave-poly" style={{ animationDelay: '0.3s' }} points="114.1,226.0 95.0,237.0 75.9,226.0 75.9,204.0 95.0,193.0 114.1,204.0" />
    <polygon className="community-home-wave-poly" style={{ animationDelay: '0.4s' }} points="257.4,222.0 228.0,239.0 198.6,222.0 198.6,188.0 228.0,171.0 257.4,188.0" />
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
