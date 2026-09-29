# Project worklog

Running record of work on Prachi Garella’s personal website. Append an entry after each work session, recording changes, validation, decisions, and any remaining work. Keep earlier entries intact and distinguish completed work from proposed next steps.

## Project context

- Repository: `prachigarella.github.io`
- Custom domain configured in `CNAME`: `prachigarella.com`
- Implementation: static HTML, CSS/Sass, and JavaScript using HTML5 UP’s Landed template and jQuery.
- Main pages: `index.html`, `Research.html`, `Podcast.html`, `Social-Media.html`, `Outreach.html`, and `Book Blog.html`.
- Supporting files: `elements.html` (template examples), `assets/css/`, `assets/sass/`, `assets/js/`, `assets/webfonts/`, research and CV PDFs in `assets/`, and photos in `images/`.
- Existing `README.txt` documents the original template and its credits.

## 2026-09-29 — Initial review and worklog setup

### Completed

- Accessed the project folder and inventoried the website files.
- Read the template README, domain configuration, and homepage; reviewed page headings and selected content across the other main pages.
- Inspected the beginning of the main JavaScript and Sass files to understand the template structure, responsive navigation, and animation setup.
- Created this worklog at the user’s request.

### Validation and observations

- Checked Git status before creating this file.
- Existing working-tree changes were present: deletion of `assets/Prachi_Garella_CV-2.pdf` and an untracked `assets/.DS_Store`. These were left untouched.
- No website source files were modified during the initial review or worklog setup.
- No browser preview, functional tests, or comprehensive link checks were performed; the review was limited to source inspection.

### Remaining work

- No website implementation changes are currently requested.
- Continue appending entries here as project work proceeds.

## 2026-09-29 — Update The Knowmads Podcast

### Completed

- Updated `Podcast.html` with all 11 full episodes published after the Andreas Karch episode, newest first: Scott Aaronson, Shenglong Xu, Andrew Long, Ashmeet Singh, Piotr Sułkowski, Niko Šarčević, Marine De Clerck, Daniel Whiteson, Eve M. Vavagiakis, Ramakrishna V. Hosur, and Pavan Hosur.
- Added a short summary, publication date, and direct YouTube, Apple Podcasts, and Spotify links for every new entry (33 new platform links).
- Used the official feed’s season and episode numbers throughout: the page now contains season 2, episodes 14 through 1. Retained the three existing episode descriptions and their platform links.
- Updated the page title, corrected Kaden Hazzard’s name in his heading, repaired malformed episode headings, and removed stray list/footer closing tags.

### Validation and observations

- Verified the current episode list, titles, numbering, descriptions, and publication timestamps against the [official Buzzsprout RSS feed](https://rss.buzzsprout.com/2192541.rss). Display dates use UTC, consistent with the Apple listing dates checked; local release dates can differ by one day.
- Matched Apple links by title using the [Apple episode lookup](https://itunes.apple.com/lookup?id=1688828370&entity=podcastEpisode&limit=200), Spotify links against the [show listing](https://open.spotify.com/show/0Yhg8PHkNsuMvAs8auY3BB), and video links against the [official YouTube channel](https://www.youtube.com/channel/UCHXJ97wNz1clBglDqPmFBYA/videos).
- The live feed includes Scott Aaronson’s latest episode, which older search listings had not yet included. YouTube-only clips were excluded from the full-episode list.
- Passed source checks for balanced HTML tags, unique IDs, valid heading references, existing local assets/navigation destinations, descending episode order, and all 33 added links matching their source records.
- Preserved the HTML file’s existing CRLF line endings; checked the diff with Git configured to recognize CRLF (`git -c core.whitespace=cr-at-eol diff --check`).
- No browser preview or media-playback test was performed. Existing unrelated working-tree changes were left untouched.

### Remaining work

- Local changes are ready for review; they have not been committed, pushed, or published.

## 2026-09-29 — Embed YouTube players and add platform logos

### Completed

- Added a YouTube iframe player to all 14 episodes in `Podcast.html`, with accessible titles, lazy loading, fullscreen support, and a referrer policy compatible with YouTube embeds.
- Added `assets/css/podcast.css` for responsive players and icon spacing. Players use a 16:9 aspect ratio with a minimum height of 200px.
- Added the existing Font Awesome Apple, Spotify, and YouTube brand icons to the platform buttons. Preserved all link URLs and kept the YouTube buttons for opening videos directly.
- Started a localhost-only preview at `http://127.0.0.1:8000/Podcast.html` for this session. To restart it, run `python3 -m http.server 8000 --bind 127.0.0.1` from the repository folder.

### Validation and observations

- Passed checks for balanced HTML, unchanged link URLs, correct video IDs for all 14 embeds, accessible player titles, and 14 icons for each platform.
- Passed `git -c core.whitespace=cr-at-eol diff --check` and confirmed the preview returns HTTP 200.
- Followed [YouTube’s embed documentation](https://developers.google.com/youtube/player_parameters). Preview through the HTTP server because opening the file directly can omit the referrer required for embedded playback; see [YouTube’s explanation](https://support.google.com/youtube/answer/171780).
- Browser rendering and video playback were not tested in this environment.

### Remaining work

- Changes are local and have not been published.

## 2026-09-29 — Diagnose YouTube error 153 in local preview

### Completed

- Investigated the reported missing players and subsequent error 153.
- The user confirmed they were opening `Podcast.html` as a `file:///` URL from Finder. This preview method omits the HTTP referrer required by YouTube; the earlier Finder instructions became unsuitable after adding embedded players.
- Opened the existing HTTP preview at `http://127.0.0.1:8000/Podcast.html` in the default browser. Use this address to preview embedded videos.

### Validation and observations

- Confirmed the preview server responds with HTTP 200.
- Captured and inspected an isolated Chrome screenshot of the HTTP preview: the Scott Aaronson player displays its thumbnail, title, and play control at the intended desktop size, with platform buttons below it.
- Confirmed the referrer requirement against [YouTube’s embedded player documentation](https://developers.google.com/youtube/terms/required-minimum-functionality#embedded-player-api-client-identity). The existing iframe policy already uses YouTube’s recommended `strict-origin-when-cross-origin` setting.
- No embed code changes were needed for the confirmed local-file issue. Actual video playback has not been confirmed.

### Remaining work

- User can check playback in the HTTP preview. Changes remain local and unpublished.

## 2026-09-29 — Confirm successful local playback

### Completed

- User confirmed the embedded videos work when using the HTTP preview at `http://127.0.0.1:8000/Podcast.html`.
- The reported error 153 is resolved by previewing through the local server instead of opening the HTML file directly from Finder.

### Validation and observations

- Playback confirmed by the user.

### Remaining work

- No outstanding embed issue. Changes remain local and unpublished.

## 2026-09-29 — Publish approved podcast updates

### Completed

- User authorized publishing after confirming local video playback.
- Fetched `origin` and confirmed local `main` matches `origin/main` before committing.
- Prepared `Podcast.html`, `assets/css/podcast.css`, and this worklog for publication through the existing GitHub repository. The unrelated CV deletion and `.DS_Store` file are excluded.

### Validation and observations

- Source checks and diff checks passed; the user confirmed playback in the local HTTP preview.
- The existing public page at `https://prachigarella.com/Podcast.html` responds with HTTP 200.

### Remaining work

- Push the publication commit and verify the updated public HTML and stylesheet.

## 2026-09-29 — Publication verified

### Completed

- Published commit `7f6ee1e` to `origin/main`.
- GitHub Pages [deployment run 36593284919](https://github.com/PrachiGarella/prachigarella.github.io/actions/runs/36593284919) completed successfully.
- The updated podcast page is live at [prachigarella.com/Podcast.html](https://prachigarella.com/Podcast.html).

### Validation and observations

- Public HTML and `assets/css/podcast.css` return HTTP 200 and match the approved local files (HTML compared with normalized line endings).
- Verified the latest Scott Aaronson episode and all 14 embedded YouTube players are present in the deployed page.
- Existing unrelated CV deletion and `.DS_Store` file remain uncommitted and were not published.

### Remaining work

- None for this publication.

## 2026-09-29 — Update the website CV

### Completed

- Located the user’s new CV at `assets/resume.pdf` and confirmed it is a PDF document.
- Updated the existing CV button in `Research.html` to open `assets/resume.pdf`.
- Prepared the new PDF, Research page link change, and worklog for publication. Existing unrelated file changes are excluded.

### Validation and observations

- Searched the website pages for CV/resume links; the Research page contains the only CV link.
- Confirmed the new link resolves to the local PDF and the diff passes whitespace checks with existing CRLF line endings recognized.
- Fetched the remote repository and confirmed `main` was up to date before publication.

### Remaining work

- Publish and verify the Research page link and PDF on the live website.

## 2026-09-29 — New CV publication verified

### Completed

- Published the CV update in commit `a6ff7ff` on `main`.
- Verified the live [Research page](https://prachigarella.com/Research.html) links to [the new resume](https://prachigarella.com/assets/resume.pdf).

### Validation and observations

- The live Research page and new PDF both return HTTP 200.
- The published PDF matches the supplied `assets/resume.pdf` byte for byte.

### Remaining work

- None for this CV update.

## 2026-09-29 — Replace the homepage portrait

### Completed

- Located the newly added `images/IMG_4007.heic` and created a browser-compatible JPEG at `images/prachi-home.jpg` (1600 × 1200 pixels).
- Updated the photo beside Prachi’s name in the homepage banner to use the new image, with descriptive alternative text and valid image dimensions.
- Updated the banner image rules in both `assets/css/main.css` and `assets/sass/main.scss` so the photo fills the existing circle without stretching.
- Kept the original HEIC file intact locally; only the JPEG is needed for the website.

### Validation and observations

- Inspected the converted photo and the circular portrait in a mobile-sized Chrome preview.
- Passed diff whitespace checks. Local `main` matched `origin/main` before preparing this update.
- Unrelated local CV deletion and `.DS_Store` changes are excluded from publication.

### Remaining work

- Publish and verify the updated homepage and image on the live site.

## 2026-09-29 — Homepage portrait publication verified

### Completed

- Published the new homepage portrait in commit `ed0d9ac` on `main`.
- Verified [prachigarella.com](https://prachigarella.com/) now uses `images/prachi-home.jpg` beside Prachi’s name.

### Validation and observations

- Inspected the desktop Chrome preview after the loading animation: the photo fills the circular frame with Prachi’s face visible and without stretching.
- The live homepage, JPEG, and stylesheet return HTTP 200. The published JPEG and stylesheet match the local files byte for byte.
- The original HEIC remains local and unchanged; unrelated file changes were not published.

### Remaining work

- None for this homepage photo update.

## 2026-09-29 — Confirm portrait display after cache refresh

### Completed

- Investigated the report that the published portrait appeared stretched despite displaying correctly locally.
- User confirmed the photo now looks correct before any additional deployment. Removed the temporary, unpublished stylesheet URL change; no website code change was needed.

### Validation and observations

- The live stylesheet matches the local version and includes the correct image height and `object-fit: cover` rules.
- The stylesheet response permits caching for 600 seconds. An older stylesheet lacked these sizing rules, making stale browser styles a likely explanation for the temporary distortion.

### Remaining work

- None; portrait display confirmed by the user.

## 2026-09-29 — Update research publications

### Completed

- Replaced the single preprint link in `Research.html` with three entries under “Publications and Preprints,” including concise summaries, author information, publication status, and arXiv/PDF links.
- Added [Thermodynamically Consistent Merging of Multidimensional QCD Equations of State](https://arxiv.org/abs/2608.20526), an SQM 2026 conference proceedings preprint.
- Added [Studying the QCD Matter produced in Heavy-Ion Collisions using the MUSES Calculation Engine](https://arxiv.org/abs/2606.26326), a MUSES Collaboration preprint.
- Updated [Merging multidimensional equations of state of strongly interacting matter via a statistical mixture](https://arxiv.org/abs/2601.07987) with its published citation, Physical Review D 113, 114018 (2026), and [journal DOI](https://doi.org/10.1103/pvtc-zdyw).
- Repaired existing malformed section/list/footer markup and duplicate IDs so the publications remain in the main content column. Corrected the “Accessible Work” heading and retained its PDFs and the latest CV link.

### Validation and observations

- Verified all three papers and Prachi’s authorship against arXiv and [INSPIRE’s author search](https://inspirehep.net/literature?q=a%20Garella%2C%20Prachi), which returned three records.
- Verified the published journal citation and DOI through arXiv, INSPIRE, and the APS search result. The other entries are labeled as preprints without implying journal publication.
- Passed checks for balanced HTML, unique IDs, the three publication entries, arXiv/PDF/DOI links, preserved CV and accessible-work links, and diff whitespace.
- Inspected the publications layout in Chrome with local fallback fonts; all three entries and their links render in the main content column.
- Existing unrelated local file changes are excluded from publication.

### Remaining work

- Publish and verify the updated Research page on the live site.

## 2026-09-29 — Research publications deployment verified

### Completed

- Published commit `8f10539` to `main`; GitHub Pages reports a successful deployment.
- Confirmed the live [Research page](https://prachigarella.com/Research.html) includes all three papers, their arXiv and PDF links, and the Physical Review D journal link.

### Validation and observations

- The public page returns HTTP 200 and matches the updated local HTML with normalized line endings.
- The CV and accessible-work links remain present.

### Remaining work

- None for this research publication update.

## 2026-09-29 — Hide Accessible Work

### Completed

- Commented out the Accessible Work heading, its four PDF links, and the preceding divider in `Research.html` at the user’s request.
- Preserved the section in the HTML source for easy restoration and retained the PDF files.

### Validation and observations

- Parsed the HTML to confirm the section is absent from visible text and active links, the document remains balanced, and all three publications and the CV link remain available.
- Passed diff whitespace checks; unrelated local changes are excluded from publication.

### Remaining work

- Publish and verify the section is hidden on the live Research page.

### Publication result

- Published in commit `f21ccf4`. The live Research page returns HTTP 200 and matches the version with Accessible Work commented out. No remaining work for this change.

## 2026-09-29 — Expand MUSES paper author list

### Completed

- Updated the MUSES paper entry in `Research.html` to list Johannes Jahan, Kevin P. Pala, Yumu Yang, Isabella Danhoni, and Prachi Garella, followed by “et al. (MUSES Collaboration).”
- Emphasized Prachi’s name consistently with the other paper entries.

### Validation and observations

- Matched the first five authors and their order to the previously verified [arXiv paper](https://arxiv.org/abs/2606.26326) and INSPIRE metadata.
- Passed diff whitespace checks. Publication links and other entries are unchanged.

### Remaining work

- Publish and confirm the expanded author list is live.

### Publication result

- Published in commit `e3f672c`. The live Research page returns HTTP 200 and matches the expanded author list. No remaining work for this change.

## 2026-09-29 — Feature public talks on the homepage

### Completed

- Renamed the homepage Outreach section to “Outreach & Public Talks.”
- Added talk topics and examples from the existing Outreach page, including talks at Amity University and Christ University.
- Retained a concise summary of APS and WiPS roles and updated the button to “Talks & Outreach.”

### Validation and observations

- Checked the section in Chrome at desktop (1440 × 900) and mobile (390 × 844) sizes; content fits without overflow and the button points to `Outreach.html`.
- Browser checks used fallback fonts with Google Fonts blocked for reliability.
- Passed diff whitespace checks. Unrelated local files are excluded from the commit.

### Remaining work

- None. Published in commit `62c9c46`; the live homepage returns HTTP 200 and matches the updated local HTML.

## 2026-09-29 — Focus homepage public talks on After5

### Completed

- Replaced the university talk examples in the homepage Outreach section with the user’s public talks at After5.
- Opened with the user’s belief that scientists have a responsibility to communicate with the general public alongside conducting cutting-edge research.

### Validation and observations

- Reviewed the text change and passed whitespace checks; the revised paragraph is shorter than the previously checked layout.

### Remaining work

- None. Published in commit `3bb4108`; the live homepage returns HTTP 200 and matches the corrected After5 text.

## 2026-09-29 — Remove the second homepage outreach paragraph

### Completed

- Removed the paragraph about APS and WiPS roles from the homepage Outreach section at the user’s request.
- Retained the After5 introduction, page link, and photo caption.

### Validation and observations

- Reviewed the diff and passed whitespace checks.

### Remaining work

- None. Published in commit `a4731ba`; the live homepage returns HTTP 200 and matches the version with the second paragraph removed.

## 2026-09-29 — Simplify and rearrange the Research page

### Completed

- Removed the Background section from `Research.html` and moved the CV link into the current research introduction.
- Replaced the long sidebar layout with a balanced introduction and portrait, a compact research interests section, individual publication entries, and an academic genealogy section below.
- Added page-specific responsive styling in `assets/css/research.css`, descriptive image alternatives, and separate photo captions.
- Retained all three papers, their author lists and links, MUSES, academic tree, research group, and the hidden Accessible Work content.

### Validation and observations

- Checked balanced HTML, preserved publication URLs and CV link, and confirmed Background and Accessible Work are absent from visible content.
- Chrome checks passed at 1440, 390, and 320 pixels wide: no horizontal overflow, all images loaded and retained their original proportions, and all three papers remained present.
- Reviewed desktop and mobile screenshots. Browser checks used fallback fonts with Google Fonts blocked for reliability.
- Passed whitespace checks; unrelated local changes are excluded from publication.

### Remaining work

- None. Published in commit `74e0964`; the live Research page and stylesheet both return HTTP 200 and match the verified local files.

## 2026-09-29 — Feature Instagram science posts and embed X/Twitter

### Completed

- Added the official X/Twitter timeline for `@garellaprachi` to `Social-Media.html`, with a permanent direct profile link.
- Featured five recent distinct physics/science Instagram posts with locally stored previews, publication dates, and direct post/reel links: September 21 physics reel, September 16 AI/scientists carousel, August 30 early-universe carousel, August 24 theoretical-physics reel, and August 22 After5 talk.
- Retrieved captions, publication timestamps, permalinks, and previews through the connected Windsor.ai Instagram account. Queried August 20–September 29; two September 21 reels showed the same clip, so only the newer one is featured.
- Added `assets/css/social-media.css` for a responsive post grid and horizontal social links with platform logos.
- Instagram selections are a static snapshot; they do not automatically change when new posts are published.

### Validation and observations

- Checked official [X embed instructions](https://help.x.com/en/using-x/embed-x-feed).
- Confirmed the X widget script creates the timeline iframe. X returned “Rate limit exceeded” during browser testing, so live feed contents could not be verified; direct links remain available.
- Chrome checks passed at 1440, 390, and 320 pixels wide: all five previews loaded, all post links were present, and there was no horizontal overflow. Reviewed the desktop screenshot.
- Confirmed balanced HTML and passed whitespace checks. Browser checks used fallback fonts with Google Fonts blocked for reliability.

### Remaining work

- Published in commit `4810098`; the live page, stylesheet, and all five preview images match the verified local files. X’s external rate limit may continue to prevent timeline loading for some visitors.

## 2026-09-29 — Update Instagram section wording

- Changed “Five recent posts and reels from” to “Latest posts from” on the Social Media page.
- Checked that only the requested visible wording changed; post previews and links are retained.
- Published in commit `a1f2894`; live verification is included with the six-post and Twitter fix below.

## 2026-09-29 — Add a sixth Instagram post and repair Twitter embeds

### Completed

- Retained “Latest posts from @prachigarella” and expanded the Instagram grid to six distinct physics/science posts.
- Added the June 3 quantum-vacuum carousel, verified from the connected Instagram account after reviewing posts through July and June.
- Rechecked the live X timeline and confirmed HTTP 429 (“Rate limit exceeded”) from X’s timeline endpoint.
- Replaced the failing timeline with two official individual-post embeds: the PRD paper announcement and science-communication post. Retrieved their markup and verified authorship through X’s official oEmbed endpoint.
- Kept readable tweet text and direct links as fallbacks, plus a link to the full profile.

### Validation and observations

- Both individual tweet embeds successfully displayed author, text, timestamp, and interaction links in Chrome.
- Confirmed both loaded embeds fit at 320 pixels wide. Six Instagram previews and links passed desktop/mobile checks at 1440, 390, and 320 pixels.
- Confirmed balanced HTML and passed whitespace checks. Google Fonts was blocked during browser checks for reliability.

### Remaining work

- None. Published in commit `2f46fa3`. Live page, stylesheet, and sixth preview match local files; live Chrome verification confirmed six Instagram cards, the requested wording, and both tweets successfully rendered.

## 2026-09-29 — Balance Instagram science and travel posts

### Completed

- Updated the six-post Instagram selection to four physics/science posts and two travel/personal posts.
- Retained the latest distinct physics reel, AI/scientists discussion, early-universe carousel, and theoretical-physics reel.
- Added the September 25 coffee-date post and September 11 Colorado travel post using captions, dates, links, and previews from the connected Instagram account.
- Renamed the section to “Science, Travel & Life on Instagram,” retained “Latest posts from @prachigarella,” and ordered all six cards newest first.

### Validation and observations

- Retained the previously verified Twitter embeds and existing responsive layout.
- Checked all six previews and links in Chrome at 1440, 390, and 320 pixels wide; no horizontal overflow. Passed whitespace checks.

### Remaining work

- Check the updated cards and publish the revised selection.

## Entry template

Copy this template for subsequent sessions and place new entries above this section. Dates use the project’s local timezone, America/Chicago.

```markdown
## YYYY-MM-DD — Session title

### Completed
- Changes made and relevant file paths.

### Validation and observations
- Checks performed and their results; note any checks not performed when relevant.
- Decisions, constraints, or existing changes that affect the work.

### Remaining work
- Outstanding tasks or blockers, or “None.”
```
