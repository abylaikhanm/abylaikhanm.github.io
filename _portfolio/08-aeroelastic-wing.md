---
title: "Aeroelastic Wing"
excerpt: "Three balsa wing designs analyzed in ANSYS and MATLAB, then built and tested to failure in the wind tunnel."
blurb: "How much weight can a wing lose before it twists itself apart? Three balsa wing designs analyzed in ANSYS and MATLAB, then built and tested to failure in the wind tunnel."
tagline: "How much weight can a wing lose before it twists itself apart?"
header:
  teaser: projects/wing/fea-stress.jpg
  image: projects/wing/fea-stress.jpg
hero_contain: true
role: "Structural analysis, fabrication and wind-tunnel testing (course team)"
timeline: "Fall 2025 · Advanced Mechanics of Materials"
team: "Lehigh University"
tools: "SolidWorks · ANSYS · MATLAB · laser cutter · carbon-fiber reinforcement · wind tunnel"
tags: [FEA, Test & Validation, Mechanical Design]
order: 8
category_label: "Structures · FEA + test"
permalink: /projects/aeroelastic-wing/
---

Every gram you take out of a wing makes it fly more efficiently — until the wing gets so flexible that the airflow twists it further and further and it fails. We compared three balsa wing designs (straight, swept-forward, and a rib-and-strut structure) to find that limit, predicted it, and then put a wing in the wind tunnel to see.

## What I did

- Modeled the wings in SolidWorks and ran ANSYS for deflection and stress under the lift load.
- Worked out twist, torsional stiffness and the speed at which each design goes unstable in MATLAB.
- Laser-cut the rib-and-strut wing, reinforced the critical spots with carbon fiber and epoxy, and tested it in the wind tunnel.

<div class="gallery gallery--contain" markdown="0">
  <figure><a href="/images/projects/wing/rib-strut-cad.jpg"><img src="/images/projects/wing/rib-strut-cad.jpg" alt="CAD of the rib-and-strut wing"></a><figcaption>The rib-and-strut design.</figcaption></figure>
  <figure><a href="/images/projects/wing/fea-deflection.jpg"><img src="/images/projects/wing/fea-deflection.jpg" alt="FEA deflection and stress plots"></a><figcaption>Stress and deflection under load.</figcaption></figure>
  <figure><a href="/images/projects/wing/fea-rib.jpg"><img src="/images/projects/wing/fea-rib.jpg" alt="Principal stress in the rib structure"></a><figcaption>Stress in the rib structure.</figcaption></figure>
  <figure><a href="/images/projects/wing/wing-build.jpg"><img src="/images/projects/wing/wing-build.jpg" alt="Laser-cut wing reinforced with carbon fiber"></a><figcaption>The built wing with carbon-fiber reinforcement.</figcaption></figure>
  <figure><a href="/images/projects/wing/wind-tunnel-test.jpg"><img src="/images/projects/wing/wind-tunnel-test.jpg" alt="Wing in the wind tunnel"></a><figcaption>In the tunnel.</figcaption></figure>
  <figure><a href="/images/projects/wing/fea-stress.jpg"><img src="/images/projects/wing/fea-stress.jpg" alt="Skin stress FEA"></a><figcaption>Skin stress distribution.</figcaption></figure>
</div>

## How it turned out

Cutting the weight aggressively dropped the wing's stiffness by about 98% and brought its instability speed down to 26 m/s. In the tunnel the root joint — where the bending is highest — gave way first at roughly 90 mph, right where the analysis said the weak point would be.
