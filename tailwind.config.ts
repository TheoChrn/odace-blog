import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "var(--border)",

        background: "var(--background)",
        foreground: "var(--foreground)",
        tag: {
          DEFAULT: "var(--tag)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          darker: "var(--accent-darker)",
          darkest: "var(--accent-darkest)",
        },
      },
      gap: {
        small: "2.4rem",
        medium: "3.2rem",
      },
      padding: {
        small: "2.4rem",
        medium: "3.2rem",
      },
      margin: {
        small: "2.4rem",
        medium: "3.2rem",
      },
      fontSize: {
        xs: [
          "1.2rem",
          { lineHeight: "1.6rem", letterSpacing: "0.02rem", fontWeight: 400 },
        ],
        sm: [
          "1.4rem",
          { lineHeight: "2rem", letterSpacing: "0.02rem", fontWeight: 400 },
        ],
        base: [
          "1.6rem",
          { lineHeight: "2.4rem", letterSpacing: "0.02rem", fontWeight: 400 },
        ],
        lg: [
          "1.8rem",
          { lineHeight: "2.6rem", letterSpacing: "0.02rem", fontWeight: 500 },
        ],
        xl: [
          "2rem",
          { lineHeight: "2.8rem", letterSpacing: "0.02rem", fontWeight: 500 },
        ],
        "2xl": [
          "2.4rem",
          { lineHeight: "3.2rem", letterSpacing: "0.02rem", fontWeight: 600 },
        ],
        "3xl": [
          "3rem",
          { lineHeight: "3.6rem", letterSpacing: "0.02rem", fontWeight: 600 },
        ],
        "4xl": [
          "3.6rem",
          { lineHeight: "4.4rem", letterSpacing: "0.02rem", fontWeight: 700 },
        ],
        "5xl": [
          "4.8rem",
          { lineHeight: "5.2rem", letterSpacing: "0.02rem", fontWeight: 700 },
        ],
        "6xl": [
          "6rem",
          { lineHeight: "6.4rem", letterSpacing: "0.02rem", fontWeight: 700 },
        ],
        "7xl": [
          "7.2rem",
          { lineHeight: "8rem", letterSpacing: "0.02rem", fontWeight: 700 },
        ],
      },
      transitionDelay: {
        "100": "100ms",
        "200": "200ms",
        "300": "300ms",
        "350": "350ms",
        "400": "400ms",
        "450": "450ms",
        "500": "500ms",
        "550": "550ms",
        "600": "600ms",
        "700": "700ms",
        "750": "750ms",
        "800": "800ms",
        "900": "900ms",
        "1000": "1000ms",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-top": {
          from: { transform: "translateY(-.8rem)", opacity: "0" },
          to: { transform: "translateY(0%)", opacity: "1" },
        },
        "fade-in-left": {
          from: { transform: "translateX(-.9rem)", opacity: "0" },
          to: { transform: "translateX(0%)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
