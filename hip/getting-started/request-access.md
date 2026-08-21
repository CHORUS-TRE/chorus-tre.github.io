---
title: Request access
sidebar_position: 1
description: How to request access to CHORUS.HIP.
---

import { CircleAlert, TriangleAlert, Shield } from 'lucide-react'

<div className="hip-page">

<div className="hip-crumb">
	<a href="/hip">CHORUS.HIP</a>
	<span className="hip-sep">/</span>
	<a href="/hip/getting-started">Get access &amp; onboard</a>
	<span className="hip-sep">/</span>
	<span>Request access</span>
</div>

<div className="hip-page-head">
	<div>
		<div className="hip-eyebrow">Get access &amp; onboard</div>

		# Request access
	</div>

	<span className="hip-chip">Guide &middot; How-to</span>
</div>

<p className="hip-lead">
Access to the HIP runs on an EBRAINS account plus HIP accreditation.
This page explains who can request access, what you will need, and the four steps to get in.
</p>

<div className="hip-content">
	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>In short</b>
			<p>Create an EBRAINS account, request HIP accreditation from the HIP team, then log in at thehip.app and accept the terms. Nothing is installed on your own computer.</p>
		</div>
	</div>

	## Who can request access

	Access is open to users with a legitimate research or development interest, in Europe and beyond.
	In practice, most users are researchers and clinicians working on intracerebral EEG and related neuroscience.

	Access to the HIP is granted on top of an EBRAINS account.
	Accreditation is currently managed by the CHUV Leadership, with oversight from the Data Governance Steering Committee.
	You do not need to be a security or infrastructure expert - the platform handles governance and data protection for you.

	<div className="hip-notebox hip-notebox-warn">
		<span className="hip-notebox-ic hip-notebox-ic-warn" aria-hidden="true"><TriangleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>The HIP is moving to CHORUS</b>
			<p>This page describes the current EBRAINS-based process. As the HIP moves onto CHORUS, account and accreditation steps may change - we will update this page when they do. <span className="hip-draft">confirm final CHORUS flow</span></p>
		</div>
	</div>

	## What you'll need

	- A registered **EBRAINS user account** (free to request).
	- A legitimate research or development interest in using the platform.
	- The name of the project or principal investigator you will work with, if you already know it.

	## The four steps

	<ol className="hip-steps">
		<li>
			<h4>Create an EBRAINS account</h4>
			<p>An EBRAINS account is the prerequisite for HIP access. Request one at <a href="https://www.ebrains.eu/page/sign-up">ebrains.eu/page/sign-up</a>. Your account needs to be permitted and authenticated before you can go further.</p>
		</li>
		<li>
			<h4>Request HIP accreditation</h4>
			<p>An EBRAINS account alone does not open the HIP - you have to request accreditation before your first login. Do this in any of these ways:</p>
			<p>&bull; Email the HIP team directly at <a href="mailto:support@thehip.app">support@thehip.app</a><br />
				 &bull; Email EBRAINS support at <a href="mailto:support@ebrains.eu">support@ebrains.eu</a>, who forward it to the HIP team<br />
				 &bull; Reach out via the <a href="https://www.ebrains.eu/tools/human-intracerebral-eeg-platform">EBRAINS HIP page</a></p>
		</li>
		<li>
			<h4>Log in to the platform</h4>
			<p>Once accredited, sign in with your EBRAINS account at <a href="https://thehip.app/login">thehip.app/login</a>. You will reach the tools and any data that is your own or shared with you.</p>
		</li>
		<li>
			<h4>Accept the terms</h4>
			<p>On first login you will be asked to accept the <strong>HIP Terms of Use</strong> and the <a href="https://www.ebrains.eu/page/terms-and-policies">EBRAINS Terms and Policies</a>. Accepting confirms you will comply with the applicable rules for handling sensitive data.</p>
		</li>
	</ol>

	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><Shield size={18} strokeWidth={2} /></span>
		<div>
			<b>Your data stays protected</b>
			<p>Data is de-identified at the source institution before it reaches the platform, and it never leaves the secure environment. For how this works across every CHORUS deployment, see <a href="/docs/security-governance/five-safes">Security &amp; governance</a> in the CHORUS tab.</p>
		</div>
	</div>

	## What happens next

	Once you are in, the next step is getting your bearings on the dashboard - where you will find your activity, workspaces, and resources - before creating a workspace and running your first analysis.
</div>

<div className="hip-pager">
	<a href="/hip/getting-started">
		<div className="hip-pager-lbl">&lt;- Previous</div>
		<div className="hip-pager-ttl">Get access &amp; onboard</div>
	</a>
	<a className="hip-pager-next" href="/hip/getting-started/dashboard">
		<div className="hip-pager-lbl">Next -&gt;</div>
		<div className="hip-pager-ttl">Log in &amp; your dashboard</div>
	</a>
</div>

</div>