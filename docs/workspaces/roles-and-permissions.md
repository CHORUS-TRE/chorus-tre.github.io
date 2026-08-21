---
title: Roles & permissions
description: What each workspace role can do in CHORUS.
---

<div class="chorus-page">

<div class="chorus-crumb">
	<a href="/docs">CHORUS</a>
	<span class="chorus-sep">/</span>
	<span>Workspaces</span>
	<span class="chorus-sep">/</span>
	<span>Roles &amp; permissions</span>
</div>

<div class="chorus-page-head">
	<div>
		<div class="chorus-eyebrow">Workspaces</div>

		# Roles &amp; permissions
	</div>

	<span class="chorus-chip">Reference</span>
</div>

<p class="chorus-lead">What each role in a workspace can do, at a glance.</p>

<div class="chorus-content">
	<div class="chorus-notebox">
		<span class="chorus-notebox-ic" aria-hidden="true">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
				<circle cx="12" cy="12" r="9"></circle>
				<path d="M12 16v-4"></path>
				<path d="M12 8h.01"></path>
			</svg>
		</span>
		<div>
			<b>In short</b>
			<p>Roles decide what a person can do in a workspace. The principal investigator controls membership and the workspace lifecycle; data managers handle data; researchers analyze.</p>
		</div>
	</div>

	## The permissions matrix

	What each role can do in a collaborative workspace:

	<table class="chorus-perm">
		<thead>
			<tr>
				<th>Capability</th>
				<th>Principal Investigator</th>
				<th>Data Manager</th>
				<th>Researcher</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Create &amp; configure the workspace</th>
				<td class="chorus-perm-yes">&#10003;</td>
				<td>&mdash;</td>
				<td>&mdash;</td>
			</tr>
			<tr>
				<th>Manage members &amp; roles</th>
				<td class="chorus-perm-yes">&#10003;</td>
				<td>&mdash;</td>
				<td>&mdash;</td>
			</tr>
			<tr>
				<th>Upload &amp; manage data</th>
				<td class="chorus-perm-yes">&#10003;</td>
				<td class="chorus-perm-yes">&#10003;</td>
				<td>&mdash;</td>
			</tr>
			<tr>
				<th>Run analyses (sessions &amp; apps)</th>
				<td class="chorus-perm-yes">&#10003;</td>
				<td class="chorus-perm-yes">&#10003;</td>
				<td class="chorus-perm-yes">&#10003;</td>
			</tr>
			<tr>
				<th>Request data exports</th>
				<td class="chorus-perm-yes">&#10003;</td>
				<td class="chorus-perm-yes">&#10003;</td>
				<td class="chorus-perm-yes">&#10003;</td>
			</tr>
			<tr>
				<th>Close the workspace</th>
				<td class="chorus-perm-yes">&#10003;</td>
				<td>&mdash;</td>
				<td>&mdash;</td>
			</tr>
		</tbody>
	</table>

	<div class="chorus-notebox">
		<span class="chorus-notebox-ic" aria-hidden="true">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
				<circle cx="12" cy="12" r="9"></circle>
				<path d="M12 16v-4"></path>
				<path d="M12 8h.01"></path>
			</svg>
		</span>
		<div>
			<b>This matrix is illustrative</b>
			<p>Exact roles and permissions can vary by deployment and by a project's governance rules. <span class="chorus-draft">confirm role model for CHORUS</span></p>
		</div>
	</div>

	## Notes on roles

	- **Principal Investigator** - owns the workspace, controls membership and lifecycle, and is accountable to the project's governance.
	- **Data Manager** - responsible for uploading, organizing, and curating data.
	- **Researcher** - analyzes the data they have been granted, within the secure environment.

	Data exports are always subject to review, whatever the role - see <a href="/docs/security-governance/exporting-results">Exporting results</a>.
</div>

<div class="chorus-pager">
	<a href="/docs/workspaces/manage-members-and-roles">
		<div class="chorus-pager-lbl">&lt;- Previous</div>
		<div class="chorus-pager-ttl">Manage members &amp; roles</div>
	</a>
	<a class="chorus-pager-next" href="/docs/workspaces/close">
		<div class="chorus-pager-lbl">Next -&gt;</div>
		<div class="chorus-pager-ttl">Close</div>
	</a>
</div>

</div>
