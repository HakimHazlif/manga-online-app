/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kufi: ["Noto Kufi Arabic", "Tajawal", "Almarai", "Arial", "sans-serif"],
        Tajawal: [
          "Tajawal",
          "Noto Kufi Arabic",
          "Almarai",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        "dark-blue-1": "#2c3e50",
        'dark-blue-transparent': '#2c3e50b7',
        'light-green-100': '#18bc9c',
        'light-green-50': '#c8fff4',
      },
      boxShadow: {
        'custom': '0 0 5px rgba(0,0,0,0.3)',
        '2': '0 5px 5px 5px rgba(0,67,101,0.08), 0 2px 6px 1px rgba(130,169,188,0.08)'
      },
      backgroundImage: {
        bgDownload: "url('assets/backgrounds/wallpapers.png')",
        luffy: "url('assets/backgrounds/luffy.png')",
        anime1: "url('assets/backgrounds/anime1.png')",
        goku: "url('assets/backgrounds/kid-goku.png')",
        yuji: "url('assets/backgrounds/yuji.png')",
        demonSlayer: "url('assets/backgrounds/Demon-Slayer.png')",
        animeGirl: "url('assets/backgrounds/anime.png')",
        gon: "url('assets/backgrounds/gon.png')",
        contactUs: "url('assests/backgrounds/contact-us.png')",
        formBg: "url('assets/backgrounds/form-background.png')",
      }
    },
  },
  plugins: [],
};
