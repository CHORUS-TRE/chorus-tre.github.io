---
title: How it works
sidebar_position: 3
description: Conceptual overview of the CHORUS.HIP operating model.
---

import { CircleAlert } from 'lucide-react'

<div className="hip-page">

<div className="hip-page-head">
	<div>
		<div className="hip-eyebrow">Overview</div>

		# How it works
	</div>

	<span className="hip-chip">Concept</span>
</div>

<p className="hip-lead">
A quick tour of how CHORUS.HIP is put together - the pieces you work with, how your data moves through them, and how it stays protected.
</p>

<div className="hip-content">
	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>In short</b>
			<p>You work in secure <strong>workspaces</strong>; inside them you open <strong>sessions</strong> that run pre-integrated <strong>tools</strong> on your data. Data is de-identified at its source, standardized to BIDS-iEEG, and every action is logged. CHORUS provides the security and governance underneath.</p>
		</div>
	</div>

	## The pieces you work with

	Three building blocks make up almost everything you do:

	- **Workspaces** - secure project spaces that hold your data, tools, and collaborators. Personal ones are private to you; collaborative ones are shared with a team.
	- **Sessions** - the running, secure environments you open inside a workspace, where your tools actually execute.
	- **Apps** - the pre-integrated neuroscience tools you launch inside a session.

	The <a href="/hip/getting-started">Get access &amp; onboard</a> guides walk through each of these in practice.

	## How your data flows

	Data follows a controlled path from the hospital to your analysis. It&apos;s <strong>de-identified at the source institution</strong> before it ever reaches the platform, transferred securely, then organized into the <strong>BIDS-iEEG</strong> standard so it looks the same across every contributing center. You analyze it <strong>in place</strong>, using the integrated tools - the data never leaves the secure environment - and any results you take out go through a <strong>controlled export</strong> step with review and authorization.

	## How it&apos;s kept safe

	Protection is built in layers, following the widely used Five Safes approach:

	- **Safe people** - only authorized, verified users get in.
	- **Safe projects** - data is used only for approved purposes.
	- **Safe settings** - work happens in isolated, controlled environments.
	- **Safe data** - recordings are de-identified before transfer and stay protected throughout.
	- **Safe outputs** - results are reviewed before they leave.

	Access is role-based and scoped to a project, and every action - access, analysis, export - is logged and auditable. For the full security model, see <a href="/docs/security-governance/five-safes">Security &amp; governance</a> in the CHORUS tab.

	## Built on CHORUS

	CHORUS.HIP is one scientific community on the shared CHORUS platform; CHORUS.EBRAINS is another, for broader neuroscience. They run on the same architecture, governance, and security, which is why generic platform documentation lives under the CHORUS tab while the HIP-specific material lives here. Throughout, the data controller - usually the institution that collected the data - keeps authority over who can use it and how.

	## Standards it meets

	The platform is designed around the standards institutions already expect: ISO/IEC 27001 information-security principles, GDPR-compatible practices, alignment with Trusted Research Environment frameworks such as SATRE and DARE UK, and it&apos;s built to operate as a Secure Processing Environment under the European Health Data Space. This is what makes adoption straightforward for the committees that have to sign off on it.
</div>

<div className="hip-pager">
	<a href="/hip/overview">
		<div className="hip-pager-lbl">&lt;- Previous</div>
		<div className="hip-pager-ttl">What is CHORUS.HIP</div>
	</a>
	<a className="hip-pager-next" href="/hip/getting-started">
		<div className="hip-pager-lbl">Next -&gt;</div>
		<div className="hip-pager-ttl">Get access &amp; onboard</div>
	</a>
</div>

</div>
