module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: {
          50: "#fafbfc",
          300: "#d6e2ee",
          900: "#112211",
          "900_01": "#1c1b1f",
          "600_01": "#79747e",
          "900_9e": "#1122119e",
          "900_71": "#11221171",
          "900_87": "#11221187",
          "900_99": "#11221199",
          "900_a2": "#112211a2",
          "900_7e": "#1122117e",
        },
        black: { 900: "#000000" },
        teal: { 200: "#8dd3bb", "200_66": "#8dd3bb66" },
        red: { A100: "#ff8682" },
        blue_gray: { 100: "#cdeae1" },
      },
      boxShadow: {
        xs: "0px 0px  16px 0px #00000005",
        sm: "0px 4px  16px 0px #8dd3bb26",
        md: "0px 4px  16px 0px #1122110c",
        lg: "2px 4px  16px 0px #11221119",
      },
      fontFamily: { montserrat: "Montserrat", tradegothicltextended: "TradeGothic LT Extended" },
      opacity: { 0.75: 0.75, 0.25: 0.25, 0.5: 0.5, 0.7: 0.7, 0.8: 0.8, 0.4: 0.4 },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #00000000,#00000099)",
        gradient1: "linear-gradient(180deg, #00000000,#121212bf)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
