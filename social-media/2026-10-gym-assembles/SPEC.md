# SPEC: The gym assembles

GOAL:    the viewer sees four separate jobs (doors, payments, members, payroll) become one building, then one screen, and remembers "Gym Thing runs the whole gym".
OUTPUT:  HyperFrames, 1080x1920, 30 fps. Safe band for words and UI: y 168 to 1330.
TIME:    22.5 s x 30 = 675 frames. Scenes: build 0 to 10.5, dash 10.5 to 19.5, end 19.5 to 22.5.

LOOK:    architectural white model. Ground #f4f4f2 (scene 1), #f8f9fb (dashboard, the product's own canvas).
         Ink #0a0a0a. No accent in marketing type; product colours (#16a34a members, #ea580c business, #9333ea team, #2563eb overview) only inside the dashboard.
         Display: Geist 600, 150 px module words, 84 px lines, tracking -3%. Body: Geist 500, 28 px minimum.
         Blocks: matte white card stock #fbfbfa, roughness 0.9, 1.5 px black hairline edges. Key light upper left, soft shadow, 0.35 contact shadow on the slab.
OBJECTS: a concrete slab (the plot, #e7e6e2); four white blocks that stack into a two-storey gym: Doors (front, with a door opening), Payments (left wing), Members (right wing), Payroll (upper floor). Each block shows its icon (door, card, users, briefcase) in black on its front face.
         The dashboard is the real Gym Thing admin UI rebuilt in HTML for ABC Gym, flat to camera, at 2x scale.
MOTION:  block drop: 0.45 s power3.in (gravity), lands with a 4% squash that recovers in 0.2 s. Camera: power2.inOut. Words: blur 8 to 0 px + scale 1.06 to 1 in 0.15 s on the landing frame; exit blur-out 0.15 s.
         UI pieces: expo.out 0.6 s from their edge, 0.35 s apart. Titles hold dead still once landed.
SHOTS:
  1. 0.0 to 2.0 build: slab already falling at frame 0, lands 0.45 s. Line "Running a gym is a lot" on screen from frame 0.
  2. 2.0 to 8.0 build: Doors lands 2.45, Payments 3.85, Members 5.25, Payroll 6.65. One word on each landing.
  3. 8.0 to 10.5 build: camera dives into the door opening; the opening (lit #f8f9fb) fills the frame. Handoff: the frame is #f8f9fb.
  4. 10.5 to 16.5 dash: dashboard shell lands, then Check-ins, Point of Sale, Customers, Payroll cards fly in from four edges and lock at 13.4 s. Line "All of it, in one place".
  5. 16.5 to 19.5 dash: one detail lights per 0.6 s: Allowed badge, sale total, new member, gross pay. Line "Gym Thing runs the whole gym".
  6. 19.5 to 22.5 end: THING mark wipes in left to right, then "Gym Thing", "Start with a free trial", "thing.bh". Holds 2 s.
BANNED:  dark void, glow, particles, purple gradients, glass cards, docked logo, everything fading up, tilted product UI, fake customer numbers (all figures are ABC Gym sample data).
QA:      frames 0.0, 2.5, 6.8, 9.8, 13.6, 18.0, 21.5.
