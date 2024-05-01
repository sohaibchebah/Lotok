// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   mode: "jit",
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ["Poppins", "sans-serif"],
//       },
//       colors: {
//         "black-100": "#000",
//         "primary-red": {
//           DEFAULT: "#D72323",
//           100: "#D72323",
//         },
//         "secondary-gray": "#777777",
//         "light-pink": {
//           DEFAULT: "#F5EDED",
//           100: "#F5EDED",
//         },
//         "light-gray": {
//           DEFAULT: "#eee",
//           100: "#eee",
//         },
//         grey: "#EEEEEE",
//       },
// screens: {
//   1170: "1170px",
//   1300: "1300px",
//       },
//     },
//   },
//   plugins: [],
// };

/**
 @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./@/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
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
      backgroundImage: {
        'bgimage': "url('public/images/bgimage')",
        
      },
      fontFamily: {
        inter: ["Poppins", "sans-serif"],
      },
      colors: {
        "black-100": "#000",
        "primary-red": {
          DEFAULT: "#D72323",
          100: "#D72323",
        },
        "secondary-gray": "#777777",
        "light-pink": {
          DEFAULT: "#F5EDED",
          100: "#F5EDED",
        },
        "light-gray": {
          DEFAULT: "#eee",
          100: "#eee",
        },
        grey: "#EEEEEE",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#D72323",
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
      },
      screens: {
        1170: "1170px",
        1300: "1300px",
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
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
