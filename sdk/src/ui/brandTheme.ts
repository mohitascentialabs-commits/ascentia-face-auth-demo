import type { CSSProperties } from "react";

/** Brand palette — shared across SDK overlays and test harness. */
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

/** Shared overlay shell styles (Register, NotEnrolledChoice, etc.). */
export const overlayShellStyles: Record<string, CSSProperties> = {
  root: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: BRAND_DERIVED.overlayBackdrop,
    padding: 16,
    boxSizing: "border-box",
    fontFamily: BRAND_DERIVED.fontFamily,
  },
  panel: {
    background: BRAND_DERIVED.panel,
    color: BRAND.text,
    borderRadius: 16,
    border: `1px solid ${BRAND.border}`,
    boxShadow: BRAND_DERIVED.panelShadow,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  eyebrow: {
    margin: 0,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: BRAND.primary,
  },
  title: {
    margin: "6px 0 0",
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 1.25,
    color: BRAND.text,
  },
  subtitle: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.55,
    color: BRAND_DERIVED.textMuted,
  },
  footer: {
    margin: "2px 0 0",
    fontSize: 12,
    lineHeight: 1.5,
    color: BRAND_DERIVED.textSubtle,
    borderTop: `1px solid ${BRAND.background}`,
    paddingTop: 14,
  },
};

/** Toast variant colors aligned with brand palette. */
export const FEEDBACK_TOAST_PALETTE = {
  success: {
    accent: BRAND.primary,
    bg: BRAND_DERIVED.primaryTint,
    border: "#9adcf5",
    icon: "✓",
  },
  warning: {
    accent: BRAND.secondary,
    bg: BRAND_DERIVED.secondaryTint,
    border: "#c5d0dc",
    icon: "!",
  },
  error: {
    accent: BRAND.secondary,
    bg: BRAND_DERIVED.secondaryTint,
    border: "#c5d0dc",
    icon: "✕",
  },
  info: {
    accent: BRAND.primary,
    bg: BRAND.background,
    border: BRAND.border,
    icon: "i",
  },
} as const;
