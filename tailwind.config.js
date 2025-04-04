
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
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
        // Custom impressionist-inspired color palette
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
      fontFamily: {
        'dancing': ['Dancing Script', 'Caveat', 'cursive'],
        'playfair': ['Playfair Display', 'serif'],
        'source-sans': ['Source Sans 3', 'Nunito', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
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
          "0%, 100%": { opacity: 0.15, transform: "scale(1)" },
          "50%": { opacity: 0.25, transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float-slow 15s ease-in-out infinite",
        "float-reverse": "float-reverse 18s ease-in-out infinite",
        "pulse-slow": "pulse-slow 10s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-sunset': 'linear-gradient(to right, rgba(255, 209, 102, 0.6), rgba(254, 198, 214, 0.6), rgba(107, 174, 217, 0.6))',
        'gradient-canvas': 'linear-gradient(to right, rgba(155, 135, 245, 0.7), rgba(254, 198, 214, 0.7))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
