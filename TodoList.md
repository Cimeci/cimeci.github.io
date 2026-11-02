# TODO LIST

## HOSTING

[ ]: cv.html / cv.pdf still link to cimeci.github.io (fix when regenerating the CV)

## CONTENT (to check with Ilan)

[ ]: 42: confirm "Transcender (level 12)" and "Great Tutor" wording in background description
[ ]: Talks: confirm titles/descriptions, add photos (RAISE Week / amphi) and slides links
[ ]: Moncab: add screenshots/proof of the automations if available
[ ]: Open42: add repo link (GitLab) once the OpenCode fork is public
[ ]: Cellule Rouge: add the co-founder's testimonial (exact quote, with permission)
[ ]: Code hosting (maybe GitLab): set GITHUB constant in Projects.jsx / Hackathons.jsx + Contact socials to the new host

## LATER

[ ]: Regenerate cv.pdf from the site content (site is the source of truth: languages, 263 commits, projects, talks)
[ ]: "Ateliers" section once a first workshop has actually been sold

## PERF

[ ]: Lighthouse run + Firefox/Safari check
[ ]: Real screenshots of 42 projects running (replace generic code mockups)

## DONE

[X]: Deployed on Vercel (project "portfolio", account cimeci): https://portfolio-ecru-nine-a0g2u7xwsx.vercel.app — redeploy with `vercel --prod`
[X]: Canonical, og:url, og:image, twitter:image, JSON-LD and form `_next` point to the Vercel URL

[X]: public/ 27 MB -> 1.9 MB (WebP visuals, SetupKit video 3.6 MB -> 405 KB, unused assets removed)
[X]: framer-motion removed (JS 131.6 -> 93.1 kB gzip)
[X]: Stack icons no longer loaded from jsdelivr
[X]: Hackathons "My role" line

[X]: Pages: Home, About, Stacks, Hackathons, Projects, Contact
[X]: Email form send + status message
[X]: Navbar spacing
[X]: Missing manifest / apple-touch-icon
[X]: Cellule_rouge video converted to mp4
