---
title: Electrode localization with CiCLONE
sidebar_label: Electrode localization (CiCLONE)
sidebar_position: 2
description: A full walkthrough for turning implantation imaging into standardized, anatomically-labelled electrode coordinates with CiCLONE.
---

import { CircleAlert } from 'lucide-react'

<div className="hip-page">

<div className="hip-page-head">
	<div>
		<div className="hip-eyebrow">Tutorials</div>

		# Electrode localization with CiCLONE
	</div>

	<span className="hip-chip">Tutorial</span>
</div>

<p className="hip-lead">
A full walkthrough for turning a patient's implantation imaging into standardized, anatomically-labelled electrode coordinates with CiCLONE - from raw scans to BIDS-ready output.
</p>

<div className="hip-content">
	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>In short</b>
			<p>You'll coregister the post-implantation CT to the pre-implantation MRI, reconstruct the anatomy, localize each electrode contact, transform everything into standard (MNI) space with anatomical labels, and export BIDS-compatible results.</p>
		</div>
	</div>

	## What CiCLONE does

	**CiCLONE** - Clinical imaging Coregistration for Localisation Of Neuro-Electrodes - is an automated pipeline that turns a patient's implantation scans into standardized, anatomically-labelled electrode coordinates.
	It automates work that is otherwise slow and manual, cutting localization from hours to minutes while improving consistency.
	It integrates with 3D Slicer and produces BIDS-compatible outputs that drop straight into the rest of your iEEG pipeline.

	## Follow the demo series

	CiCLONE is demonstrated in an EBRAINS eight-part video series that walks through the pipeline screen by screen.
	Work through the steps below alongside it - each stage here maps to a stage in the series.

	<div className="hip-video">
		<iframe
			src="https://www.youtube.com/embed/videoseries?list=PLesvf9PipGfyHPNEPWK8cHChPrg4zUdCH"
			title="CiCLONE demo series"
			allowFullScreen
			loading="lazy"
		></iframe>
	</div>

	[Open the CiCLONE demo playlist on YouTube →](https://www.youtube.com/playlist?list=PLesvf9PipGfyHPNEPWK8cHChPrg4zUdCH)

	## What you'll need

	SEEG localization uses two images per patient:

	- A **pre-implantation MRI** - the anatomical reference.
	- A **post-implantation CT** - where the implanted electrodes are visible.

	Have both uploaded to your workspace, and a session running with CiCLONE available (add it from the [Applications](/hip/reference/applications) catalogue if needed).

	## The localization workflow

	The pipeline runs in eight stages.
	Exact commands and screens are shown in the video series - the steps below explain what each stage does and what to check. <span className="hip-draft">confirm CiCLONE command / UI details</span>

	<ol className="hip-steps">
		<li>
			<h4>Reconstruct the anatomy</h4>
			<p>From the pre-implantation MRI, generate the cortical surface reconstruction and segmentation (FreeSurfer-based). This is the anatomical reference everything else is placed into.</p>
		</li>
		<li>
			<h4>Coregister CT to MRI</h4>
			<p>Align the post-implantation CT to the MRI using a rigid-body registration, so the electrodes sit correctly in the patient's own anatomy. Check the alignment visually - the skull outlines of CT and MRI should match.</p>
		</li>
		<li>
			<h4>Normalize to standard space</h4>
			<p>Transform the MRI to a standard template (MNI / ICBM152) so coordinates are comparable across patients and studies.</p>
		</li>
		<li>
			<h4>Localize the contacts</h4>
			<p>Detect and cluster the electrode contacts on the CT automatically, numbering them along each electrode's trajectory.</p>
		</li>
		<li>
			<h4>Handle obscured contacts</h4>
			<p>Where imaging artifact hides contacts, localize them semi-automatically: annotate the most distal contact and a second point along the trajectory, and the pipeline infers the rest.</p>
		</li>
		<li>
			<h4>Transform &amp; label</h4>
			<p>Map every contact into MNI coordinates and label it with an anatomical atlas (for example AAL), so each contact carries a brain-region label.</p>
		</li>
		<li>
			<h4>Quality-control</h4>
			<p>Review the 2D and 3D visualizations at the intermediate stages and for the final result, to catch registration or localization errors before you rely on the coordinates.</p>
		</li>
		<li>
			<h4>Export</h4>
			<p>Write out the localization as BIDS-compatible electrode coordinates and labels, ready for analysis.</p>
		</li>
	</ol>

	## What you get

	The result is a standardized, anatomically-labelled set of MNI coordinates for every electrode contact, in BIDS-compatible form - ready for analysis and for aggregation across patients and studies.

	## Where to go next

	With your electrodes localized, analyze the data using the tools in the [Applications](/hip/reference/applications) catalogue, or continue with the other tutorials.
</div>

<div className="hip-pager">
	<a href="/hip/tutorials/seeg-preprocessing">
		<div className="hip-pager-lbl">&lt;- Previous</div>
		<div className="hip-pager-ttl">SEEG preprocessing</div>
	</a>
	<a className="hip-pager-next" href="/hip/tutorials/coregistration">
		<div className="hip-pager-lbl">Next -&gt;</div>
		<div className="hip-pager-ttl">Coregistration</div>
	</a>
</div>

</div>
