---
title: "Drone Wind-Tunnel Testing — Aerotargets"
excerpt: "Wind-tunnel testing of a scaled target drone during my internship at Aerotargets International."
blurb: "Wind-tunnel testing of a scaled target drone during my internship at Aerotargets International — the mounting fixture, force measurements up to 84 mph, and recommendations for cutting drag."
tagline: "Finding out where a drone's drag comes from — and how to cut it."
header:
  teaser: projects/aerotargets/drone-model.jpg
  image: projects/aerotargets/drone-model.jpg
role: "Mechanical Engineering Intern"
timeline: "May – Aug 2024"
team: "Aerotargets International (Kingston, PA) · tests run in the Lehigh wind tunnel"
tools: "SolidWorks · six-axis force sensor · NI DAQ · LabVIEW · MATLAB"
tags: [Test & Validation, Fluids, Mechanical Design]
order: 5
featured: true
category_label: "Industry · aerodynamic testing"
permalink: /projects/aerotargets-wind-tunnel/
---

Aerotargets builds target drones for training, and they wanted real numbers on how their airframe performs before changing the design. Our lab ran a three-phase wind-tunnel program for them; I worked on the largest-scale phase — a one-third-scale fuselage model tested with its panels on and off at speeds up to 84 mph.

## What I did

- Scaled and modified the model in SolidWorks to fit the tunnel and the force sensor, and designed the fixture that holds it — with a four-bar linkage so the test angle can be changed without re-rigging the whole setup.
- Mounted the model on a six-axis force sensor behind a streamlined fairing and ran the speed sweeps, logging the data through NI DAQ and LabVIEW.
- Processed the forces in MATLAB, corrected for the shortened wings, and checked the setup against theory: the measured lift matched the published wing data within a few percent.

<div class="media-row" markdown="0">
  <figure class="figure-wide"><img src="/images/projects/aerotargets/drone-model.jpg" alt="Scaled UAV model mounted in the wind tunnel"><figcaption>The one-third-scale model in the Lehigh tunnel.</figcaption></figure>
  <figure class="figure-wide"><img src="/images/projects/aerotargets/wind-tunnel.jpg" alt="Lehigh wind tunnel"><figcaption>The tunnel and data-acquisition station.</figcaption></figure>
</div>

## How it turned out

The lift was already as good as theory says it can be, so the only way to fly more efficiently was less drag. The fuselage-panel changes we recommended to Aerotargets' engineers lowered drag and raised the lift-to-drag ratio by about ten percent.

<div class="gallery gallery--contain" markdown="0">
  <figure><a href="/images/projects/aerotargets/plot-cd.png"><img src="/images/projects/aerotargets/plot-cd.png" alt="Drag coefficient vs angle of attack"></a><figcaption>Drag versus angle of attack, panels on and off.</figcaption></figure>
  <figure><a href="/images/projects/aerotargets/plot-cl.png"><img src="/images/projects/aerotargets/plot-cl.png" alt="Lift coefficient vs angle of attack with thin-airfoil theory"></a><figcaption>Lift follows the theory line — so the gains had to come from drag.</figcaption></figure>
  <figure><a href="/images/projects/aerotargets/plot-ld.png"><img src="/images/projects/aerotargets/plot-ld.png" alt="Lift-to-drag ratio vs angle of attack"></a><figcaption>Lift-to-drag ratio across the test phases.</figcaption></figure>
</div>
