---
title: "Cyber-Physical Robotic Flapper"
excerpt: "A two-axis robotic foil I designed and built for Lehigh's water channel to study how ocean waves can be turned into thrust."
blurb: "A robotic foil I designed and built for Lehigh's water channel. Its control loop physically reproduces any spring you program — stiffness, damping, inertia — without a single real spring, so the lab changes the setup with a keystroke instead of rebuilding it. Best Undergraduate Poster at ASME IMECE 2025."
tagline: "A robotic swimmer that can pretend to be any spring you type into the software."
header:
  teaser: projects/cpfd/rig-cad.jpg
  image: projects/cpfd/rig-cad.jpg
hero_contain: true
card_video: /images/cpfd-testbed.mp4
role: "Designed, built and run the rig as an undergraduate researcher"
timeline: "Nov 2023 – present"
team: "Unsteady Flow Interactions Lab, Lehigh University · Prof. Keith Moored"
tools: "SolidWorks · CNC, waterjet, 3D printing · NI DAQ · MATLAB/Simulink · servo motors, encoders, six-axis force sensor"
tags: [Mechanical Design, Manufacturing, Robotics & Controls, Test & Validation, Fluids]
order: 1
featured: true
category_label: "Research hardware"
permalink: /projects/cyber-physical-robotic-flapper/
---

Our lab studies how the motion of ocean waves can be turned into thrust — the same physics that lets a fish push itself forward with its tail. To do that experimentally you need a foil that pitches and heaves in a water channel with exactly known mass, stiffness and damping. The old way to change any of those was to physically swap springs and foils and reassemble the hardware, which took about half an hour each time.

This is the rig I designed and built to replace that process, from the first CAD model to the control code that runs it today.

<div class="gallery gallery--contain" markdown="0">
  <figure><video src="/images/cpfd-testbed.mp4" poster="/images/projects/cpfd/rig-video-poster.jpg" autoplay loop muted playsinline preload="metadata"></video><figcaption>The rig running a pitch-and-heave sweep in the channel.</figcaption></figure>
  <figure><a href="/images/projects/cpfd/rig-photo.jpg"><img src="/images/projects/cpfd/rig-photo.jpg" alt="The built rig mounted on the water channel"></a><figcaption>The finished rig on the Lehigh water channel.</figcaption></figure>
  <figure><a href="/images/projects/cpfd/pitch-assembly-cad.jpg"><img src="/images/projects/cpfd/pitch-assembly-cad.jpg" alt="Pitch motor, encoder and force-sensor stack above the foil"></a><figcaption>The pitch stack: motor, encoder, force sensor, foil.</figcaption></figure>
</div>

## What I did

- Designed the whole two-axis mechanism in SolidWorks — about 45 custom parts — and made them in-house by CNC machining, waterjet cutting and 3D printing.
- Wired up the motors, encoders and a six-axis force sensor through an NI DAQ into a real-time MATLAB/Simulink control loop.
- Made the rig *cyber-physical*: the force sensor measures the water pushing on the foil, the controller works out how a foil with the programmed mass, spring and damper would respond, and the motor moves it exactly that way. The "spring" now lives in software, so changing it takes seconds.
- Automated the experiments so the rig runs whole parameter sweeps on its own and saves every data set, with emergency stops, motion limits and an operating tutorial so other lab members can use it safely.

<figure class="figure-wide">
  <img src="/images/projects/cpfd/control-block-diagram.png" alt="Block diagram of the cyber-physical control loop">
  <figcaption>How the virtual spring works: the measured fluid force feeds a mass–spring–damper model that the motor then tracks, 4,000 times a second.</figcaption>
</figure>

## How it turned out

The lab went from roughly eight experiments a day to about thirty, without buying a new spring for every test, and the rig can even replay the heave motion of a real ship. The work won the **Best Undergraduate Research Poster Award at ASME IMECE 2025** and has been presented at the APS Division of Fluid Dynamics and at ONR program reviews.

My favorite problem along the way: the foil wasn't tracking its commanded motion, and tuning the controller didn't fix it. Comparing the motor's position with an external encoder showed the motor turning while the foil lagged behind — a mechanical clearance in the drive, not a control issue. I redesigned those joints as press fits and rebuilt the linear drive, and the tracking error dropped five-fold. Measure the mechanism before you tune the controller.

<div class="gallery gallery--contain" markdown="0">
  <figure><a href="/images/projects/cpfd/rig-labelled.png"><img src="/images/projects/cpfd/rig-labelled.png" alt="Labelled diagram of the rig components"></a><figcaption>The main pieces: rail and belt, pitch and heave motors, waterjet-cut supports, force sensor.</figcaption></figure>
  <figure><a href="/images/projects/cpfd/foil-sensor-cad.jpg"><img src="/images/projects/cpfd/foil-sensor-cad.jpg" alt="CAD of the foil-to-sensor interface"></a><figcaption>Where the foil meets the force sensor.</figcaption></figure>
  <figure><a href="/images/projects/cpfd/imece-poster.jpg"><img src="/images/projects/cpfd/imece-poster.jpg" alt="ASME IMECE 2025 poster"></a><figcaption>The IMECE 2025 poster (click to enlarge).</figcaption></figure>
</div>
