
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Impressionist palette
        impression: {
          blue: "#6BAED9",
          yellow: "#FFD166",
          green: "#7ECBA1",
          purple: "#9B87F5",
          pink: "#FEC6D6",
          orange: "#FFA07A",
          cream: "#FEF7CD",
        },
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
        "paint-float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        "paint-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "brush-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.1" },
          "50%": { opacity: "0.2" },
        },
        "spin-slow": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg) scale(1)", opacity: "0.03" },
          "50%": { transform: "translate(-50%, -50%) rotate(180deg) scale(1.1)", opacity: "0.05" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg) scale(1)", opacity: "0.03" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "paint-float": "paint-float 6s ease-in-out infinite",
        "paint-pulse": "paint-pulse 4s ease-in-out infinite",
        "brush-rotate": "brush-rotate 7s ease-in-out infinite",
        "float-slow": "float-slow 15s ease-in-out infinite",
        "float-reverse": "float-reverse 18s ease-in-out infinite",
        "pulse-slow": "pulse-slow 10s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
      backgroundImage: {
        "gradient-canvas": "linear-gradient(to right, #accbee 0%, #e7f0fd 100%)",
        "gradient-sunset": "linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)",
        "gradient-purple": "linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)",
        "gradient-yellow": "linear-gradient(184.1deg, rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2%)",
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
        'playfair': ['Playfair Display', 'serif'],
        'source-sans': ['Source Sans 3', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
