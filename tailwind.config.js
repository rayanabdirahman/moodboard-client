module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/containers/**/*.{ts,tsx}",
    "./src/layouts/**/*.{ts,tsx}",
    "./src/styles/theme/*.{ts,tsx}"
  ],
  theme: {
    extend: {},
    container: {
      screens: {
        lg: '1124px',
        xl: '1124px',
        "2xl": '1124px',
      }
    }
  },
  plugins: [],
}
