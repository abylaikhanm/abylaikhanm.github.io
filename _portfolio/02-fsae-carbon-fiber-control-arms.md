---
title: "Carbon-Fiber Suspension Arms — Formula SAE"
excerpt: "Replacing the race car's steel control arms with carbon-fiber tubes bonded into aluminum joints — design, FEA, machining and the testing to prove the bond."
blurb: "Replacing our race car's steel suspension arms with carbon-fiber tubes bonded into aluminum joints. CAD and FEA, machining the joints ourselves, and a test program to prove the bond before it goes on the car."
tagline: "Lighter suspension for the Lehigh race car — and a joint you can trust."
header:
  teaser: projects/fsae/suspension-cad.jpg
  image: projects/fsae/car-track.jpg
card_video: /images/gifs/fsae-design-loop.mp4
role: "Design & Manufacturing Engineer (senior capstone with the FSAE team)"
timeline: "Dec 2025 – present"
team: "Lehigh Racing (Formula SAE) · capstone team of six"
tools: "SolidWorks · ANSYS FEA · FMEA · CNC milling & turning · epoxy bonding · Instron"
tags: [Mechanical Design, FEA, Manufacturing, Test & Validation]
order: 2
featured: true
badge: "In progress"
category_label: "Automotive · composites"
permalink: /projects/fsae-carbon-fiber-control-arms/
---

Weight on the wheels costs grip, and our Formula SAE car was carrying steel suspension arms. A suspension link only ever pushes or pulls along its length, and for that job a carbon-fiber tube beats steel by a wide margin per kilogram. The hard part is the joint: how do you glue a carbon tube into an aluminum connector so it survives braking, cornering and the occasional curb, race after race? Other teams had tried and failed right at that joint, so that's where most of our work went.

<figure class="figure-wide">
  <img src="/images/gifs/fsae-design-loop.gif" alt="Animated loop: suspension CAD, carbon rod, connector design, bonded-insert cross section, FEA, machining, car on track">
  <figcaption>From the suspension CAD to the carbon tube, the bonded connector, FEA, machining, and the car on track.</figcaption>
</figure>

## What I did

- Designed aluminum connectors that bond into the carbon tubes with structural epoxy. The connector and tube diameters set the glue-line thickness by geometry, so every joint comes out the same no matter who assembles it. An O-ring keeps moisture out and a cross-pin backs up the bond.
- Sized the joints in ANSYS for the braking and cornering loads to a safety factor of two, checked the first vibration mode sits far above anything the road produces, and wrote the team's failure-modes analysis for the arm.
- Machined the connectors in our shop on the lathe and mill, holding the tolerances on the bonding and sealing surfaces.
- Wrote a 45-specimen test program (bond type, overlap length, surface treatment) so the team could settle a design disagreement with data instead of opinions.

<div class="gallery gallery--contain" markdown="0">
  <figure><a href="/images/projects/fsae/connector-cad-1.jpg"><img src="/images/projects/fsae/connector-cad-1.jpg" alt="CAD of the aluminum connector"></a><figcaption>The aluminum connector — same geometry as the steel original, with inserts for the carbon tubes.</figcaption></figure>
  <figure><a href="/images/projects/fsae/insert-cross-section.jpg"><img src="/images/projects/fsae/insert-cross-section.jpg" alt="Cross section of the bonded insert inside the carbon tube"></a><figcaption>Inside the joint: a controlled glue gap and an O-ring seal.</figcaption></figure>
  <figure><a href="/images/projects/fsae/connector-fea.jpg"><img src="/images/projects/fsae/connector-fea.jpg" alt="ANSYS static FEA of the connector"></a><figcaption>Stress in the connector at the design load.</figcaption></figure>
  <figure><a href="/images/projects/fsae/lathe.jpg"><img src="/images/projects/fsae/lathe.jpg" alt="Turning the connector insert on the lathe"></a><figcaption>Turning a test insert in the Lehigh shop.</figcaption></figure>
  <figure><a href="/images/projects/fsae/insert-drawing.png"><img src="/images/projects/fsae/insert-drawing.png" alt="Engineering drawing of the test insert"></a><figcaption>The test-insert drawing.</figcaption></figure>
  <figure><a href="/images/projects/fsae/connector-modal.jpg"><img src="/images/projects/fsae/connector-modal.jpg" alt="Modal analysis results of the connector"></a><figcaption>Vibration modes of the connector.</figcaption></figure>
</div>

## Where it stands

By design the carbon arms come out nearly half the weight of the steel ones — roughly four kilograms off the car. The connectors are machined, and the bonded test specimens are being pulled on the Instron this fall; those results pick the final connector design and surface treatment before the arms go on the car.

<div class="media-row" markdown="0">
  <figure class="figure-wide"><img src="/images/projects/fsae/carbon-rods.jpg" alt="Carbon-fiber rods with rod ends"><figcaption>Carbon tubes with rod ends — the team's earlier purchased rods, our baseline.</figcaption></figure>
  <figure class="figure-wide"><img src="/images/projects/fsae/instron.jpg" alt="Instron test machine"><figcaption>The Instron where the bonded specimens get pulled.</figcaption></figure>
</div>

<div class="gallery gallery--2" markdown="0">
  <figure><a href="/images/projects/fsae/car-track.jpg"><img src="/images/projects/fsae/car-track.jpg" alt="Lehigh FSAE car on an autocross course"></a><figcaption>The car on course.</figcaption></figure>
  <figure><a href="/images/projects/fsae/car-front.jpg"><img src="/images/projects/fsae/car-front.jpg" alt="Front view of the Lehigh FSAE car"></a><figcaption>Front suspension on the current car.</figcaption></figure>
</div>
