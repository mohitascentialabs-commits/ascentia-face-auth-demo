/**
 * Harness-only tokens — dashboard primary / secondary on a white host page.
 * Not part of the SDK public API.
 */
export const BRAND = {
  primary: "#00aeef",
  secondary: "#0b1f33",
  background: "#ffffff",
  text: "#0b1f33",
  border: "#d5dbe3",
} as const;

export const BRAND_DERIVED = {
  primaryHover: "#0096cc",
  primaryTint: "#e6f7fd",
  secondaryTint: "#eef3f8",
  textMuted: "#5c6778",
  textSubtle: "#7b8796",
  panel: "#ffffff",
  overlayBackdrop: "rgba(11, 31, 51, 0.52)",
  focusRing: "rgba(0, 174, 239, 0.28)",
  panelShadow: "0 18px 44px rgba(11, 31, 51, 0.08)",
  fontFamily:
    '"IBM Plex Sans", "Segoe UI", system-ui, -apple-system, sans-serif',
} as const;
