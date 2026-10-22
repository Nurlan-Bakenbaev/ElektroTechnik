export const READER_KEY = "volt-reader:v1";
export const DEFAULT_READER = Object.freeze({ size: "standard", focus: false });

export function normalizeReaderPreferences(value) {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return { ...DEFAULT_READER };
  return {
    size: value.size === "large" ? "large" : "standard",
    focus: value.focus === true,
  };
}
