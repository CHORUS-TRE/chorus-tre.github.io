---
title: Applications
sidebar_position: 1
description: The neuroscience tools available in CHORUS.HIP, grouped by purpose.
---

import { CircleAlert } from 'lucide-react'

<div className="hip-page">

<div className="hip-page-head">
	<div>
		<div className="hip-eyebrow">Reference</div>

		# Applications
	</div>

	<span className="hip-chip">Reference</span>
</div>

<p className="hip-lead">
The neuroscience tools available in CHORUS.HIP, grouped by purpose - each group listed alphabetically.
</p>

<div className="hip-content">
	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>In short</b>
			<p>CHORUS.HIP comes with ready-to-use tools grouped by what they're for - signal analysis, imaging and electrode localization, data standardization, and general computing. More can be added on request.</p>
		</div>
	</div>

	## Signal analysis &amp; visualization

	- **AnyWave** - visualization and analysis of electrophysiological signals (SEEG, EEG, MEG).
	- **Brainstorm** - analysis of brain signals, including connectivity and source modeling.
	- **MNE-Python** - Python toolbox for M/EEG and iEEG processing.

	## Imaging &amp; electrode localization

	- **CiCLONE** - automated SEEG pipeline for image co-registration and electrode localization. [See the tutorial →](/hip/tutorials/electrode-localization-ciclone)
	- **dcm2niix** - DICOM-to-NIfTI conversion.
	- **FreeSurfer** - cortical surface reconstruction and segmentation.
	- **FSL** - neuroimaging analysis toolbox.
	- **GARDEL** - automatic localization of electrode contacts.
	- **IntrAnat** - anatomical localization of intracerebral electrodes.
	- **MRtrix3** - diffusion MRI and tractography.

	## Data &amp; standards

	- **BIDS Manager** - import and convert data into the BIDS-iEEG standard. See [Working with BIDS-iEEG](/hip/user-guides/working-with-bids-ieeg).

	## General computing

	- **Jupyter** - notebooks for interactive analysis.
	- **MATLAB** - scripting and numerical analysis.
	- **RStudio / R** - statistical computing.
	- **VS Code** - a full code editor.

	<div className="hip-notebox">
		<span className="hip-notebox-ic" aria-hidden="true"><CircleAlert size={18} strokeWidth={2} /></span>
		<div>
			<b>This is a selection</b>
			<p>The catalogue evolves, and new tools can be added on request. <span className="hip-draft">confirm the current tool list</span></p>
		</div>
	</div>
</div>

<div className="hip-pager">
	<a href="/hip/tutorials/coregistration">
		<div className="hip-pager-lbl">&lt;- Previous</div>
		<div className="hip-pager-ttl">Coregistration</div>
	</a>
	<a className="hip-pager-next" href="/hip/reference/datasets">
		<div className="hip-pager-lbl">Next -&gt;</div>
		<div className="hip-pager-ttl">Datasets</div>
	</a>
</div>

</div>
