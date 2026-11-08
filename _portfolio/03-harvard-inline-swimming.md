---
title: "Swimming in a Wake — Harvard Lauder Lab"
excerpt: "A summer at Harvard's Lauder Lab studying how a fish swimming behind another one gets pushed along by its wake."
blurb: "A summer at Harvard's Lauder Lab studying how a fish swimming behind another one gets a free ride from its wake — robotic flappers, 3-D printed fish and laser flow imaging."
tagline: "Why does a fish behind another fish swim for free?"
header:
  teaser: projects/harvard/abylaikhan-lauder-lab.jpg
  image: projects/harvard/abylaikhan-lauder-lab.jpg
card_video: /images/piv-fish-foil.mp4
hero_alt: "Abylaikhan next to the flume and laser setup in the Lauder Lab"
role: "Research Intern, Office of Naval Research MURI program"
timeline: "May – Aug 2026"
team: "Lauder Laboratory, Harvard University · Prof. George Lauder"
tools: "Air-bearing robotic flapper · LabVIEW · NI DAQ · PIV flow imaging (MATLAB, PIVlab) · motion tracking in MATLAB and R"
tags: [Test & Validation, Fluids, Robotics & Controls]
order: 3
featured: true
category_label: "Experimental fluids · robotics"
permalink: /projects/harvard-inline-swimming/
---

Fish in schools save energy by riding the wakes of the fish ahead of them. If we understand exactly how, ships and underwater drones travelling in groups could do the same. At Harvard I worked on the simplest version of the question: a robotic flapper makes a wake, a passive fish-shaped body sits behind it — when does the follower get pushed forward without swimming at all?

## What I did

- Ran the lab's air-bearing robotic swimmer — it floats on a cushion of air, so even tiny forces show up as motion — and planned a test matrix over flapping frequency, amplitude and flow speed instead of changing one setting at a time.
- Mapped the flow with particle image velocimetry (PIV): a laser sheet lights up particles in the water and a camera tracks them, which shows the vortices the leader leaves behind and how they hit the follower.
- Built the tracking pipelines in MATLAB and R that turn the video into numbers, and wrote the technical report at the end of the summer.

<div class="media-row" markdown="0">
  <figure class="figure-wide"><video src="/images/piv-fish-foil.mp4" poster="/images/projects/harvard/piv-video-poster.jpg" autoplay loop muted playsinline preload="metadata"></video><figcaption>PIV of the leading foil and the trailing fish — red and blue mark the two spins of the vortices.</figcaption></figure>
  <figure class="figure-wide"><video src="/images/tracking-points.mp4" autoplay loop muted playsinline preload="metadata"></video><figcaption>Tracked points on the raw footage: the foil in blue, the fish in orange.</figcaption></figure>
</div>

## How it turned out

Two things came out of the summer. First, a sweet spot: the combinations of flapping frequency, amplitude and spacing where a trailing body gets a real push from the wake — settings the robotic-fish experiments can now use directly. Second, the follower barely has to work for it: a passive fish settles into a stable position in the wake on its own, moving with the flow rather than fighting it, and still collects the benefit. I presented the results at the ONR program review in September 2026 and am presenting them at the APS Division of Fluid Dynamics meeting in November; a journal paper with the Harvard and Lehigh groups is in the works.

<div class="gallery" markdown="0">
  <figure><a href="/images/projects/harvard/piv-lab.jpg"><img src="/images/projects/harvard/piv-lab.jpg" alt="Running PIV in the Lauder Lab with the green laser sheet"></a><figcaption>Running PIV — the green sheet is the laser.</figcaption></figure>
  <figure><a href="/images/projects/harvard/air-bearing-rig.jpg"><img src="/images/projects/harvard/air-bearing-rig.jpg" alt="Air-bearing carriage with two NACA 0012 foils"></a><figcaption>The air-bearing carriage and foils.</figcaption></figure>
  <figure><a href="/images/projects/harvard/piv-vorticity.jpg"><img src="/images/projects/harvard/piv-vorticity.jpg" alt="PIV vorticity field behind the foil"></a><figcaption>The vortex wake behind the foil.</figcaption></figure>
  <figure><a href="/images/projects/harvard/piv-jet.jpg"><img src="/images/projects/harvard/piv-jet.jpg" alt="Time-averaged jet behind the flapping foil"></a><figcaption>Averaged over time, the wake is a jet — that's the thrust.</figcaption></figure>
  <figure class="contain"><a href="/images/projects/harvard/flume-overhead.jpg"><img src="/images/projects/harvard/flume-overhead.jpg" alt="The Harvard flume with its camera rig and laser optics"></a><figcaption>The flume, cameras and laser optics.</figcaption></figure>
</div>
