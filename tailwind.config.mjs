/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // ADEN specific colors
        aden: {
          primary: "hsl(35 75% 52%)",
          "primary-foreground": "hsl(0 0% 100%)",
          dark: "hsl(228 21% 5%)",
          "dark-card": "hsl(38 12% 17%)",
          "text-primary": "hsl(0 0% 100%)",
          "text-secondary": "hsl(215 14% 57%)",
          "text-muted": "hsl(215 11% 44%)",
          border: "hsl(0 0% 100% / 0.12)",
          glass: "hsl(0 0% 0% / 0.04)",
        },
        // Standard colors for compatibility
        primary: "hsl(35 75% 52%)",
        background: "hsl(228 21% 5%)",
        foreground: "hsl(0 0% 100%)",
      },
      fontFamily: {
        pretendard: ["Pretendard", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
        epilogue: ["Epilogue", "system-ui", "sans-serif"],
        nunito: ["Nunito", "system-ui", "sans-serif"],
        prompt: ["Prompt", "system-ui", "sans-serif"],
        bitter: ["Bitter", "serif"],
        poppins: ["Poppins", "system-ui", "sans-serif"],
        urbanist: ["Urbanist", "system-ui", "sans-serif"],
        play: ["Play", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.40) 100%)",
        "gradient-glass":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)",
      },
    },
  },
  plugins: [],
};
