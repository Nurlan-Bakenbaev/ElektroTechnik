"use client";

import { useState } from "react";
import { Clock3, ExternalLink, Play, X } from "lucide-react";
import { lessonVideos, formatVideoDuration } from "../data/lesson-videos.js";

export default function LessonVideo({ lessonId }) {
  const [expanded, setExpanded] = useState(false);
  const video = lessonVideos[lessonId];
  if (!video) return null;
  const panelId = `lesson-video-${lessonId}`;
  const headingId = `${panelId}-heading`;
  return (
    <section className="lesson-video" aria-labelledby={headingId}>
      <div className="lesson-video-summary">
        <div className="lesson-video-icon" aria-hidden="true">
          <Play size={23} />
        </div>
        <div className="lesson-video-description">
          <span className="essentials-label">
            ZUM THEMA · VIDEO AUF DEUTSCH
          </span>
          <h2 id={headingId}>{video.title}</h2>
          <p>
            <span>{video.channel}</span>
            <span>
              <Clock3 size={14} />
              {formatVideoDuration(video.durationSeconds)} Min.
            </span>
          </p>
        </div>
        <button
          type="button"
          className="button button-dark"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <X size={16} />
              Video schließen
            </>
          ) : (
            <>
              <Play size={16} />
              Video ansehen
            </>
          )}
        </button>
      </div>
      <div id={panelId} hidden={!expanded} className="lesson-video-panel">
        {expanded && (
          <>
            <p className="lesson-video-focus">
              <strong>Achte beim Anschauen darauf:</strong> {video.focus}
            </p>
            <div className="lesson-video-player">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}?hl=de&cc_lang_pref=de&rel=0`}
                title={`Lernvideo: ${video.title}`}
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </>
        )}
      </div>
      <div className="lesson-video-footer">
        <p>
          {expanded
            ? "Wenn der Player nicht lädt, kannst du das Video direkt auf YouTube öffnen."
            : "Der YouTube-Player wird erst geladen, wenn du auf „Video ansehen“ klickst."}
        </p>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Auf YouTube öffnen <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
