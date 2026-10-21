# German lesson videos without YouTube embeds

Selection and license checked on **2026-10-21**. The course now serves thirteen local MP4 clips from the openly licensed **GET it digital** university consortium. Each belongs to one of the thirteen existing course topics; no further modules are added. Every delivered clip is shorter than five minutes. Some source films are longer: shortened excerpts are explicitly labelled **Gekürzter Auszug** in the interface and in the [attribution table](../public/videos/ATTRIBUTION.md). They are never described as complete short films.

## Source and reuse permission

- [Publisher's video library](https://getitdigital.uni-wuppertal.de/index.php?site=videos)
- [Publisher's license declaration](https://getitdigital.uni-wuppertal.de/index.php?site=lizenz)
- [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/)
- [Per-file source, original title, source interval, actual duration, modifications, byte count and SHA-256](video-metadata-2026-10-21.json)

The publisher supplies downloadable MP4 files and permits distribution and adaptation under CC BY 4.0, with source/author credit and disclosed changes. Credits and a license link appear beside every player, including in the collection. Embedded project logos and author information are retained. The delivered files were remuxed with fast-start metadata; selected films were time-trimmed without altering their image/audio content. Stream-copy cuts may start at a nearby keyframe; the manifest distinguishes requested intervals from observed playback duration.

The earlier YouTube selection and its 2026-10-20 metadata are historical records only. No current lesson uses that player or those URLs. We do not remove advertisements or branding from YouTube content; the replacement uses independently licensed downloadable media.

## Topic boundaries and teaching use

The canonical lesson list defines all thirteen collections. The series/parallel clip stops before equivalent-source analysis. The capacitor clip focuses on construction, charge and capacitance. The Ohm clip demonstrates the law in a resistor circuit. Resistance and magnetic-field-strength clips contain university-level derivations and are labelled as deepening material in the viewing prompts. The electromagnetism clip covers induction; the magnetic-quantities clip focuses on H and a coil example, while the lesson additionally explains B and Φ. These supplementary clips do not replace the beginner explanations, worked examples or interactive laboratories.

## Player behavior and checks

A native HTML video element is created only when the learner chooses **Video ansehen**. The files are served from this site's origin, including the GitHub Pages subpath. There are no YouTube embeds, YouTube branding, ad scripts or third-party media requests. Closing the player or changing a route removes it; starting another library video pauses the previous one. A direct file link remains available. The player has 80% of its available desktop width, retaining 16:9 proportions, and uses the full available width on mobile.

All thirteen files were inspected with ffprobe for H.264 video, AAC audio and actual duration under 300 seconds. Content samples were inspected to select relevant intervals. Content tests verify the delivered files against the SHA-256 provenance manifest. Browser checks load all thirteen real files without mocking their media, validate duration and decoded video dimensions, exercise actual advancing playback, keyboard activation, closing/navigation, desktop sizing and mobile layout. They also reject any observed requests to YouTube/player/ad hosts. Availability on the deployed site is checked separately after publication.

The clips have German speech but no separate caption tracks. The lesson text remains available; full caption accessibility is not claimed. Watching a clip does not award XP or count as passing a topic.
