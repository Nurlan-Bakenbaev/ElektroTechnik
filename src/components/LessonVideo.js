"use client";

import { useState } from "react";
import { Clock3, ExternalLink, Play, X } from "lucide-react";
import {
  lessonVideos,
  formatVideoDuration,
  videoUrl,
} from "../data/lesson-videos.js";

export default function LessonVideo({ lessonId }) {
  const [expanded, setExpanded] = useState(false);
  const [loadError, setLoadError] = useState(false);
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
            ZUM THEMA · DEUTSCH · WERBEFREI
          </span>
          <h2 id={headingId}>{video.title}</h2>
          <p>
            <span>{video.creator}</span>
            <span>
              <Clock3 size={14} />
              {formatVideoDuration(video.durationSeconds)} Min.
            </span>
            {video.edited && <span>Gekürzter Auszug</span>}
          </p>
        </div>
        <button
          type="button"
          className="button button-dark"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => {
            setExpanded(!expanded);
            setLoadError(false);
          }}
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
              <video
                src={videoUrl(video)}
                aria-label={`Lernvideo: ${video.title}`}
                controls
                playsInline
                preload="metadata"
                onError={() => setLoadError(true)}
                onPlay={(event) => {
                  document.querySelectorAll("video").forEach((other) => {
                    if (other !== event.currentTarget) other.pause();
                  });
                }}
              />
            </div>
            {loadError && (
              <p role="alert" className="lesson-video-error">
                Das Video konnte nicht geladen werden. Öffne die Videodatei über
                den Link unten oder lade die Seite erneut.
              </p>
            )}
          </>
        )}
      </div>
      <div className="lesson-video-footer">
        <p>
          <a href={video.sourcePage} target="_blank" rel="noopener noreferrer">
            {video.creator}
          </a>{" "}
          ·{" "}
          <a href={video.licenseUrl} target="_blank" rel="noopener noreferrer">
            {video.license}
          </a>
          {video.edited
            ? " · Für diesen Kurs gekürzt; Bild und Ton unverändert."
            : " · Ungekürztes Video; Bild und Ton unverändert."}
        </p>
        <a href={videoUrl(video)} target="_blank" rel="noopener noreferrer">
          Videodatei öffnen <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
