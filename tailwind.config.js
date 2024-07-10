/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#03AC6B", // Primary color
          secondary: "#333433", // Dark grey
          accent: "#FFC107", // Amber
          neutral: "#FFFFFF", // White
          "base-100": "#F9FAFB", // Light grey
          info: "#3B82F6", // Blue
          success: "#10B981", // Green
          warning: "#F59E0B", // Orange
          error: "#EF4444", // Red
          gray: "#00000099", // Default text color for light mode
          GunmetalGray: "#22252C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
