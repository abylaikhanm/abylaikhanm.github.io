---
title: "TunaBot Leader–Follower Experiments"
excerpt: "Two robotic tuna swimming in line in the Lehigh water channel, with synchronized control and flow imaging between them."
blurb: "Two robotic tuna swimming one behind the other in the Lehigh water channel — synchronized control of both robots and flow imaging of the wake between them."
tagline: "Two robotic fish, one water channel."
header:
  teaser: projects/tunabot/tunabot.jpg
  image: projects/tunabot/tunabot.jpg
role: "Undergraduate researcher — experiments and platform build"
timeline: "2025 – present"
team: "Unsteady Flow Interactions Lab, Lehigh University"
tools: "Arduino · MATLAB/Simulink · NI DAQ · PIV flow imaging · air-bearing platform"
tags: [Robotics & Controls, Fluids, Test & Validation]
order: 7
category_label: "Research · robotics"
permalink: /projects/tunabot-inline-swimming/
---

The lab's two TunaBot robotic fish swim one behind the other in the water channel, each on its own carriage so we can set the spacing and the timing between their tail beats precisely. It's the actively swimming version of the question I worked on at Harvard: how does a follower use the wake of the fish in front?

## What I did

- Ran both robots through Arduino with MATLAB/Simulink and an NI DAQ keeping the control and the measurements in sync, including trials with the tails beating in phase and out of phase.
- Captured the wake between the two fish with PIV and processed the flow fields in MATLAB.
- Helped build and calibrate the new wire-free air-bearing platform the carriages ride on — aligning the rails, cleaning the bearings, and dialing in the accuracy a nearly frictionless platform needs.

<div class="gallery" markdown="0">
  <figure><a href="/images/projects/tunabot/tunabot.jpg"><img src="/images/projects/tunabot/tunabot.jpg" alt="TunaBot robotic fish in the water channel"></a><figcaption>TunaBot in the channel.</figcaption></figure>
  <figure><a href="/images/projects/tunabot/channel.jpg"><img src="/images/projects/tunabot/channel.jpg" alt="CAD of two carriages above the water channel"></a><figcaption>Two independent carriages above the channel.</figcaption></figure>
  <figure><a href="/images/projects/tunabot/carriage.jpg"><img src="/images/projects/tunabot/carriage.jpg" alt="CAD of a TunaBot carriage with motor and controller stack"></a><figcaption>Each carriage has its own motor, controller and computer.</figcaption></figure>
</div>

## How it turned out

Wake flow fields between leader and follower across the different timings, compared with the passive 3-D printed fish experiments — all feeding the same Navy-funded research program as the Harvard work.
