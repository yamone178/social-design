/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
     
      extend: {
       
        fontFamily:{
          sans: ["Poppins", "sans-serif"],  
          },
          screens: {
            xs: "375px",
            sm: "480px",
            md: "744px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
          },
        colors: {

            primary: "#2C3E50", 
            green_text: "rgba(0, 151, 167, 1)",

            extra_light: "rgba(126, 126, 141, 1)",
            secondary: "rgba(44, 62, 80, 1)",
            border: "#e5e7eb",
            border_light: "rgba(236, 241, 244, 1)",
            input: "#d1d5db",
            ring: "#93c5fd",
            light_gray: "rgba(0, 0, 0, 0.49)",
            alert_bg: "rgba(58, 163, 159, 0.13)",
            red: "#E14B4B",
          
        },
        
      
      },
    },
  }
  
  