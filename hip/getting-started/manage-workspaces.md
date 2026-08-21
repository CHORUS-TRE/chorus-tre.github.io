---
title: Manage workspaces
sidebar_position: 4
description: How workspace membership, organization, and closure are handled over the life of a project.
---

import { CircleAlert, Shield } from 'lucide-react'

<div className="hip-page">

<div className="hip-crumb">
	<a href="/hip">CHORUS.HIP</a>
	<span className="hip-sep">/</span>
	<a href="/hip/getting-started">Get access &amp; onboard</a>
	<span className="hip-sep">/</span>
	<span>Manage workspaces</span>
</div>

<div className="hip-page-head">
	<div>
		<div className="hip-eyebrow">Get access &amp; onboard</div>

		# Manage workspaces
	</div>

	<span className="hip-chip">Guide</span>
</div>

<p className="hip-lead">
Looking after a workspace over time means managing its members, keeping it organized, and closing it when the project ends.
Some of this is reserved for the project's principal investigator.
</p>

<div className="hip-content">
	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>In short</b>
			<p>The principal investigator manages who's in a workspace, following the project's governance rules. Everyone helps keep it organized; when the project ends, the workspace is closed - and the data controller stays in charge throughout.</p>
		</div>
	</div>

	## Who manages members

	Managing members is the **principal investigator's** responsibility.
	The PI invites people from partner institutions and assigns each a role - for example researcher or data manager - according to the project's governance rules.
	Permissions follow the role, so what someone can do always matches their responsibility.
	Other members work within the access they've been given; they don't add or remove people themselves.

	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><Shield size={18} strokeWidth={2} /></span>
		<div>
			<b>Membership is governed by the project</b>
			<p>Who can join a workspace, and with what role, is set by the project's rules rather than decided ad hoc. This keeps access aligned with the agreements the project was approved under. See <a href="/docs/security-governance/data-access-model">the data access model</a> in the CHORUS tab.</p>
		</div>
	</div>

	## Organizing your work

	Datasets live in the workspace and sessions run inside it.
	Keep names and descriptions clear so collaborators can find their way around, especially on larger multi-center projects.

	## Personal vs collaborative

	A personal workspace is private to you; a collaborative one is shared with a team.
	If a piece of work grows from individual to shared, that's the point at which the PI would set up a collaborative workspace with the right people invited.

	## Closing a workspace

	Throughout a workspace's life, the data controller - usually the institution that collected the data - keeps authority over how it's used.
	When a project ends or its conditions change, access is removed and the workspace is closed.

	## What's next

	With the workspace and its members set up, open a session to start working inside it.
</div>

<div className="hip-pager">
	<a href="/hip/getting-started/create-workspace">
		<div className="hip-pager-lbl">&lt;- Previous</div>
		<div className="hip-pager-ttl">Create a workspace</div>
	</a>
	<a className="hip-pager-next" href="/hip/getting-started/open-session">
		<div className="hip-pager-lbl">Next -&gt;</div>
		<div className="hip-pager-ttl">Open a session</div>
	</a>
</div>

</div>
