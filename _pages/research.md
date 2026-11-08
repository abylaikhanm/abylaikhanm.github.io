---
permalink: /research/
title: "Research"
excerpt: "Bio-inspired propulsion and unsteady fluid dynamics: robotic swimmers, a cyber-physical test rig and flow imaging at Lehigh's Unsteady Flow Interactions Lab and Harvard's Lauder Lab."
author_profile: true
---

My research asks how fish swim — and what that can teach us about **more efficient ship propulsion**, **harvesting energy from ocean waves**, and **how swimmers save energy in groups**. The common thread is hardware: I build the robotic swimmers and test rigs that make the experiments possible, then run them.

I've done this for three years at the [Unsteady Flow Interactions Laboratory](https://wordpress.lehigh.edu/kwm213) at Lehigh with [Dr. Keith Moored](https://engineering.lehigh.edu/faculty/keith-w-moored), and at the [Lauder Laboratory](https://sites.harvard.edu/glauder/) at Harvard with [Dr. George Lauder](https://www.oeb.harvard.edu/people/george-v-lauder), both under Office of Naval Research programs. Here is how it has built up, one step at a time.

<div class="threads" markdown="0">

  <div class="thread">
    <figure><a href="/images/projects/cpfd/rig-photo.jpg"><img src="/images/projects/cpfd/rig-photo.jpg" alt="The pitch-and-heave rig on the water channel"></a></figure>
    <div>
      <h3><a href="/projects/cyber-physical-robotic-flapper/">I built a pitch-and-heave robotic flapper</a></h3>
      <p>A two-axis rig that moves a foil through the Lehigh water channel like a fish tail — heaving up and down while pitching — and measures the forces on it. Designed in CAD, machined in-house, wired and programmed by me.</p>
    </div>
  </div>

  <div class="thread thread--feature" id="cyber-physical">
    <figure class="thread__video"><video src="/images/cpfd-testbed.mp4" poster="/images/projects/cpfd/rig-video-poster.jpg" autoplay loop muted playsinline preload="metadata"></video><figcaption>Push the foil and the software spring pushes back — there is no spring in the hardware.</figcaption></figure>
    <div>
      <h3><a href="/projects/cyber-physical-robotic-flapper/">Then I made it cyber-physical: a spring that lives in software</a></h3>
      <p>Instead of mounting a real spring on the foil, software plays the spring. A 4 kHz control loop reads the six-axis force sensor and the encoders, solves the mass–spring–damper equation in real time, and drives the motor so the foil moves exactly as if that spring were there. Any stiffness, damping or inertia can be set with a keystroke — no springs to buy, swap or machine, and the whole experiment runs itself. It won the Best Undergraduate Poster Award at ASME IMECE 2025.</p>
      <figure class="thread__diagram"><a href="/images/projects/cpfd/control-block-diagram.png"><img src="/images/projects/cpfd/control-block-diagram.png" alt="Block diagram of the cyber-physical spring control loop"></a><figcaption>The loop: measured forces in, virtual spring solved, motion out.</figcaption></figure>
    </div>
  </div>

  <div class="thread thread--strip" id="knoller-betz">
    <div>
      <h3><a href="/projects/harvard-inline-swimming/">At Harvard, we tested in-line swimming — two foils first, then 3-D printed fish</a></h3>
      <p>At Harvard we looked at how fish swim in groups — the dynamics of swimming in line — and how that could carry over to robotic swimmers. A robotic flapper plays the leading fish; behind it we put first a foil, then 3-D printed fish bodies, and I ran the experiments and imaged the flow with PIV. We found that at particular settings of the leading flapper, the body behind it gets a free ride: it holds its position and picks up thrust without moving on its own, and it doesn't get pushed back. The surprising part is how different this is from a cyclist drafting. A cyclist sits in slowed-down air; a fish's wake actually speeds the water up — yet the unsteady vortices in that wake (the Knoller–Betz effect) pull the follower forward.</p>
    </div>
    <div class="thread__strip">
      <figure><a href="/images/projects/harvard/abylaikhan-lauder-lab.jpg"><img src="/images/projects/harvard/abylaikhan-lauder-lab.jpg" alt="Abylaikhan with the PIV cameras and lasers at the Lauder Lab flume"></a><figcaption>Running the PIV system at the Lauder Lab.</figcaption></figure>
      <figure><video src="/images/piv-fish-foil.mp4" poster="/images/projects/harvard/piv-video-poster.jpg" autoplay loop muted playsinline preload="metadata"></video><figcaption>PIV of the foil's wake hitting the trailing fish — red and blue are the two spins of the vortices.</figcaption></figure>
      <figure><a href="/images/projects/harvard/air-bearing-rig.jpg"><img src="/images/projects/harvard/air-bearing-rig.jpg" alt="Air-bearing carriage with two foils"></a><figcaption>Two foils on the air-bearing carriage.</figcaption></figure>
    </div>
  </div>

  <div class="thread thread--strip">
    <div>
      <h3><a href="/projects/tunabot-inline-swimming/">Back at Lehigh, two robotic tuna swim in line</a></h3>
      <p>Two TunaBot robots on independent carriages that ride on air bearings — no friction, so each fish is free to move back and forth with the flow — while we set their spacing and the timing between their tail beats and PIV captures the wake between them. The same question with both fish actively swimming, run at the sweet-spot settings we found at Harvard.</p>
    </div>
    <div class="thread__strip">
      <figure><a href="/images/projects/tunabot/tunabot.jpg"><img src="/images/projects/tunabot/tunabot.jpg" alt="TunaBot robotic fish in the water channel"></a><figcaption>TunaBot in the channel.</figcaption></figure>
      <figure><a href="/images/projects/tunabot/channel.jpg"><img class="contain" src="/images/projects/tunabot/channel.jpg" alt="CAD of two carriages above the water channel"></a><figcaption>Two independent carriages above the channel.</figcaption></figure>
      <figure><a href="/images/projects/tunabot/carriage.jpg"><img class="contain" src="/images/projects/tunabot/carriage.jpg" alt="CAD of a TunaBot carriage"></a><figcaption>Each carriage carries its own motor and controller.</figcaption></figure>
    </div>
  </div>

  <div class="thread">
    <figure><a href="/projects/aerotargets-wind-tunnel/"><img src="/images/projects/aerotargets/drone-model.jpg" alt="Scaled UAV model in the wind tunnel"></a></figure>
    <div>
      <h3><a href="/projects/aerotargets-wind-tunnel/">In between, wind-tunnel work in the same lab</a></h3>
      <p>A three-phase test program on a target drone for Aerotargets International, and an aeroelastic wing study tested to failure — same instruments, air instead of water.</p>
    </div>
  </div>

  <div class="thread thread--next thread--text">
    <div>
      <h3>Where this is going</h3>
      <p>We're building an underwater vehicle in which a single motor heaves a leading foil that pitches passively on a spring, while two fixed foils behind it turn the oscillating flow into thrust — the <a href="#knoller-betz">Knoller–Betz effect</a> we studied at Harvard and Lehigh. Before choosing the physical springs, we test the pitch stiffnesses in software on the cyber-physical rig and pick the parameters that work.</p>
    </div>
  </div>

</div>

## Presentations & awards

<p class="doc-links" markdown="0"><a class="btn btn--ghost" href="/files/abylaikhan_academic_cv.pdf"><i class="fas fa-file-alt" aria-hidden="true"></i> Academic CV (PDF)</a> <a class="btn btn--ghost" href="https://scholar.google.com/citations?user=mAzPboEAAAAJ&amp;hl=en"><i class="ai ai-google-scholar" aria-hidden="true"></i> Google Scholar</a></p>

- **APS Division of Fluid Dynamics 2026**, Orlando, FL (Nov 2026) — *Passive Swimming Dynamics in a Thrust-Producing Vortex Wake* (with Y. Pan, G. Lauder and K. Moored) — talk. [Abstract](https://dfd-meeting.aps.org/dfd/2026/events/F20/6)
- **ONR MURI Annual Review**, Lehigh University (Sep 2026) — *Passive Swimming Dynamics in a Thrust-Producing Vortex Wake* — talk.
- **Rossin Research Scholars Symposium**, Lehigh University (Jan 2026) — *Uncovering the Fluid–Structure Interactions of Wave-Assisted Propulsion via Cyber-Physical Fluid Dynamics* — poster.
- **ASME IMECE 2025**, Memphis, TN (Nov 2025) — *Design and Validation of a Cyber-Physical Fluid Dynamics System for Bio-Inspired Propulsion Studies* (with A. Ardıç and K. Moored) — poster, **Best Undergraduate Research Poster Award**. [Abstract](https://imece.secure-platform.com/a/solicitations/261/sessiongallery/21467/application/173171) · [Poster](https://drive.google.com/file/d/1oiz9QU80btJDFvmcEylEwbp2sFV83pJR/view)
- **APS Division of Fluid Dynamics 2025**, Houston, TX (Nov 2025) — *Uncovering the Fluid–Structure Interactions of Wave-Assisted Propulsion via Cyber-Physical Fluid Dynamics* (with A. Ardıç and K. Moored) — poster. [Abstract](https://meetings-archive.aps.org/dfd/2025/s00/12/) · [Poster](https://drive.google.com/file/d/1qhZpXL08NVN3YMbrLDIY2Rgw1XlKr3Ls/view)
- **ONR MURI Annual Meeting**, Lehigh University (Oct 2025) — wave-assisted propulsion progress: experimental validation and control integration of the cyber-physical testbed.
- **Lehigh Summer Research Expo**, Mountaintop Campus (Aug 2024) — *Dual-Axis Pitch-and-Heave Setup for Bio-Inspired Propulsion Studies* — poster. [Expo story](https://news.lehigh.edu/lehigh-summer-research-expo-showcases-students-innovative-projects)
- A journal paper on the Harvard in-line swimming work (with Y. Pan, G. Lauder and K. Moored) is in preparation for *Bioinspiration & Biomimetics*.

<figure class="figure-wide">
  <a href="/images/projects/cpfd/imece-poster.jpg"><img src="/images/projects/cpfd/imece-poster.jpg" alt="ASME IMECE 2025 award-winning poster"></a>
  <figcaption>The ASME IMECE 2025 poster. Click to enlarge.</figcaption>
</figure>

## Earlier: nano/human interfaces

In my first year I worked with Lehigh's Nano/Human Interfaces Presidential Initiative, turning atomic-force-microscopy scans of [perovskite solar cells](https://nhi.lehigh.edu/projects/perovskite-solar-cell-surface) into 3-D models you can explore in augmented reality. [Project page &rarr;](/projects/perovskite-ar-visualization/)
