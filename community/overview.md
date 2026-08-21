---
title: The CHORUS ecosystem
sidebar_position: 1
description: How CHORUS organizes people and institutions - instances, communities, and projects - and how they connect.
---

import { CircleAlert } from 'lucide-react'

<div className="chorus-page">

<div className="chorus-crumb">
	<a href="/community">Community</a>
	<span className="chorus-sep">/</span>
	<span>Overview</span>
	<span className="chorus-sep">/</span>
	<span>The CHORUS ecosystem</span>
</div>

<div className="chorus-page-head">
	<div>
		<div className="chorus-eyebrow">Overview</div>

		# The CHORUS ecosystem
	</div>

	<span className="chorus-chip">Concept</span>
</div>

<p className="chorus-lead">
How CHORUS organizes people and institutions - instances, communities, and projects - and how they connect.
</p>

<div className="chorus-content">
	<div className="chorus-notebox">
		<span className="chorus-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>In short</b>
			<p>Institutions run CHORUS instances; within them, communities group users around a domain or institution; work happens in projects. One person can belong to several communities with a single account.</p>
		</div>
	</div>

	## Instances, communities, projects

	- **Instance** - an institutional deployment of CHORUS, run within an organization's own secure infrastructure.
	- **Community** - a scientific or institutional grouping of users within an instance (for example CHORUS.HIP).
	- **Project** - a governed research activity within a community, defining participants, datasets, and permissions.

	## Belonging to more than one

	A single authenticated user can take part in several communities without separate accounts or platforms.
	A researcher at CHUV, for instance, might belong to both the CHUV community and CHORUS.HIP, using the resources of each according to the permissions they've been granted.

	## Federation

	Instances can join a federation at platform level, connecting communities across deployments while each institution keeps its own governance.
	This is what lets multi-institution research happen without centralizing sensitive data.
	The technical side is covered under [Deploy CHORUS](/docs/deploy-chorus/requirements).

	## What's next

	See which communities are running on CHORUS today.
</div>

<div className="chorus-pager">
	<a href="/community">
		<div className="chorus-pager-lbl">&lt;- Previous</div>
		<div className="chorus-pager-ttl">Community home</div>
	</a>
	<a className="chorus-pager-next" href="/community/communities">
		<div className="chorus-pager-lbl">Next -&gt;</div>
		<div className="chorus-pager-ttl">Communities</div>
	</a>
</div>

</div>
