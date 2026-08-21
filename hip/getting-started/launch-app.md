---
title: Launch an app
sidebar_position: 6
description: How to launch and use neuroscience apps in HIP.
---

import { CircleAlert } from 'lucide-react'

<div className="hip-page">

<div className="hip-page-head">
	<div>
		<div className="hip-eyebrow">Get access &amp; onboard</div>

		# Launch an app
	</div>

	<span className="hip-chip">Guide &middot; How-to</span>
</div>

<p className="hip-lead">
Apps are the neuroscience tools that come pre-integrated in the platform - no installing, no transfers. You launch them inside a session.
</p>

<div className="hip-content">
	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>In short</b>
			<p>Apps are the neuroscience tools that come pre-integrated in the platform - no installing, no file transfers. You launch them inside a session and work with your data in place.</p>
		</div>
	</div>

	## What&apos;s available

	The platform comes with a range of ready-to-use tools, with more added on request - among them AnyWave, Brainstorm, IntrAnat, GARDEL, CiCLONE, FreeSurfer, FSL, MNE-Python, and MATLAB. For the full list and what each does, see <a href="/hip/reference/applications">Applications</a>.

	## Add an app from the App Store

	If a tool you need isn&apos;t already in your session, add it from the <strong>App Store</strong> on the dashboard. Apps are pre-approved and run inside the secure environment. <span className="hip-draft">confirm App Store flow</span>

	## Launch and work

	<ol className="hip-steps">
		<li>
			<h4>Open your session</h4>
			<p>From your workspace, open a running session - or start one.</p>
		</li>
		<li>
			<h4>Launch the app</h4>
			<p>Choose the tool you want and open it inside the session.</p>
		</li>
		<li>
			<h4>Point it at your data</h4>
			<p>Work with the datasets in your workspace - the data stays in place.</p>
		</li>
		<li>
			<h4>Do your analysis</h4>
			<p>Your results are written back into the workspace, under the same governance.</p>
		</li>
	</ol>

	## Getting results out

	Outputs leave the platform only through a controlled export workflow, with review and authorization - so sensitive data can&apos;t leave by accident. For how export review works, see <a href="/docs/security-governance/exporting-results">Safe outputs</a> in the CHORUS tab.

	## What&apos;s next

	That completes onboarding. From here, the <a href="/hip/user-guides/working-with-bids-ieeg">User guides</a> go deeper into the BIDS-iEEG standard and uploading iEEG data, and the <a href="/hip/tutorials/seeg-preprocessing">Tutorials</a> walk through full analysis workflows.
</div>

<div className="hip-pager">
	<a href="/hip/getting-started/open-session">
		<div className="hip-pager-lbl">&lt;- Previous</div>
		<div className="hip-pager-ttl">Open a session</div>
	</a>
	<a className="hip-pager-next" href="/hip/user-guides/working-with-bids-ieeg">
		<div className="hip-pager-lbl">Next -&gt;</div>
		<div className="hip-pager-ttl">User guides</div>
	</a>
</div>

</div>