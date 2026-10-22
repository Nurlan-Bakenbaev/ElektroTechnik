# Short German videos for the thirteen lessons

Official YouTube embeds restored at the user’s request on 2026-10-21. Selection metadata was checked on 2026-10-20. Each lesson has a different YouTube video with a complete running time of at most 300 seconds; no longer video is disguised as a short excerpt. Selection uses German educational publishers and German original titles/descriptions. The interface labels are shortened for readability; original titles and observed metadata are archived in [video-metadata-2026-10-20.json](video-metadata-2026-10-20.json).

| Lesson | Video / publisher | Duration |
| --- | --- | --- |
| Elektrische Stromstärke | [Stromstärke einfach erklärt — Learning Level Up](https://www.youtube.com/watch?v=-OzDSNHCfB4) | 3:13 |
| Stromkreisarten | [Reihen- und Parallelschaltung — simplexy](https://www.youtube.com/watch?v=D0Cm8JG5Ibk) | 3:31 |
| Spannungen | [Die elektrische Spannung — SMA Solar Technology](https://www.youtube.com/watch?v=R9Zz6mbCNME) | 2:53 |
| Elektrischer Widerstand | [Der elektrische Widerstand — physikdigital](https://www.youtube.com/watch?v=CVXN0tLSnNY) | 2:34 |
| Ohmsches Gesetz | [Ohmsches Gesetz mit Übung — Smartelektrik0](https://www.youtube.com/watch?v=sPwwKxkaBJE) | 3:27 |
| Elektrische Energie und Arbeit | [Elektrische Arbeit und Energie — Physik-Lernvideos](https://www.youtube.com/watch?v=ISnVP1jq7qE) | 2:24 |
| Elektrische Leistung | [Elektrische Leistung und Arbeit — erklaerung-und-mehr](https://www.youtube.com/watch?v=Eq2tZdJ7NAM) | 3:03 |
| Wirkungsgrad | [Wirkungsgrad berechnen — Lehrerschmidt](https://www.youtube.com/watch?v=gOXEm2Gh5wc) | 2:40 |
| Elektrisches Feld | [Das elektrische Feld verstehen — Think Logic](https://www.youtube.com/watch?v=YRNarrlYCoQ) | 4:44 |
| Kondensator | [Kondensator: Aufbau und Nutzen — Duden Learnattack](https://www.youtube.com/watch?v=xyaqZgqhIBc) | 4:17 |
| Magnete und magnetische Feldlinien | [Das Magnetfeld — Lehrerschmidt](https://www.youtube.com/watch?v=5FRdulem8c4) | 2:45 |
| Elektromagnetismus | [Elektromagnetische Induktion — physikdigital](https://www.youtube.com/watch?v=CkYO5RMsZuo) | 3:46 |
| Magnetische Größen | [Magnetische Flussdichte und Feldstärke — Studytiger](https://www.youtube.com/watch?v=P42WB6HbynQ) | 3:52 |

## Verification and scope

Durations, original titles, channel names and embed availability were read from YouTube's public embed response. Requests to the official `youtube-nocookie.com/embed/VIDEO_ID?hl=de` endpoint include the site's origin as the Referer. The `PLAYER_VARS.embedded_player_response` JSON contains `embedPreview.thumbnailPreviewRenderer.videoDurationSeconds`, the original title and channel, `previewPlayabilityStatus.status`, and `videoFlags.playableInEmbed`. All selected entries returned `OK` and allowed embedding. This validates metadata and initial availability, not uninterrupted third-party playback in every region or a complete pedagogical review of each transcript. Availability can change later.

The electromagnetism video specifically illustrates induction. The magnetic-quantities video focuses on B and H; the lesson text additionally teaches magnetic flux Φ. Those boundaries are explicit in the learner's viewing prompt. Videos supplement the thirteen lessons; watching them is not tracked as proof of comprehension and does not award XP.

`LessonVideo` loads no player, thumbnail or external script before the learner chooses to view. It creates an iframe on the official privacy-enhanced embed host without autoplay. Closing it removes the iframe and stops that player; navigating to another lesson resets it. An explicit `strict-origin-when-cross-origin` referrer policy supplies the origin required by YouTube. A direct YouTube link remains available when embedding is unavailable.

Browser tests intercept external iframe requests to test our disclosure, URLs, keyboard controls, removal on close/navigation and responsive dimensions. They do not pretend to test YouTube's actual media playback. Public metadata was checked separately as described above.

## Current distribution and rights boundary

The current version contains no locally distributed MP4 lesson files. Videos are embedded through YouTube’s official privacy-enhanced player and link to the publisher’s watch page. The site does not download, proxy, rehost, strip advertising from or remove branding from YouTube videos. Ads and YouTube interface branding can appear. The previous GET it digital clips and their 2026-10-21 provenance manifest are historical release records, not the active selection. The publisher’s CC BY permission was documented for that release; restoring YouTube does not imply that the earlier license was absent.

The player retains 80% of its available desktop content width and full mobile width. The eight supplementary guides link to the video of their parent lesson; those videos are not presented as complete coverage of every supplementary topic. External embeds are mocked only in integration tests. That verifies our click-to-load behavior, URLs and responsive sizing, not actual YouTube playback or present regional availability.
