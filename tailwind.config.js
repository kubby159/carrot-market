module.exports = {
  // content (어디에서 tailwind를 사용할 것인가)
  // 페이지(혹은 components)에서 모든 폴더(**), 모든 파일(*)에 적용할 것이며, 확장자명은 js or jsx or ts or tsx
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
