---
title: Requirements
description: Requirements for deploying CHORUS.
---

<div class="chorus-page">

<div class="chorus-page-head">
	<div>
		<div class="chorus-eyebrow">Deploy CHORUS</div>

		# Deployment requirements
	</div>

	<span class="chorus-chip">Reference</span>
</div>

<p class="chorus-lead">The minimum technical requirements for a self-hosted CHORUS installation.</p>

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
			<p>CHORUS runs on standard Kubernetes with open-source tooling - two clusters, a domain, and a DNS server - giving institutions full control over where and how it is deployed.</p>
		</div>
	</div>

	## Local machine tools

	- <strong>Git</strong> - repository cloning.
	- <strong>Kubectl</strong> - the Kubernetes command-line tool.
	- <strong>Helm 3</strong> - Kubernetes package management.
	- <strong>Terraform</strong> - infrastructure-as-code automation.
	- <strong>yq</strong> - command-line YAML processor.

	## Infrastructure

	- Two Kubernetes clusters: a <strong>build cluster</strong> (hosting ArgoCD) and a <strong>remote cluster</strong> (hosting the platform and user workspaces).
	- A registered domain name.
	- A DNS server.

	## Hardware (minimum)

	<strong>Build cluster</strong> (hosts ArgoCD):

	| Node type | Count | Specification |
	| --- | --- | --- |
	| Control-plane | 3 | 8 CPU, 16 GB RAM, 52 GB each |
	| Worker | 3 | 16 CPU, 32 GB RAM, 208 GB each |
	| Persistent storage | - | 1.5 TB |

	<strong>Remote cluster</strong> (hosts the platform and user workspaces):

	| Node type | Count | Specification |
	| --- | --- | --- |
	| Control-plane | 3 | 16 CPU, 32 GB RAM, 52 GB each |
	| Worker | 3 | 16 CPU, 32 GB RAM, 1 TB each |
	| Persistent storage | - | 1.5 TB |

	<div class="chorus-notebox">
		<span class="chorus-notebox-ic" aria-hidden="true">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
				<circle cx="12" cy="12" r="9"></circle>
				<path d="M12 16v-4"></path>
				<path d="M12 8h.01"></path>
			</svg>
		</span>
		<div>
			<b>Full documentation</b>
			<p>Complete installation documentation is at <a href="https://github.com/CHORUS-TRE/chorus-install">github.com/CHORUS-TRE/chorus-install</a>.</p>
		</div>
	</div>
</div>

<div class="chorus-pager">
	<a href="/docs/security-governance/standards">
		<div class="chorus-pager-lbl">&lt;- Previous</div>
		<div class="chorus-pager-ttl">Standards</div>
	</a>
	<a class="chorus-pager-next" href="/docs/deploy-chorus/install">
		<div class="chorus-pager-lbl">Next -&gt;</div>
		<div class="chorus-pager-ttl">Install</div>
	</a>
</div>

</div>
