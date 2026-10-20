# Raj Ratna Kumar — Cyber Noir Portfolio

A cinematic, responsive portfolio with a dark charcoal / ember-red palette, a scroll-driven six-chapter story, portrait treatment, project index, skills, education and experience timeline, two resume cards, and contact links.

## Open locally
1. Extract the ZIP.
2. Keep `index.html`, `style.css`, `script.js`, and the `assets/` folder together.
3. Open `index.html` in a current version of Chrome or Edge. For best results, you can also serve the folder with a local static server.

## Resume files
- `assets/raj-ratna-software-web-resume.pdf` — exact original software/web resume supplied for this revision.
- `assets/raj-ratna-cybersecurity-resume.pdf` — exact original cybersecurity resume supplied for this revision.

The resume cards provide both **View Resume** and **Download PDF** actions. The links are relative to `index.html`, so keep the asset folder in place when publishing.

## Story narration
Speech uses the browser's built-in Web Speech API. The story attempts to narrate its current chapter when the story section enters view and narrates later chapters as the visitor scrolls. The chapter heading and story copy are spoken directly; the word “title” is not inserted. The Sound On/Off control can stop or resume narration, and the chapter's Listen button is available as a manual fallback.

Browsers and operating systems control speech voices and autoplay permissions. Some browsers may block sound until the visitor scrolls, taps, or presses a key. The website cannot override that browser policy, so the first chapter is retried after a user gesture when needed.

## Design notes
The site uses a cyber-noir visual system inspired by the supplied references: near-black surfaces, ember-red highlights, glass-like panels, fine grain, layered atmospheric gradients, subtle floating motion, improved contrast, extra framing around the portrait, and a larger contained handwritten signature in the header and final contact section. The timeline is ordered newest/current experience first, followed by earlier education. The portrait treatment and traveler illustration are stylized website artwork, not a rigged 3D model or facial animation.

## Education and experience order
1. Cyber Forensics Internship — IFSO/N-DISC, Delhi Police
2. B.Tech — CSE (Cyber Security), NIET — Pursuing
3. Industrial Training — Eastern Railway Diesel Shed, Jamalpur
4. Diploma — Mechanical Engineering, SLIET — Completed
5. ICSE — Class X, St. Joseph’s School — Completed


## Cinematic live wallpaper update
The latest version adds a persistent animated charcoal/black and crimson atmospheric background across the full site, enhanced contrast, and wider non-clipping signature containers at the top and footer. The wallpaper is generated with CSS gradients and animation, so it does not require an external image or network request. All assets and both resume PDFs are included.


### Cinematic wallpaper update
A fixed CSS-generated crimson eclipse, layered mountain silhouettes, ruins, and drifting ember effects remain behind all sections. Signature images are upscaled with transparent padding and use responsive sizing to prevent cropping.


### Exact supplied looping video background and autograph
The supplied `1000089840.mp4` is included as `assets/cinematic-background.mp4` and used as a fixed, muted, autoplaying, looping background video behind the portfolio details. `playsinline` is enabled for mobile browsers. A dark overlay keeps headings, cards, and links readable; the content remains above the video and interactive. The supplied signature artwork is included as `assets/raj-ratna-autograph.png` and used at both the top and bottom. The checkerboard preview background has been converted to transparency so only the autograph artwork is visible.


### Exact supplied looping video background and autograph
The supplied `1000089840.mp4` is included as `assets/cinematic-background.mp4` and used as a fixed, muted, autoplaying, looping background video behind the portfolio details. `playsinline` is enabled for mobile browsers. A dark overlay keeps headings, cards, and links readable; the content remains above the video and interactive. The supplied signature artwork is included as `assets/raj-ratna-autograph.png` and used at both the top and bottom. The checkerboard preview background has been converted to transparency so only the autograph artwork is visible.


### Exact supplied looping video background and autograph
The supplied `1000089840.mp4` is included as `assets/cinematic-background.mp4` and used as a fixed, muted, autoplaying, looping background video behind the portfolio details. `playsinline` is enabled for mobile browsers. A dark overlay keeps headings, cards, and links readable; the content remains above the video and interactive. The supplied signature artwork is included as `assets/raj-ratna-autograph.png` and used at both the top and bottom. The checkerboard preview background has been converted to transparency so only the autograph artwork is visible.


### Exact supplied looping video background and autograph
The supplied `1000089840.mp4` is included as `assets/cinematic-background.mp4` and used as a fixed, muted, autoplaying, looping background video behind the portfolio details. `playsinline` is enabled for mobile browsers. A dark overlay keeps headings, cards, and links readable; the content remains above the video and interactive. The supplied signature artwork is included as `assets/raj-ratna-autograph.png` and used at both the top and bottom. The checkerboard preview background has been converted to transparency so only the autograph artwork is visible.


### Exact supplied looping video background and autograph
The supplied `1000089840.mp4` is included as `assets/cinematic-background.mp4` and used as a fixed, muted, autoplaying, looping background video behind the portfolio details. `playsinline` is enabled for mobile browsers. A dark overlay keeps headings, cards, and links readable; the content remains above the video and interactive. The supplied signature artwork is included as `assets/raj-ratna-autograph.png` and used at both the top and bottom. The checkerboard preview background has been converted to transparency so only the autograph artwork is visible.


### User-supplied looping video background and autograph
The exact supplied video is packaged at `assets/cinematic-background.mp4` and plays as a fixed full-viewport background using muted autoplay, `loop`, and inline playback. The portfolio content remains above it and interactive. The video uses `object-fit: cover` and centred positioning on both desktop and mobile, so the viewport is filled and the central subject is prioritized on mobile. The provided autograph artwork is used at the top and bottom; its checkerboard preview was converted to transparency.


### Latest update
The decorative CSS-generated wallpaper layers have been removed. The exact user-provided MP4 is now the only background, fixed to the full viewport and looped behind the portfolio. Desktop uses a centred cover crop; mobile uses a centred, slightly zoomed cover crop. The supplied black-background autograph image was converted to transparency and is used at the top and bottom.
