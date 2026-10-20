"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { scrollToReadingTarget } from "./LearningExperience";
import { Reveal, AnimatedProgress } from "./LearningMotion";
import FormulaImage from "./FormulaImage";
import Image from "next/image";
import {
  Activity,
  ArrowDown,
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Award,
  BookOpen,
  Bookmark,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Download,
  Flame,
  GraduationCap,
  LayoutGrid,
  LibraryBig,
  Lightbulb,
  List,
  LockKeyhole,
  Magnet,
  Menu,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Trophy,
  Upload,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import { lessons, categories, getLesson, allTerms } from "../data/course.js";
import { examQuestions, formulaSheet, sources } from "../data/exam.js";
import { quickConcepts } from "../data/quick-concepts.js";
import { illustrations } from "../data/illustrations.js";
import {
  STORAGE_KEY,
  createProfile,
  normalizeProfile,
  getProgress,
  recordLesson,
  recordExam,
  toggleBookmark,
  setProfileName,
} from "../lib/progress.js";
import {
  loadProfileFromStorage,
  saveProfileToStorage,
  removeAttemptKeys,
} from "../lib/storage.js";
import Quiz from "./Quiz";
import InteractiveLab from "./InteractiveLab";

const icons = {
  basics: Zap,
  energy: Activity,
  fields: Atom,
  magnetism: Magnet,
};
const navItems = [
  { id: "home", label: "Lernübersicht", icon: LayoutGrid },
  { id: "curriculum", label: "Lernpfad", icon: BookOpen },
  { id: "essentials", label: "Einfach erklärt", icon: Lightbulb },
  { id: "glossary", label: "Lexikon", icon: LibraryBig },
  { id: "formulas", label: "Formelsammlung", icon: Atom },
  { id: "bookmarks", label: "Merkliste", icon: Bookmark },
];
function readRoute() {
  const [view, id] = window.location.hash.replace(/^#\/?/, "").split("/");
  return {
    view: [
      "home",
      "curriculum",
      "essentials",
      "lesson",
      "glossary",
      "formulas",
      "exam",
      "bookmarks",
      "profile",
      "sources",
    ].includes(view)
      ? view
      : "home",
    id: id || "",
  };
}
function go(view, id = "") {
  window.location.hash = `/${view}${id ? `/${id}` : ""}`;
}
function displayName(name) {
  return name === "Entdecker" ? "Entdecker" : name;
}

export default function LearningApp() {
  const [profile, setProfile] = useState(null);
  const [route, setRoute] = useState({ view: "home", id: "" });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [storageError, setStorageError] = useState("");
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    let initial;
    try {
      // use storage wrapper for better testability
      const stored = loadProfileFromStorage(STORAGE_KEY);
      initial = stored ? normalizeProfile(stored) : createProfile();
    } catch (err) {
      initial = createProfile();
      setStorageError(
        "Speichern konnte nicht gelesen werden. Beschädigte Daten werden nicht überschrieben. Exportieren Sie Ihren aktuellen Fortschritt oder stellen Sie ein Backup in Ihrem Profil wieder her.",
      );
    }
    setProfile(initial);
    setRoute(readRoute());
    const onHash = () => {
      setRoute(readRoute());
      setMobileOpen(false);
      scrollToReadingTarget(0, { immediate: true });
    };
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("hashchange", onHash);
      clearTimeout(toastTimer.current);
    };
  }, []);
  useEffect(() => {
    if (
      profile &&
      route.view === "lesson" &&
      getLesson(route.id) &&
      profile.lastLesson !== route.id
    )
      updateProfile((p) => ({ ...p, lastLesson: route.id }));
  }, [route.view, route.id, profile?.lastLesson]);
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", close);
    };
  }, [mobileOpen]);

  function updateProfile(updater) {
    setProfile((current) => {
      const next = typeof updater === "function" ? updater(current) : updater;
      try {
        saveProfileToStorage(STORAGE_KEY, next);
        setStorageError("");
      } catch {
        setStorageError(
          "Der Browser erlaubt kein Speichern. Der Fortschritt ist auf dieser Registerkarte verfügbar. Laden Sie das Backup in Ihrem Profil herunter, bevor Sie es schließen.",
        );
      }
      return next;
    });
  }
  function notify(message) {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 4000);
  }
  function bookmark(id) {
    const saved = profile.bookmarks.includes(id);
    updateProfile((p) => toggleBookmark(p, id));
    notify(saved ? "Lesezeichen gelöscht" : "Thema zu Lesezeichen hinzugefügt");
  }
  if (!profile)
    return (
      <div className="loading">
        <span className="brand-mark">
          <Zap size={25} fill="currentColor" />
        </span>
        <span>Sammeln Sie Ihre Wissenskette...</span>
      </div>
    );
  const progress = getProgress(profile);
  const lesson = getLesson(route.id);
  const current =
    getLesson(progress.nextLesson) ||
    getLesson(profile.lastLesson) ||
    lessons[0];
  const title =
    route.view === "lesson"
      ? lesson?.title || "Lektion"
      : {
          home: "Lernübersicht",
          curriculum: "Lernpfad",
          essentials: "Einfach erklärt",
          glossary: "Lexikon",
          formulas: "Verzeichnis der Formeln",
          bookmarks: "Merkliste",
          exam: "Abschlussprüfung",
          profile: "Mein Profil",
          sources: "Quellen und Materialien",
        }[route.view];

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Zum Inhalt springen
      </a>
      {mobileOpen && (
        <button
          className="sidebar-backdrop"
          aria-label="Menü schließen"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        data-lenis-prevent
        className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}
        aria-label="Hauptnavigation"
      >
        <a className="brand" href="#/home" aria-label="Volt. — Zur Hauptseite">
          <span className="brand-mark">
            <Zap size={24} fill="currentColor" strokeWidth={1.5} />
          </span>
          <span>
            volt<span className="brand-dot">.</span>
          </span>
          <span className="brand-caption">Dein Lernstudio</span>
        </a>
        <div className="sidebar-label">IHR RAUM</div>
        <nav className="main-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#/${item.id}`}
              className={route.view === item.id ? "nav-active" : ""}
              aria-current={route.view === item.id ? "page" : undefined}
            >
              <item.icon size={19} strokeWidth={1.6} />
              <span>{item.label}</span>
              {item.id === "bookmarks" && profile.bookmarks.length > 0 && (
                <small>{profile.bookmarks.length}</small>
              )}
            </a>
          ))}
        </nav>
        <div className="sidebar-divider" />
        <div className="sidebar-label">TESTEN SIE SICH</div>
        <a
          className={`exam-nav ${route.view === "exam" ? "nav-active" : ""}`}
          href="#/exam"
        >
          <GraduationCap size={20} strokeWidth={1.6} />
          <span>Abschlussprüfung</span>
          {progress.examUnlocked ? (
            <span className="nav-dot" />
          ) : (
            <LockKeyhole size={14} />
          )}
        </a>
        <div className="sidebar-course">
          <div className="sidebar-course-top">
            <span className="course-symbol">
              <Zap size={18} />
            </span>
            <span>KLEINE SCHRITTE</span>
          </div>
          <h3>
            Große Entdeckungen
            <br />
            Beginnen Sie mit den Grundlagen.
          </h3>
          <div className="sidebar-progress-title">
            <span>Ihr Fortschritt</span>
            <strong>{progress.percent}%</strong>
          </div>
          <div className="progress-track">
            <AnimatedProgress value={progress.percent} />
          </div>
          <p>{progress.completed} von 13 Themen gemeistert</p>
          <a href={`#/lesson/${current.id}`}>
            Weiterlernen
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="sidebar-bottom">
          <a href="#/sources">
            <ShieldCheck size={17} />
            Über Kursmaterialien
            <ArrowUpRight size={13} />
          </a>
          <a href="#/profile">
            <Settings2 size={17} />
            Profil und Daten
          </a>
          <span className="local-label">
            <span />
            Der Fortschritt wird auf dem Gerät gespeichert
          </span>
        </div>
      </aside>
      <div className="app-body">
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="icon-button mobile-menu"
              aria-label="Menü öffnen"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Menu size={22} />
            </button>
            <span className="breadcrumb">
              Meine Akademie
              <ChevronRight size={13} />
              <strong>{title}</strong>
            </span>
          </div>
          <div className="topbar-right">
            <span className="xp-indicator">
              <Sparkles size={15} />
              {progress.xp} XP
            </span>
            <span className="topbar-separator" />
            <button
              className="button button-outline register-button"
              onClick={() => setShowRegister(true)}
            >
              Registrieren
            </button>
            <a className="profile-button" href="#/profile">
              <span className="avatar">
                {profile.name.charAt(0).toUpperCase()}
              </span>
              <span>
                <strong>{displayName(profile.name)}</strong>
                <small>
                  Stufe {progress.level} · {progress.levelName}
                </small>
              </span>
              <ChevronDown size={13} />
            </a>
            {showRegister && (
              <RegisterDialog
                profile={profile}
                onClose={() => setShowRegister(false)}
                onSave={(name) => {
                  updateProfile((p) => ({ ...p, name }));
                  setShowRegister(false);
                  notify("Registrierung lokal gespeichert");
                }}
              />
            )}
          </div>
        </header>
        {storageError && (
          <div className="storage-alert" role="alert">
            <ShieldCheck size={20} />
            <p>{storageError}</p>
            <a href="#/profile">Profil öffnen</a>
          </div>
        )}
        <motion.main
          key={`${route.view}-${route.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          id="main-content"
          className={`main-content view-${route.view}`}
          tabIndex={-1}
        >
          {route.view === "home" && (
            <Dashboard
              profile={profile}
              progress={progress}
              current={current}
              bookmark={bookmark}
            />
          )}
          {route.view === "curriculum" && (
            <Curriculum profile={profile} bookmark={bookmark} />
          )}
          {route.view === "essentials" && <Essentials />}
          {route.view === "bookmarks" && (
            <Bookmarks profile={profile} bookmark={bookmark} />
          )}
          {route.view === "lesson" &&
            (lesson ? (
              <Lesson
                key={lesson.id}
                lesson={lesson}
                profile={profile}
                bookmark={bookmark}
                onComplete={(score) => {
                  updateProfile((p) => recordLesson(p, lesson.id, score));
                  notify(
                    score >= 4
                      ? "Thema gemeistert! Fortschritt gespeichert."
                      : "Der Versuch wurde gerettet. Sie können den Test erneut durchführen.",
                  );
                }}
              />
            ) : (
              <EmptyState
                icon={BookOpen}
                title="Eine solche Lektion gibt es nicht"
                text="Wählen Sie ein Thema aus dem Programm aus und beginnen Sie damit."
                action="Programm öffnen"
                onAction={() => go("curriculum")}
              />
            ))}
          {route.view === "glossary" && <Glossary />}
          {route.view === "formulas" && <Formulas />}
          {route.view === "exam" && (
            <Exam
              profile={profile}
              progress={progress}
              onComplete={(score) => {
                updateProfile((p) => recordExam(p, score));
                notify(
                  "Das Ergebnis der abschließenden Arbeit wird gespeichert.",
                );
              }}
            />
          )}
          {route.view === "profile" && (
            <Profile
              profile={profile}
              progress={progress}
              onUpdate={updateProfile}
              notify={notify}
            />
          )}
          {route.view === "sources" && <Sources />}
        </motion.main>
        <footer className="page-footer">
          <span className="footer-brand">volt.</span>
          <span>Studieren. Verstehen. Anwenden.</span>
          <a href="#/sources">
            Für Neugierige gemacht
            <ArrowUpRight size={13} />
          </a>
        </footer>
      </div>
      {toast && (
        <div className="toast" role="status">
          <CheckCircle2 size={18} />
          {toast}
          <button
            aria-label="Benachrichtigung schließen"
            onClick={() => setToast("")}
          >
            <X size={15} />
          </button>
        </div>
      )}
    </div>
  );
}

function CircuitArt() {
  return (
    <div
      className="circuit-art"
      aria-label="Geschlossener Schaltplan: Spannungsquelle, Widerstand und elektrischer Strom"
      role="img"
    >
      <span className="art-grid" />
      <div className="art-tag">
        <span />
        WISSEN GEHT IN BEWEGUNG
      </div>
      <svg viewBox="0 0 390 255" aria-hidden="true">
        <defs>
          <marker
            id="current-arrow"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6" fill="#344d6e" />
          </marker>
        </defs>
        <circle cx="201" cy="127" r="94" fill="#fde2a2" fillOpacity=".35" />
        {/* lightning motif */}
        <g className="lightning" transform="translate(260,10)">
          <path d="M10 10 L40 40 L26 40 L60 90 L30 70 L44 70 L10 10" fill="none" stroke="#ffd86b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <path
          d="M78 100V57Q78 46 90 46H173M222 46H302Q315 46 315 59V190Q315 204 302 204H91Q78 204 78 190V150"
          fill="none"
          stroke="#303d4d"
          strokeWidth="2.5"
        />
        <path
          d="M173 34H222V58H173Z"
          fill="#fef7e6"
          stroke="#303d4d"
          strokeWidth="2.5"
        />
        <path d="M57 113H100M66 132H91" stroke="#303d4d" strokeWidth="3" />
        <path d="M78 100V113M78 132V150" stroke="#303d4d" strokeWidth="2.5" />
        <path
          d="M266 46h16M315 112v16M130 204h-16"
          stroke="#344d6e"
          strokeWidth="2"
          markerEnd="url(#current-arrow)"
        />
        <text x="190" y="22" className="svg-label">
          R
        </text>
        <text x="39" y="130" className="svg-label">
          U
        </text>
        <text x="332" y="123" className="svg-label">
          I
        </text>
        <text x="106" y="114" fontSize="12" fill="#435061">
          +
        </text>
        <text x="103" y="139" fontSize="13" fill="#435061">
          −
        </text>
        <circle cx="78" cy="46" r="4" fill="#303d4d" />
        <circle cx="315" cy="204" r="4" fill="#303d4d" />

        {/* Electron animation: decorative, respects reduced-motion */}
        <g className="electrons" aria-hidden="true">
          <g className="electron">
            <circle cx="140" cy="80" r="5" fill="#2563eb" />
            <text x="140" y="84" fontSize="8" fill="#fff" textAnchor="middle">+</text>
          </g>
          <g className="electron">
            <circle cx="220" cy="110" r="5" fill="#ef4444" />
            <text x="220" y="114" fontSize="8" fill="#fff" textAnchor="middle">−</text>
          </g>
          <g className="electron">
            <circle cx="250" cy="70" r="5" fill="#2563eb" />
            <text x="250" y="74" fontSize="8" fill="#fff" textAnchor="middle">+</text>
          </g>
        </g>

        <text x="195" y="133" textAnchor="middle" className="svg-formula">
          U = I · R
        </text>
        <text x="195" y="155" textAnchor="middle" className="svg-caption">
          drei Größen. eine Verbindung.
        </text>
      </svg>
      <div className="art-bottom">
        <span>Ohmsches Gesetz</span>
        <span>
          01 / GRUNDLAGEN
          <ArrowUpRight size={12} />
        </span>
      </div>
      <span className="art-spark">⚡</span>
    </div>
  );
}

function Dashboard({ profile, progress, current, bookmark }) {
  const previews =
    progress.completed === 13
      ? lessons.slice(10)
      : lessons.slice(
          Math.max(0, current.number - 1),
          Math.max(0, current.number - 1) + 3,
        );
  return (
    <>
      <div className="welcome-line">
        <span>
          <span className="tiny-sun">✳</span>Ein guter Tag, um Neues zu
          verstehen
        </span>
        <span className="course-badge">Physik · Grundkurs</span>
      </div>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="green-dash" />
            VON DER ERSTEN LADUNG BIS ZUM MAGNETFELD
          </div>
          <h1>
            Elektrotechnik.
            <br /> Endlich{" "}
            <span className="underlined">
              verstehen
              <svg
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8Q90 0 196 6" />
              </svg>
            </span>
            .
          </h1>
          <p>
            Klare Erklärungen, Live-Beispiele und Übung.
            <br className="desktop-break" /> Formeln nicht nur auswendig lernen
            – verstehen
            <br className="desktop-break" /> wie Elektrizität funktioniert.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={`#/lesson/${current.id}`}>
              {progress.completed ? "Weiterlernen" : "Jetzt loslernen"}
              <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#/curriculum">
              Lernpfad entdecken
              <ArrowRight size={15} />
            </a>
          </div>
          <div className="hero-note">
            <span className="mini-avatars">
              <span>U</span>
              <span>I</span>
              <span>R</span>
            </span>
            <span>Von Grund auf. In Ihrem eigenen Tempo. Mit Verständnis.</span>
          </div>
        </div>
        <CircuitArt />
      </section>
      <section className="course-stats" aria-label="Kurszusammensetzung">
        <div>
          <span className="stat-icon">
            <BookOpen size={20} />
          </span>
          <strong>13</strong>
          <span>
            detaillierte Themen<small>Alles ist miteinander verbunden</small>
          </span>
        </div>
        <div>
          <span className="stat-icon">
            <CheckCircle2 size={20} />
          </span>
          <strong>65</strong>
          <span>
            Übungsfragen<small>5 nach jedem Thema</small>
          </span>
        </div>
        <div>
          <span className="stat-icon">
            <GraduationCap size={23} />
          </span>
          <strong>35</strong>
          <span>
            Prüfungsfragen<small>Ein großer Wissenstest</small>
          </span>
        </div>
      </section>
      <a className="essentials-banner" href="#/essentials">
        <span className="essentials-icon">
          <Lightbulb size={22} strokeWidth={1.5} />
        </span>
        <div>
          <strong>Strom, Spannung, Felder. Was ist das überhaupt?</strong>
          <p>
            12 Hauptkonzepte in einfachen Worten – bevor wir uns mit den Formeln
            befassen.
          </p>
        </div>
        <ArrowUpRight size={20} />
      </a>
      <section className="next-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              {progress.completed
                ? "WIR GEHEN IHREN WEG WEITER"
                : "SCHRITT FÜR SCHRITT"}
            </span>
            <h2>
              {progress.completed === 13
                ? "Sie haben das gesamte Wissen gebündelt."
                : progress.completed
                  ? "Die nächste Entdeckung steht bevor."
                  : "Beginnen Sie mit den Grundlagen."}
            </h2>
          </div>
          <a className="text-link" href="#/curriculum">
            Alle 13 Themen
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="lesson-grid">
          {previews.map((l, i) => (
            <LessonCard
              key={l.id}
              lesson={l}
              profile={profile}
              bookmark={bookmark}
              featured={i === 0}
            />
          ))}
        </div>
      </section>
      <VisualGallery />
      <section className="learning-path">
        <div className="section-heading">
          <div>
            <span className="eyebrow">KURSPLAN</span>
            <h2>Von einfach bis zum Gesamtbild.</h2>
          </div>
          <span className="muted small-text">4 Abschnitte · 13 Themen</span>
        </div>
        <div className="path-grid">
          {categories.map((c, i) => {
            const Icon = icons[c.id];
            const group = lessons.filter((l) => l.category === c.id);
            const done = group.filter(
              (l) => profile.results[l.id]?.score >= 4,
            ).length;
            return (
              <a
                className="path-card"
                key={c.id}
                href={`#/lesson/${group[0].id}`}
              >
                <span className="path-number">
                  0{i + 1}
                  <ArrowUpRight size={16} />
                </span>
                <Icon size={30} strokeWidth={1.3} />
                <h3>{c.name}</h3>
                <p>{c.caption}</p>
                <div className="path-progress">
                  <span>{c.range}</span>
                  <span>
                    {done} / {group.length}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>
      <section className="exam-banner">
        <span className="exam-banner-icon">
          <Trophy size={28} strokeWidth={1.4} />
        </span>
        <div>
          <span className="eyebrow">BRINGEN SIE IHR WISSEN ZUSAMMEN</span>
          <h2>Das Ende, das zum Anfang werden wird.</h2>
          <p>
            {progress.examUnlocked
              ? "Alle Themen wurden gemeistert. Zeit, das Gesamtbild zu überprüfen."
              : "Vervollständigen Sie 13 Themen und eröffnen Sie eine Abschlussprüfung mit 35 Fragen."}
          </p>
        </div>
        <a className="button button-light" href="#/exam">
          {progress.examUnlocked
            ? "Zur Abschlussprüfung"
            : `${progress.completed} von 13 gemeistert`}
          {progress.examUnlocked ? (
            <ArrowUpRight size={17} />
          ) : (
            <LockKeyhole size={15} />
          )}
        </a>
      </section>
      <div className="trust-strip">
        <span>
          <ShieldCheck size={17} />
          Keine Registrierung
        </span>
        <span>
          <UserRound size={17} />
          Ihr Lerntempo
        </span>
        <span>
          <Download size={17} />
          Der Fortschritt bleibt bei Ihnen
        </span>
      </div>
    </>
  );
}

function LessonCard({ lesson, profile, bookmark, featured = false }) {
  const Icon = icons[lesson.category];
  const score = profile.results[lesson.id]?.score;
  const passed = score >= 4;
  return (
    <Reveal
      as="article"
      className={`lesson-card ${featured ? "lesson-featured" : ""} ${passed ? "lesson-passed" : ""}`}
    >
      <div className="lesson-card-top">
        <span className={`topic-icon topic-${lesson.category}`}>
          <Icon size={24} strokeWidth={1.5} />
        </span>
        <span className="lesson-number">
          THEMA {String(lesson.number).padStart(2, "0")}
        </span>
        <button
          className={`bookmark-button ${profile.bookmarks.includes(lesson.id) ? "is-bookmarked" : ""}`}
          aria-label={`${profile.bookmarks.includes(lesson.id) ? "Lesezeichen löschen" : "Fügen Sie ein Lesezeichen hinzu"}: ${lesson.title}`}
          aria-pressed={profile.bookmarks.includes(lesson.id)}
          onClick={() => bookmark(lesson.id)}
        >
          <Bookmark
            size={17}
            fill={
              profile.bookmarks.includes(lesson.id) ? "currentColor" : "none"
            }
          />
        </button>
      </div>
      <a className="lesson-card-title" href={`#/lesson/${lesson.id}`}>
        <h3>{lesson.title}</h3>
        <span>{lesson.german}</span>
      </a>
      <p>{lesson.description}</p>
      <div className="lesson-card-meta">
        <span>
          <Clock3 size={13} />
          {lesson.duration} min
        </span>
        <span>§ {lesson.chapter}</span>
        {passed ? (
          <span className="passed-chip">
            <Check size={12} />
            {score}/5
          </span>
        ) : (
          <span>5 Fragen</span>
        )}
      </div>
      <a className="lesson-card-bottom" href={`#/lesson/${lesson.id}`}>
        <span>
          {passed
            ? "Thema wiederholen"
            : score != null
              ? "Thema fortsetzen"
              : featured
                ? "Beginnen wir hier"
                : "Thema öffnen"}
        </span>
        <span className="card-arrow">
          <ArrowUpRight size={17} />
        </span>
      </a>
    </Reveal>
  );
}

function PageIntro({ eyebrow, title, text, children }) {
  return (
    <div className="page-intro">
      <span className="eyebrow">
        <span className="green-dash" />
        {eyebrow}
      </span>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </div>
  );
}
function Curriculum({ profile, bookmark }) {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <PageIntro
        eyebrow="IHR WEG ZUM VERSTEHEN"
        title="Wissen ist in einer Kette geschlossen."
        text="13 verwandte Themen – von der ersten Ladung bis zum magnetischen Fluss. Gehen Sie der Reihe nach vor oder kehren Sie zu dem zurück, was Sie tiefer verstehen möchten."
      />
      <div className="filter-tabs" aria-label="Kursabschnitte">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Gesamter Kurs<span>13</span>
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className={filter === c.id ? "active" : ""}
            onClick={() => setFilter(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>
      {categories
        .filter((c) => filter === "all" || c.id === filter)
        .map((c) => (
          <section className="curriculum-group" key={c.id}>
            <div className="section-heading">
              <div>
                <span className="eyebrow">THEMEN {c.range}</span>
                <h2>{c.name}</h2>
              </div>
              <span className="muted small-text">{c.caption}</span>
            </div>
            <div className="lesson-grid">
              {lessons
                .filter((l) => l.category === c.id)
                .map((l) => (
                  <LessonCard
                    key={l.id}
                    lesson={l}
                    profile={profile}
                    bookmark={bookmark}
                  />
                ))}
            </div>
          </section>
        ))}
    </>
  );
}
function Bookmarks({ profile, bookmark }) {
  const items = lessons.filter((l) => profile.bookmarks.includes(l.id));
  return (
    <>
      <PageIntro
        eyebrow="WICHTIG IN IHREN HÄNDEN"
        title="Meine Lesezeichen."
        text="Gespeicherte Themen zum nachdenklichen Lesen und schnellen Wiederholen."
      />
      {items.length ? (
        <div className="lesson-grid">
          {items.map((l) => (
            <LessonCard
              key={l.id}
              lesson={l}
              profile={profile}
              bookmark={bookmark}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Bookmark}
          title="Alles, was Sie brauchen, wird hier sein."
          text="Klicken Sie auf einer Karte oder am Anfang einer Lektion auf das Lesezeichensymbol. Das Thema wird hier angezeigt."
          action="Wählen Sie ein Thema aus"
          onAction={() => go("curriculum")}
        />
      )}
    </>
  );
}

function Lesson({ lesson, profile, bookmark, onComplete }) {
  const [tab, setTab] = useState("theory");
  const score = profile.results[lesson.id]?.score;
  const nextLesson = lessons[lesson.number];
  const Icon = icons[lesson.category];
  function next(passed) {
    if (passed) {
      if (nextLesson) go("lesson", nextLesson.id);
      else go("exam");
    } else {
      setTab("theory");
      scrollToReadingTarget(0);
    }
  }
  return (
    <>
      <div className="lesson-navigation">
        <a href="#/curriculum">
          <ArrowLeft size={15} />
          Zum Kursprogramm
        </a>
        <span>
          Betreff {String(lesson.number).padStart(2, "0")}
          <span className="muted"> / 13</span>
        </span>
        <button
          className={`text-link ${profile.bookmarks.includes(lesson.id) ? "saved" : ""}`}
          onClick={() => bookmark(lesson.id)}
        >
          <Bookmark
            size={15}
            fill={
              profile.bookmarks.includes(lesson.id) ? "currentColor" : "none"
            }
          />
          {profile.bookmarks.includes(lesson.id)
            ? "Mit Lesezeichen versehen"
            : "Speichern"}
        </button>
      </div>
      <div className="lesson-header">
        <span className="eyebrow">
          <Icon size={16} />
          {categories.find((c) => c.id === lesson.category).name.toUpperCase()}
          <span className="header-dot">·</span>§ {lesson.chapter}
        </span>
        <h1>
          {lesson.title}
          <span>.</span>
        </h1>
        <p className="german-title">{lesson.german}</p>
        <p className="lesson-lead">{lesson.description}</p>
        <div className="lesson-header-meta">
          <span>
            <Clock3 size={15} />
            {lesson.duration} Leseminuten
          </span>
          <span>
            <BookOpen size={15} />
            {lesson.sections.length} Abschnitte
          </span>
          <span>
            <CircleQuestion />5 Fragen
          </span>
          {score != null && (
            <span className={score >= 4 ? "text-success" : ""}>
              <CheckCircle2 size={15} />
              Bestes Ergebnis: {score}/5
            </span>
          )}
        </div>
      </div>
      <div
        className="lesson-tabs"
        role="tablist"
        aria-label="Unterrichtsmaterialien"
        onKeyDown={(event) => {
          const tabs = ["theory", "lab", "quiz"];
          const current = tabs.indexOf(tab);
          let next;
          if (event.key === "ArrowRight") next = (current + 1) % 3;
          else if (event.key === "ArrowLeft") next = (current + 2) % 3;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = 2;
          if (next != null) {
            event.preventDefault();
            setTab(tabs[next]);
            document.getElementById(`tab-${tabs[next]}`)?.focus();
          }
        }}
      >
        {[
          { id: "theory", label: "Lehrbuch", icon: BookOpen },
          { id: "lab", label: "Interaktiv", icon: Activity },
          { id: "quiz", label: "Wissenstest", icon: CheckCircle2 },
        ].map((t) => (
          <button
            key={t.id}
            role="tab"
            tabIndex={tab === t.id ? 0 : -1}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            id={`tab-${t.id}`}
            className={tab === t.id ? "active" : ""}
            onClick={() => setTab(t.id)}
          >
            <t.icon size={17} />
            {t.label}
            {t.id === "quiz" && score >= 4 && <Check size={14} />}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
        {tab === "theory" && (
          <div className="reading-layout">
            <article className="lesson-article">
              <div className="objectives-box">
                <span className="eyebrow">
                  <Lightbulb size={16} />
                  Nach dieser Lektion werden Sie dazu in der Lage sein
                </span>
                <ul>
                  {lesson.objectives.map((o) => (
                    <li key={o}>
                      <Check size={15} />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {lesson.sections.map((s, i) => (
                <Reveal
                  as="section"
                  id={`section-${s.id}`}
                  className="textbook-section"
                  key={s.id}
                >
                  <div className="section-index">
                    {String(i + 1).padStart(2, "0")}
                    <span />
                  </div>
                  <h2>{s.title}</h2>
                  {s.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {s.formula && (
                    <div className="formula-box">
                      <span className="eyebrow">FORMEL</span>
                      <FormulaImage expression={s.formula.expression} />
                      <p>{s.formula.legend}</p>
                      {s.formula.note && <small>{s.formula.note}</small>}
                    </div>
                  )}
                  {s.example && (
                    <div className="worked-example">
                      <span className="eyebrow">
                        <span className="example-dot" />
                        Schauen wir uns ein Beispiel an
                      </span>
                      <h3>{s.example.title}</h3>
                      <p className="example-given">
                        <strong>Gegeben:</strong> {s.example.given}
                      </p>
                      <ol>
                        {s.example.steps.map((step, j) => (
                          <li key={j}>
                            <span>{j + 1}</span>
                            <p>{step}</p>
                          </li>
                        ))}
                      </ol>
                      <div className="example-answer">
                        <CheckCircle2 size={17} />
                        <strong>{s.example.answer}</strong>
                      </div>
                    </div>
                  )}
                  {s.callout && (
                    <aside className={`callout callout-${s.callout.type}`}>
                      <Lightbulb size={20} />
                      <div>
                        <strong>{s.callout.title}</strong>
                        <p>{s.callout.text}</p>
                      </div>
                    </aside>
                  )}
                  {i === 0 && illustrations[lesson.id] && (
                    <LessonFigure illustration={illustrations[lesson.id]} />
                  )}
                </Reveal>
              ))}
              <section className="lesson-summary" id="summary">
                <span className="eyebrow">
                  <Bookmark size={16} />
                  Das Wichtigste sammeln
                </span>
                <h2>Dinge, an die man sich erinnern sollte</h2>
                <ul>
                  {lesson.summary.map((s) => (
                    <li key={s}>
                      <CheckCircle2 size={17} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="lesson-terms">
                <h2>Worte dieser Lektion</h2>
                {lesson.terms.map((t) => (
                  <div key={`${t.term}-${t.symbol}`}>
                    <strong>
                      {t.term}
                      <small>
                        {t.german}
                        {t.symbol ? ` · ${t.symbol}` : ""}
                        {t.unit ? ` · ${t.unit}` : ""}
                      </small>
                    </strong>
                    <p>{t.definition}</p>
                  </div>
                ))}
              </section>
              <div className="lesson-end">
                <span className="topic-icon">
                  <Activity size={24} />
                </span>
                <div>
                  <h3>Probieren Sie es jetzt selbst aus.</h3>
                  <p>
                    Ändern Sie die Einstellungen im Simulator und testen Sie
                    sich dann selbst.
                  </p>
                </div>
                <button
                  className="button button-dark"
                  onClick={() => {
                    setTab("lab");
                    scrollToReadingTarget(320);
                  }}
                >
                  Experiment starten
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
            <aside className="reading-toc">
              <span className="eyebrow">IN DIESER LEKTION</span>
              <nav>
                {lesson.sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#section-${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToReadingTarget(
                        document.getElementById(`section-${s.id}`),
                      );
                    }}
                  >
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                ))}
                <a
                  href="#summary"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToReadingTarget(document.getElementById("summary"));
                  }}
                >
                  <CheckCircle2 size={14} />
                  Die Hauptsache
                </a>
              </nav>
              <div className="toc-tip">
                <span>✳</span>
                <p>
                  Beeilen Sie sich nicht.
                  <br />
                  Verständnis ist wichtiger als Geschwindigkeit.
                </p>
              </div>
            </aside>
          </div>
        )}
        {tab === "lab" && (
          <div className="lab-panel">
            <InteractiveLab lessonId={lesson.id} />
            <div className="lab-next">
              <p>
                Sehen Sie, wie die Mengen zusammenhängen? Lassen Sie uns Ihr
                Verständnis überprüfen.
              </p>
              <button
                className="button button-dark"
                onClick={() => setTab("quiz")}
              >
                Zum Wissenstest
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
        {tab === "quiz" && (
          <Quiz
            questions={lesson.quiz}
            quizId={lesson.id}
            previousScore={score}
            onComplete={onComplete}
            onNext={next}
          />
        )}
      </div>
      <div className="lesson-bottom-nav">
        {lesson.number > 1 ? (
          <a href={`#/lesson/${lessons[lesson.number - 2].id}`}>
            <ArrowLeft size={17} />
            <span>
              <small>VORHERIGES THEMA</small>
              {lessons[lesson.number - 2].title}
            </span>
          </a>
        ) : (
          <a href="#/curriculum">
            <ArrowLeft size={17} />
            Zum Kursprogramm
          </a>
        )}
        {nextLesson ? (
          <a href={`#/lesson/${nextLesson.id}`}>
            <span>
              <small>NÄCHSTES THEMA</small>
              {nextLesson.title}
            </span>
            <ArrowRight size={17} />
          </a>
        ) : (
          <a href="#/exam">
            <span>
              <small>LETZTER SCHRITT</small>Abschlussprüfung
            </span>
            <ArrowRight size={17} />
          </a>
        )}
      </div>
    </>
  );
}
function CircleQuestion() {
  return <CheckCircle2 size={15} />;
}

function Glossary() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const unique = allTerms.filter(
    (t, i, arr) =>
      arr.findIndex(
        (o) =>
          o.term.toLocaleLowerCase("de") === t.term.toLocaleLowerCase("de"),
      ) === i,
  );
  const filtered = unique
    .filter(
      (t) =>
        (filter === "all" || getLesson(t.lessonId).category === filter) &&
        `${t.term} ${t.german} ${t.symbol} ${t.definition}`
          .toLocaleLowerCase("de")
          .includes(query.toLocaleLowerCase("de")),
    )
    .sort((a, b) => a.term.localeCompare(b.term, "de"));
  return (
    <>
      <PageIntro
        eyebrow="WIR SPRECHEN DIE GLEICHE SPRACHE"
        title="Jedes Phänomen hat seinen eigenen Namen."
        text="Klare Definitionen, wichtige Größen und ihre Einheiten. Dein Nachschlagewerk für alle 13 Themen."
      />
      <div className="search-field">
        <Search size={19} />
        <input
          aria-label="Suchbegriff"
          placeholder="Finden Sie einen Begriff, eine Bezeichnung oder einen deutschen Namen..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button aria-label="Suche löschen" onClick={() => setQuery("")}>
            <X size={17} />
          </button>
        )}
        <span>{filtered.length} Begriffe</span>
      </div>
      <div className="filter-tabs">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Alle Begriffe
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className={filter === c.id ? "active" : ""}
            onClick={() => setFilter(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="glossary-list">
          {filtered.map((t) => (
            <article key={t.term}>
              <div className="term-symbol">
                {t.symbol || <BookOpen size={21} />}
              </div>
              <div>
                <h2>
                  {t.term}
                  <span>{t.german}</span>
                </h2>
                <p>{t.definition}</p>
                <div className="term-meta">
                  {t.unit && <span>Einheit: {t.unit}</span>}
                  <a href={`#/lesson/${t.lessonId}`}>
                    Zur Lektion{" "}
                    {String(getLesson(t.lessonId).number).padStart(2, "0")}
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Search}
          title="Einen solchen Begriff gibt es noch nicht."
          text="Versuchen Sie es mit einem anderen Wort, einem deutschen Namen oder einer deutschen Menge."
        />
      )}
    </>
  );
}
function Formulas() {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <PageIntro
        eyebrow="VERBINDUNGEN, DIE SICH NÜTZLICH ERINNERN SIND"
        title="Weniger Pauken. Mehr verstehen."
        text="Grundformeln des Kurses mit Dekodierung von Werten und Anwendungsbedingungen. Rechnen Sie Werte immer in kompatible Einheiten um."
      />
      <div className="units-reminder">
        <Lightbulb size={21} />
        <p>
          <strong>Bevor Sie zählen:</strong> 1 mA = 0,001 A · 1 kOhm = 1.000 Ohm
          · 1 µF = 0,000001 F · 1 kWh = 3.600.000 J.
        </p>
      </div>
      <div className="filter-tabs">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Formelsammlung
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className={filter === c.id ? "active" : ""}
            onClick={() => setFilter(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>
      <div className="formula-grid">
        {formulaSheet
          .filter(
            (f) =>
              filter === "all" || getLesson(f.lessonId)?.category === filter,
          )
          .map((f, i) => (
            <article key={`${f.lessonId}-${i}`} className="reference-formula">
              <div>
                <span className="eyebrow">{f.title}</span>
                <span className="formula-ref">
                  § {getLesson(f.lessonId)?.chapter}
                </span>
              </div>
              <FormulaImage expression={f.expression} />
              <p>{f.legend}</p>
              <small>{f.conditions}</small>
              <a href={`#/lesson/${f.lessonId}`}>
                Verstehen Sie, wie es funktioniert
                <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
      </div>
    </>
  );
}

function Exam({ profile, progress, onComplete }) {
  return (
    <>
      <PageIntro
        eyebrow="LETZTE ÜBERPRÜFUNG"
        title="Die ganze Kette. Ein Verständnis."
        text="35 Fragen im gesamten Kurs. Theorie, Berechnungen, Begriffe und Praxissituationen – wir prüfen, wie Wissen zusammenwirkt."
      />
      {progress.examUnlocked ? (
        <>
          <div className="exam-unlocked-note">
            <CheckCircle2 size={19} />
            <span>
              Alle 13 Themen wurden gemeistert. Sie sind bereit für die
              Abschlussprüfung.
            </span>
            {progress.bestExam != null && (
              <strong>Bestes Ergebnis: {progress.bestExam}/35</strong>
            )}
          </div>
          <Quiz
            questions={examQuestions}
            quizId="final-exam"
            isExam
            previousScore={progress.bestExam}
            onComplete={onComplete}
            onNext={() => go("home")}
          />
          {profile.examResults.length > 0 && (
            <div className="exam-history">
              <h2>Geschichte der Versuche</h2>
              {[...profile.examResults].reverse().map((r, i) => (
                <div key={`${r.completedAt}-${i}`}>
                  <span>Versuch {profile.examResults.length - i}</span>
                  <span>
                    {new Date(r.completedAt).toLocaleDateString("de-DE")}
                  </span>
                  <strong>{r.score}/35</strong>
                  <span className={r.score >= 28 ? "text-success" : "muted"}>
                    {r.score >= 28 ? "Bestanden" : "Noch nicht akzeptiert"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="exam-locked">
          <span className="lock-circle">
            <LockKeyhole size={30} strokeWidth={1.5} />
          </span>
          <h2>Lassen Sie uns zunächst die gesamte Kette zusammenbauen.</h2>
          <p>
            Die Abschlussprüfung wird eröffnet, wenn Sie die Tests aller 13
            Themen mit einer Punktzahl von mindestens 4 von 5 bestehen.
          </p>
          <div className="locked-progress">
            <div>
              <span>Themen gemeistert</span>
              <strong>{progress.completed} / 13</strong>
            </div>
            <div className="progress-track">
              <AnimatedProgress value={progress.percent} />
            </div>
          </div>
          <div className="exam-checklist">
            {lessons.map((l) => (
              <a key={l.id} href={`#/lesson/${l.id}`}>
                <span
                  className={
                    profile.results[l.id]?.score >= 4
                      ? "check-done"
                      : "check-pending"
                  }
                >
                  {profile.results[l.id]?.score >= 4 ? (
                    <Check size={13} />
                  ) : (
                    String(l.number).padStart(2, "0")
                  )}
                </span>
                <span>{l.title}</span>
                <ChevronRight size={14} />
              </a>
            ))}
          </div>
          <a
            className="button button-dark"
            href={`#/lesson/${progress.nextLesson}`}
          >
            Weiterlernen
            <ArrowRight size={17} />
          </a>
        </div>
      )}
    </>
  );
}

function Profile({ profile, progress, onUpdate, notify }) {
  const [name, setName] = useState(profile.name);
  const [error, setError] = useState("");
  const [pendingImport, setPendingImport] = useState(null);
  const [reset, setReset] = useState(false);
  const inputRef = useRef(null);
  function rename(e) {
    e.preventDefault();
    try {
      const next = setProfileName(profile, name);
      onUpdate(next);
      setName(next.name);
      setError("");
      notify("Name gespeichert");
    } catch (e) {
      setError(e.message);
    }
  }
  function exportData() {
    const blob = new Blob([JSON.stringify(profile, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "volt-progress.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify("Backup heruntergeladen");
  }
  async function importData(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      if (file.size > 1000000)
        throw new Error(
          "Die Datei ist zu groß. Wählen Sie ein Backup mit einer Größe von bis zu 1 MB.",
        );
      const data = normalizeProfile(JSON.parse(await file.text()));
      setPendingImport(data);
      setError("");
    } catch (err) {
      setError(
        `Datei konnte nicht importiert werden: ${err instanceof SyntaxError ? "Dies ist keine JSON-Datei." : err.message}`,
      );
    }
    e.target.value = "";
  }
  return (
    <>
      <PageIntro
        eyebrow="IHR PERSÖNLICHER RAUM"
        title="Jeder Schritt zählt."
        text="Name, Erfolge und der gesamte zurückgelegte Weg. Alles wird lokal in diesem Browser gespeichert – ohne Konto oder Server."
      />
      <div className="profile-layout">
        <div className="profile-main-card">
          <div className="profile-avatar">
            {profile.name.charAt(0).toUpperCase()}
            <span>
              <Zap size={16} fill="currentColor" />
            </span>
          </div>
          <span className="eyebrow">
            NIVEAU {progress.level} · {progress.levelName.toUpperCase()}
          </span>
          <h2>{profile.name}</h2>
          <div className="profile-xp">
            <span>{progress.xp} XP</span>
            <span>
              Bis zum Niveau {progress.level + 1}: {200 - (progress.xp % 200)}{" "}
              XP
            </span>
          </div>
          <div className="progress-track">
            <AnimatedProgress value={(progress.xp % 200) / 2} />
          </div>
          <p>
            20 XP für jede richtige Antwort des besten Versuchs der Lektion. In
            der Kontrolle - 10 XP. Wiederholungen verbessern die Ergebnisse,
            anstatt Punkte zu duplizieren.
          </p>
          <form onSubmit={rename}>
            <label htmlFor="profile-name">Wie heißt du?</label>
            <div>
              <input
                id="profile-name"
                value={name}
                maxLength={32}
                onChange={(e) => setName(e.target.value)}
                autoComplete="nickname"
                required
              />
              <button className="button button-dark" type="submit">
                Speichern
                <Check size={16} />
              </button>
            </div>
          </form>
        </div>
        <div className="profile-side">
          <div className="profile-stat">
            <BookOpen size={23} />
            <strong>
              {progress.completed}
              <small>/ 13</small>
            </strong>
            <span>so gemeistert</span>
          </div>
          <div className="profile-stat">
            <Trophy size={23} />
            <strong>
              {progress.bestExam ?? "—"}
              <small>/ 35</small>
            </strong>
            <span>bestes Testergebnis</span>
          </div>
          <div className="achievement">
            <Award size={30} />
            <div>
              <strong>
                {progress.completed === 13
                  ? "Komplette Wissenskette"
                  : progress.completed >= 5
                    ? "Basics in good hands"
                    : progress.completed
                      ? "Erste Entdeckung"
                      : "Zukünftiger Forscher"}
              </strong>
              <span>
                {progress.completed
                  ? "Ihr Erfolg ist bereits bei Ihnen"
                  : "Erste bestandene Prüfung – erster Erfolg"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="data-card">
        <span className="eyebrow">
          <ShieldCheck size={17} />
          SIE KONTROLLIEREN IHRE DATEN
        </span>
        <h2>Speichern Sie Ihren Weg.</h2>
        <p>
          Lokale Daten sind an den Browser und das Gerät gebunden. Sie
          verschwinden möglicherweise, wenn die Site-Daten gelöscht werden.
          Exportieren Sie eine Kopie, um Ihren Fortschritt zu übertragen oder
          ihn später wiederherzustellen.
        </p>
        <div className="button-row">
          <button className="button button-dark" onClick={exportData}>
            <Download size={17} />
            Download-Fortschritt
          </button>
          <button
            className="button button-outline"
            onClick={() => inputRef.current?.click()}
          >
            <Upload size={17} />
            Aus Datei laden
          </button>
          <input
            ref={inputRef}
            type="file"
            accept=".json,application/json"
            onChange={importData}
            className="sr-only"
            aria-label="Backup herunterladen"
          />
        </div>
        {pendingImport && (
          <div className="confirm-box">
            <strong>Aktuellen Fortschritt ersetzen?</strong>
            <p>
              Das Profil wird geladen“{pendingImport.name}»:{" "}
              {getProgress(pendingImport).completed} von 13 Themen gemeistert.
              Laden Sie die aktuellen Daten herunter, bevor Sie sie ersetzen,
              wenn Sie sie behalten möchten.
            </p>
            <div className="button-row">
              <button
                className="button button-dark"
                onClick={() => {
                  onUpdate(pendingImport);
                  setName(pendingImport.name);
                  setPendingImport(null);
                  notify("Fortschritt wiederhergestellt");
                }}
              >
                Ja, wiederherstellen
              </button>
              <button
                className="button button-outline"
                onClick={() => setPendingImport(null)}
              >
                Abbrechen
              </button>
            </div>
          </div>
        )}
        {error && (
          <p className="field-error" role="alert">
            {error}
          </p>
        )}
      </section>
      <section className="profile-results">
        <h2>Mein Weg nach Themen</h2>
        {lessons.map((l) => (
          <a key={l.id} href={`#/lesson/${l.id}`}>
            <span className="result-topic-number">
              {String(l.number).padStart(2, "0")}
            </span>
            <span>{l.title}</span>
            <span>
              {profile.results[l.id]
                ? `${profile.results[l.id].score}/5 · ${profile.results[l.id].attempts} Versuche`
                : "Weiteres wird folgen"}
            </span>
            {profile.results[l.id]?.score >= 4 ? (
              <CheckCircle2 className="text-success" size={18} />
            ) : (
              <ArrowUpRight size={16} />
            )}
          </a>
        ))}
      </section>
      <div className="reset-data">
        <div>
          <strong>Beginnen Sie mit einer sauberen Weste</strong>
          <p>
            Namen, Ergebnisse, Lesezeichen und gespeicherte Versuche auf diesem
            Gerät löschen.
          </p>
        </div>
        <button
          className="button button-outline"
          onClick={() => setReset(true)}
        >
          Fortschritt zurücksetzen
        </button>
      </div>
      {reset && (
        <ResetDialog
          onCancel={() => setReset(false)}
          onConfirm={() => {
            const next = createProfile();
            onUpdate(next);
            setName(next.name);
            setReset(false);
            try {
              // use helper to remove attempt keys (best-effort)
              removeAttemptKeys();
            } catch {}
            notify("Fortschritt zurückgesetzt");
          }}
        />
      )}
    </>
  );
}
function Sources() {
  return (
    <>
      <PageIntro
        eyebrow="UNTERSTÜTZUNG FÜR WISSEN"
        title="Verstehen beginnt mit Genauigkeit."
        text="Der Kurs deckt 13 Themen aus Ihrem Elektrotechnikstudium ab. Alle Erklärungen, Rechenbeispiele und Tests sind auf Deutsch verfügbar."
      />
      <div className="source-intro">
        <BookOpen size={27} />
        <div>
          <h2>Wie ist dieses Tutorial organisiert?</h2>
          <p>
            Jedes Kapitel führt vom physikalischen Verständnis über die Formel
            zur gelösten Aufgabe und zur selbstständigen Übung. Alle
            Zahlenbeispiele beziehen sich auf explizit angegebene Modelle:
            ideale Elemente, Gleichstrom oder lineares Medium. Absatznummern
            werden von Ihrem Programm gespeichert; zwei mit 2.8 gekennzeichnete
            Themen werden gesondert betrachtet.
          </p>
          <p>
            Die folgenden Links sind zusätzliche maßgebliche Materialien für ein
            eingehendes Studium. Sie werden auf externen Websites geöffnet. Der
            Kurs, das Lexikon und die interaktiven Experimente funktionieren
            ohne externe APIs.
          </p>
        </div>
      </div>
      <div className="sources-list">
        {sources.map((s, i) => (
          <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">
            <span className="source-number">0{i + 1}</span>
            <div>
              <span className="eyebrow">{s.organization}</span>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
            </div>
            <ArrowUpRight size={20} />
          </a>
        ))}
      </div>
      <div className="callout callout-warning">
        <ShieldCheck size={22} />
        <div>
          <strong>Vom Trainingsmodell zur echten Rennstrecke</strong>
          <p>
            Die Trainer dienen dem Verstehen und nicht dem Entwerfen von
            Krafttraining. Verwenden Sie für physikalische Experimente eine
            Niederspannungs-Trainingsquelle und entsprechend dimensionierte
            Komponenten. Experimentieren Sie nicht mit Haushaltsstrom.
          </p>
        </div>
      </div>
    </>
  );
}
function EmptyState({ icon: Icon, title, text, action, onAction }) {
  return (
    <div className="empty-state">
      <span>
        <Icon size={31} strokeWidth={1.4} />
      </span>
      <h2>{title}</h2>
      <p>{text}</p>
      {action && (
        <button className="button button-dark" onClick={onAction}>
          {action}
          <ArrowRight size={17} />
        </button>
      )}
    </div>
  );
}

function LessonFigure({ illustration }) {
  return (
    <figure className="lesson-figure">
      <div className="figure-heading">
        <span className="eyebrow">SEHEN, UM ZU VERSTEHEN</span>
        <span>Illustration aus einem Lehrbuch</span>
      </div>
      <Image
        src={illustration.src}
        alt={illustration.alt}
        width={illustration.width}
        height={illustration.height}
        sizes="(max-width: 760px) 90vw, 720px"
        className="textbook-image"
      />
      <figcaption>
        <p>{illustration.caption}</p>
        <div>
          <span>{illustration.credit}</span>
          <a
            href={illustration.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Original
            <ArrowUpRight size={11} />
          </a>
          <a
            href={illustration.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {illustration.license}
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
function VisualGallery() {
  const topics = ["field", "capacitor", "magnets"];
  return (
    <section className="visual-gallery">
      <div className="section-heading">
        <div>
          <span className="eyebrow">VISUELLES VERSTÄNDNIS</span>
          <h2>Sehen Sie, was unsichtbar ist.</h2>
        </div>
        <a className="text-link" href="#/sources">
          OpenStax-Illustrationen
          <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="visual-grid">
        {topics.map((id) => {
          const image = illustrations[id];
          return (
            <article className="visual-card" key={id}>
              <a href={`#/lesson/${id}`}>
                <div className="visual-image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 600px) 90vw, 360px"
                  />
                </div>
                <div className="visual-card-title">
                  <span>
                    <small>
                      THEMA {String(getLesson(id).number).padStart(2, "0")}
                    </small>
                    <strong>{getLesson(id).title}</strong>
                  </span>
                  <ArrowUpRight size={17} />
                </div>
              </a>
              <div className="visual-credit">
                OpenStax / Rice University ·{" "}
                <a
                  href={image.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC BY 4.0
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
function Essentials() {
  return (
    <>
      <PageIntro
        eyebrow="FÜR DEN ALLERERSTEN SCHRITT"
        title="Das Komplexe beginnt mit dem Einfachen."
        text="Kurze Erklärungen vor einem großen Lehrbuch. Hier können Sie in wenigen Minuten herausfinden, wie sich Strom von Spannung unterscheidet, woher die Felder kommen und was der Stromzähler anzeigt."
      />
      <section className="origin-card">
        <div className="eyebrow">
          <Zap size={16} />
          WOHER KOMMT DER STROM?
        </div>
        <h2>
          Die Quelle gibt Energie.
          <br />
          Es sind bereits Ladungen im Kabel vorhanden.
        </h2>
        <p>
          Ein Metalldraht verfügt bereits vor dem Einschalten über bewegliche
          Elektronen. Sie bewegen sich ungeordnet; dabei gibt es noch keinen
          gerichteten Ladungstransport. Aufgrund chemischer Reaktionen bleibt in
          der Batterie eine Potentialdifferenz bestehen. Sobald der Stromkreis
          geschlossen ist, entsteht ein elektrisches Feld, das die Elektronen
          langsam driften lässt. Der Generator nutzt mechanische Energie
          anstelle chemischer Energie.
        </p>
        <div className="origin-steps">
          {[
            {
              symbol: "U",
              title: "Quelle",
              text: "Hält Spannung aufrecht und überträgt Energie.",
            },
            {
              symbol: "E",
              title: "Feld",
              text: "Wirkt auf Ladungen in einem leitenden Pfad.",
            },
            {
              symbol: "I",
              title: "Strom",
              text: "Ladungen bewegen sich entlang eines geschlossenen Kreislaufs gerichtet.",
            },
            {
              symbol: "P",
              title: "Leistung",
              text: "Das Gerät wandelt Energie in Licht, Wärme oder Bewegung um.",
            },
          ].map((s, i) => (
            <div key={s.symbol}>
              <span>{s.symbol}</span>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
              {i < 3 && <ArrowRight size={14} />}
            </div>
          ))}
        </div>
        <div className="origin-note">
          <Lightbulb size={19} />
          <p>
            Die Lampe „frisst“ keine Elektronen, sondern wandelt Energie um. In
            einem normalen Stromkreis bleibt die Ladung erhalten. Das Feld baut
            sich schnell auf, obwohl die Elektronen selbst langsam driften.
          </p>
        </div>
        <a className="text-link" href="#/lesson/current">
          Im Detail verstehen – die erste Lektion
          <ArrowRight size={15} />
        </a>
      </section>
      <div className="section-heading concepts-heading">
        <div>
          <span className="eyebrow">ZWÖLF WICHTIGE GRUNDBEGRIFFE</span>
          <h2>Wörterbuch ohne unnötige Komplexität.</h2>
        </div>
      </div>
      <div className="concepts-grid">
        {quickConcepts.map((c, i) => (
          <Reveal
            as="article"
            delay={(i % 2) * 0.06}
            className="concept-card"
            key={c.id}
          >
            <div className="concept-top">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span>{c.symbol}</span>
            </div>
            <h2>{c.title}</h2>
            <span className="concept-german">
              {c.german} · {c.unit}
            </span>
            <p className="concept-definition">{c.short}</p>
            <details>
              <summary>
                Stellen wir uns das anhand eines Beispiels vor
                <ChevronDown size={14} />
              </summary>
              <p>{c.analogy}</p>
            </details>
            <div className="concept-pitfall">
              <Lightbulb size={15} />
              <p>{c.pitfall}</p>
            </div>
            <a className="text-link" href={`#/lesson/${c.lessonId}`}>
              Gehen Sie zur detaillierten Lektion
              <ArrowUpRight size={14} />
            </a>
          </Reveal>
        ))}
      </div>
      <section className="first-calculations">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Versuchen wir es zu lösen</span>
            <h2>Die Formel ist eine Kurzgeschichte.</h2>
          </div>
        </div>
        <div className="starter-example">
          <span>01</span>
          <div>
            <h3>Wie finde ich die Stromstärke?</h3>
            <p>
              In 10 s fließen 20 C Ladung durch den Draht. Zuerst schreiben wir:
              Q = 20 C, t = 10 s. Wir wählen I = Q/t. Wir ersetzen Zahlen durch
              Einheiten: I = 20 C / 10 s = 2 A.
            </p>
            <strong>I = Q / t = 20 / 10 = 2 À</strong>
            <small>
              Überprüfen Sie: 2 Ampere sind 2 Coulomb pro Sekunde. In 10
              Sekunden erhalten Sie 20 Coulomb.
            </small>
            <a className="text-link" href="#/lesson/current">
              Practice in the lesson
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div className="starter-example">
          <span>02</span>
          <div>
            <h3>Wie viel Energie verbraucht das Gerät?</h3>
            <p>
              Die Leistung des Gerätes beträgt 1.500 W, die Betriebszeit beträgt
              20 Minuten. Rechnen wir in praktische Einheiten um: 1.500 W = 1,5
              kW, 20 Minuten = ⅓ Stunde. Multiplizieren Sie Leistung mit Zeit.
            </p>
            <strong>W = P t = 1.5 ⅓ = 0.5 kWh</strong>
            <small>
              In Joule: 1.500 W · 1.200 s = 1.800.000 J. Ein Ergebnis, zwei
              Energieeinheiten.
            </small>
            <a className="text-link" href="#/lesson/energy">
              Mehr Beispiele und Lieferungen
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
      <div className="essentials-next">
        <h2>Jetzt haben die Worte eine Bedeutung.</h2>
        <p>
          Jede Lektion enthält eine ausführlichere Erklärung, Diagramme, einen
          Simulator und fünf Fragen – einschließlich Rechenaufgaben.
        </p>
        <a className="button button-dark" href="#/lesson/current">
          Beginnen Sie mit dem ersten Thema
          <ArrowRight size={17} />
        </a>
      </div>
    </>
  );
}

function ResetDialog({ onCancel, onConfirm }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
    };
  }, []);
  return (
    <dialog
      data-lenis-prevent
      ref={dialogRef}
      className="confirm-modal"
      aria-labelledby="reset-title"
      onCancel={onCancel}
      onClick={(event) => {
        if (event.target === event.currentTarget) onCancel();
      }}
    >
      <div onClick={(event) => event.stopPropagation()}>
        <span className="lock-circle">
          <ShieldCheck size={28} />
        </span>
        <h2 id="reset-title">Alle Fortschritte löschen?</h2>
        <p>
          Daten können nur aus einer heruntergeladenen Kopie wiederhergestellt
          werden. Stellen Sie sicher, dass Sie alles speichern, was Sie
          brauchen.
        </p>
        <div className="button-row">
          <button
            autoFocus
            className="button button-outline"
            onClick={onCancel}
          >
            Speichern Sie meinen Fortschritt
          </button>
          <button className="button button-danger" onClick={onConfirm}>
            Daten löschen
          </button>
        </div>
      </div>
    </dialog>
  );
}

function RegisterDialog({ profile, onClose, onSave }) {
  const dialogRef = useRef(null);
  const [name, setName] = useState(profile?.name || "");
  const [confirmLocal, setConfirmLocal] = useState(false);
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
    };
  }, []);
  function submit(e) {
    e.preventDefault();
    if (!name || !confirmLocal) return;
    onSave(name);
  }
  return (
    <dialog
      data-lenis-prevent
      ref={dialogRef}
      className="confirm-modal"
      aria-labelledby="register-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div onClick={(event) => event.stopPropagation()}>
        <span className="lock-circle">
          <Sparkles size={28} />
        </span>
        <h2 id="register-title">Registrierung (lokal)</h2>
        <p>
          Geben Sie Ihren Namen ein. Ihre Daten werden nur lokal im Browser
          gespeichert und nicht an einen Server gesendet.
        </p>
        <form onSubmit={submit}>
          <label htmlFor="register-name">Name</label>
          <input
            id="register-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={32}
            required
          />
          <label className="checkbox">
            <input
              type="checkbox"
              checked={confirmLocal}
              onChange={(e) => setConfirmLocal(e.target.checked)}
            />
            Ich bestätige, dass meine Daten nur lokal gespeichert werden und
            nicht an einen Server gesendet werden.
          </label>
          <div className="button-row">
            <button
              type="button"
              className="button button-outline"
              onClick={onClose}
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="button button-dark"
              disabled={!name || !confirmLocal}
            >
              Registrieren
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
