---
title: Install
description: How to install CHORUS.
---

<div class="chorus-page">

<div class="chorus-crumb">
	<a href="/docs">CHORUS</a>
	<span class="chorus-sep">/</span>
	<span>Deploy CHORUS</span>
	<span class="chorus-sep">/</span>
	<span>Install</span>
</div>

<div class="chorus-page-head">
	<div>
		<div class="chorus-eyebrow">Deploy CHORUS</div>

		# Install CHORUS
	</div>

	<span class="chorus-chip">Guide · How-to</span>
</div>

<p class="chorus-lead">How to deploy a CHORUS instance on your own infrastructure.</p>

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
			<p>Deploy CHORUS on your own secure infrastructure with open-source tooling, and join a federation at platform level. The full install guide lives in the chorus-install repository.</p>
		</div>
	</div>

	## How installation works

	Installation is infrastructure-as-code. ArgoCD on the build cluster deploys the platform onto the remote cluster, using Helm and Terraform to configure everything from your own repository - so institutions keep full control over where and how CHORUS runs.

	## Getting started

	<ol class="chorus-steps">
		<li>
			<h4>Meet the requirements</h4>
			<p>Provision the two Kubernetes clusters, a domain, and a DNS server, and install the local tools. See <a href="/docs/deploy-chorus/requirements">Requirements</a>.</p>
		</li>
		<li>
			<h4>Clone the install repository</h4>
			<p>Clone <a href="https://github.com/CHORUS-TRE/chorus-install">github.com/CHORUS-TRE/chorus-install</a>.</p>
		</li>
		<li>
			<h4>Configure for your infrastructure</h4>
			<p>Set your domain, cluster details, and platform values. <span class="chorus-draft">confirm configuration steps from the repo</span></p>
		</li>
		<li>
			<h4>Deploy</h4>
			<p>Run the tooling to deploy the platform onto the remote cluster via ArgoCD.</p>
		</li>
		<li>
			<h4>Verify and access</h4>
			<p>Confirm the platform is up and reachable at your domain.</p>
		</li>
	</ol>

	## Joining a federation

	An institutional CHORUS instance can join a federation at platform level, connecting communities across deployments while each institution keeps its own governance. <span class="chorus-draft">confirm federation onboarding</span>
</div>

<div class="chorus-pager">
	<a href="/docs/deploy-chorus/requirements">
		<div class="chorus-pager-lbl">&lt;- Previous</div>
		<div class="chorus-pager-ttl">Requirements</div>
	</a>
	<a class="chorus-pager-next" href="/hip">
		<div class="chorus-pager-lbl">Next -&gt;</div>
		<div class="chorus-pager-ttl">Explore CHORUS.HIP</div>
	</a>
</div>

</div>
