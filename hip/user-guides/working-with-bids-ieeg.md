---
title: Working with BIDS-iEEG
sidebar_position: 1
description: What the BIDS-iEEG standard is, what converting your data into it involves, and which tools help you do it.
---

import { CircleAlert, TriangleAlert } from 'lucide-react'

<div className="hip-page">

<div className="hip-page-head">
	<div>
		<div className="hip-eyebrow">User guides</div>

		# Working with BIDS-iEEG
	</div>

	<span className="hip-chip">Concept</span>
</div>

<p className="hip-lead">
The platform stores iEEG data in BIDS-iEEG, a shared standard that makes datasets look the same across centers and tools.
Here's what the standard is - before you use it to convert your own data.
</p>

<div className="hip-content">
	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>In short</b>
			<p>BIDS-iEEG is a standard way of structuring and naming iEEG data. On the platform you convert your data into it yourself, using dedicated tools - it isn't done automatically. This is what makes data reusable across projects and tools.</p>
		</div>
	</div>

	## What BIDS-iEEG is

	BIDS-iEEG is a community standard that defines how intracerebral EEG data and its metadata are organized and named.
	Its purpose is simple: any center's data ends up with the same shape, so it can be understood and used without bespoke handling.

	## What conversion involves

	<div className="hip-notebox hip-notebox-warn">
		<span className="hip-notebox-ic hip-notebox-ic-warn" aria-hidden="true"><TriangleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>You convert your data - it's not automatic</b>
			<p>The platform does not convert uploads for you. Converting to BIDS-iEEG is a deliberate step you carry out, which gives you control over how your data is organized and annotated.</p>
		</div>
	</div>

	Converting to BIDS-iEEG means organizing your files into the BIDS folder hierarchy, renaming them to the BIDS convention, and adding the required metadata - including electrode and coordinate information specific to iEEG.

	## Tools for conversion

	The platform provides dedicated tools to help you import and convert your data - notably **BIDS Manager**.
	Several integrated analysis tools can also export to BIDS, including Brainstorm and MNE-Python (via MNE-BIDS). <span className="hip-draft">confirm recommended tool</span>

	## Why it matters

	Standardization is what enables cross-project and cross-tool reuse, and it underpins FAIR data - making data as findable, accessible, interoperable, and reusable as governance allows.
	For the fuller picture, see [Standards](/docs/security-governance/standards) in the CHORUS tab. <span className="hip-draft">mockup pointed to a "FAIR data in practice" page that does not exist yet</span>

	## What's next

	Now that you know what the standard is, the next step is to upload your recordings and convert them.
</div>

<div className="hip-pager">
	<a href="/hip/getting-started/launch-app">
		<div className="hip-pager-lbl">&lt;- Previous</div>
		<div className="hip-pager-ttl">Launch an app</div>
	</a>
	<a className="hip-pager-next" href="/hip/user-guides/upload-ieeg-data">
		<div className="hip-pager-lbl">Next -&gt;</div>
		<div className="hip-pager-ttl">Upload iEEG data</div>
	</a>
</div>

</div>
