---
title: Create a workspace
sidebar_position: 3
description: How to create and configure a HIP workspace.
---

import { CircleAlert, Shield } from 'lucide-react'

<div className="hip-page">

<div className="hip-page-head">
	<div>
		<div className="hip-eyebrow">Get access &amp; onboard</div>

		# Create a workspace
	</div>

	<span className="hip-chip">Guide &middot; How-to</span>
</div>

<p className="hip-lead">
A workspace is your secure project space - it holds your data, your tools, and the people you work with. Here&apos;s how to create one and set it up.
</p>

<div className="hip-content">
	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>In short</b>
			<p>A workspace is your secure project space. Create one from Workspaces, name it, choose whether it&apos;s just for you or shared with a team, and - if shared - invite people with roles.</p>
		</div>
	</div>

	## What a workspace is

	A workspace is the secure environment where you do your work - it holds your datasets, the tools you use, and the people you collaborate with. Everything stays governed inside it.

	There are two kinds:

	- **Personal** - private to you, for your own work.
	- **Collaborative** - shared with a team, for multi-center projects.

	## Create one

	<ol className="hip-steps">
		<li>
			<h4>Go to Workspaces</h4>
			<p>From the dashboard, open <strong>Workspaces</strong>.</p>
		</li>
		<li>
			<h4>Start a new workspace</h4>
			<p>Select <strong>Create workspace</strong>. <span className="hip-draft">confirm button label</span></p>
		</li>
		<li>
			<h4>Name and describe it</h4>
			<p>Give it a clear name and a short description so collaborators know its purpose.</p>
		</li>
		<li>
			<h4>Choose personal or collaborative</h4>
			<p>Decide whether it&apos;s private to you or shared with a team.</p>
		</li>
		<li>
			<h4>Save</h4>
			<p>Your new workspace opens, ready for data and tools.</p>
		</li>
	</ol>

	## Invite collaborators

	In a collaborative workspace you can invite people from partner institutions and give each a role - for example researcher, data manager, or principal investigator. What someone can do follows from their role, so access always matches responsibility.

	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><Shield size={18} strokeWidth={2} /></span>
		<div>
			<b>Access follows the data</b>
			<p>Being in a workspace isn&apos;t the same as seeing every dataset. Access to a dataset is granted by its data controller for a specific project. See <a href="/docs/security-governance/data-access-model">the data access model</a> in the CHORUS tab.</p>
		</div>
	</div>

	## What&apos;s next

	With a workspace in place, open a session to start working inside it.
</div>

<div className="hip-pager">
	<a href="/hip/getting-started/dashboard">
		<div className="hip-pager-lbl">&lt;- Previous</div>
		<div className="hip-pager-ttl">Log in &amp; your dashboard</div>
	</a>
	<a className="hip-pager-next" href="/hip/getting-started/manage-workspaces">
		<div className="hip-pager-lbl">Next -&gt;</div>
		<div className="hip-pager-ttl">Manage workspaces</div>
	</a>
</div>

</div>