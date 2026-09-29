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
