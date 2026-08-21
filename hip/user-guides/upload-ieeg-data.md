---
title: Upload iEEG data
sidebar_position: 2
description: How to prepare, transfer, and convert your iEEG recordings into BIDS-iEEG inside a CHORUS.HIP workspace.
---

import { CircleAlert, TriangleAlert } from 'lucide-react'

<div className="hip-page">

<div className="hip-crumb">
	<a href="/hip">CHORUS.HIP</a>
	<span className="hip-sep">/</span>
	<span>User guides</span>
	<span className="hip-sep">/</span>
	<span>Upload iEEG data</span>
</div>

<div className="hip-page-head">
	<div>
		<div className="hip-eyebrow">User guides</div>

		# Upload iEEG data
	</div>

	<span className="hip-chip">Guide &middot; How-to</span>
</div>

<p className="hip-lead">
Getting your recordings into the platform is a secure transfer into a workspace.
Once they're in, you convert them into BIDS-iEEG yourself. Here's how to prepare, upload, and convert.
</p>

<div className="hip-content">
	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>In short</b>
			<p>De-identify your data at your institution first, then transfer it into a workspace. From there you convert it into BIDS-iEEG using the platform's tools - a step you do, not an automatic one.</p>
		</div>
	</div>

	## Before you upload

	<div className="hip-notebox hip-notebox-warn">
		<span className="hip-notebox-ic hip-notebox-ic-warn" aria-hidden="true"><TriangleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>De-identify at the source</b>
			<p>Recordings must be de-identified at your institution before they're transferred. The platform protects data once it's inside, but removing direct identifiers is the contributing center's responsibility, done first.</p>
		</div>
	</div>

	Have your de-identified iEEG recordings ready, together with the essential metadata that describes them. <span className="hip-draft">confirm supported formats</span>

	## Upload into a workspace

	<ol className="hip-steps">
		<li>
			<h4>Open the workspace</h4>
			<p>Go to the workspace where the data belongs.</p>
		</li>
		<li>
			<h4>Open Data</h4>
			<p>From the workspace, open <strong>Data</strong>. <span className="hip-draft">confirm label</span></p>
		</li>
		<li>
			<h4>Start a secure transfer</h4>
			<p>Begin an upload and select your de-identified files.</p>
		</li>
		<li>
			<h4>Confirm the transfer</h4>
			<p>Your files are now stored in the workspace, ready to be converted.</p>
		</li>
	</ol>

	## Convert to BIDS-iEEG

	Uploading puts your raw files in the workspace; it does not convert them.
	Converting to BIDS-iEEG is a separate step you carry out, using a dedicated tool such as **BIDS Manager** to organize and annotate your data into the standard. <span className="hip-draft">confirm conversion tool &amp; flow</span>

	If you're not yet sure what the standard involves, read [Working with BIDS-iEEG](/hip/user-guides/working-with-bids-ieeg) first.

	## What's next

	With your recordings uploaded and converted, you're ready for the tutorials - full analysis workflows from preprocessing to electrode localization.
</div>

<div className="hip-pager">
	<a href="/hip/user-guides/working-with-bids-ieeg">
		<div className="hip-pager-lbl">&lt;- Previous</div>
		<div className="hip-pager-ttl">Working with BIDS-iEEG</div>
	</a>
	<a className="hip-pager-next" href="/hip/tutorials/seeg-preprocessing">
		<div className="hip-pager-lbl">Next -&gt;</div>
		<div className="hip-pager-ttl">Tutorials</div>
	</a>
</div>

</div>
