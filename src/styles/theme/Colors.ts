// const palette = {
//   brand: "red-600",
//   darkbrand: "red-700",
//   black: "neutral-900",
//   white: "white",
//   gray: "gray-500",
//   lightgray: "gray-200",
// };

// const bg = {
//   // brand: "bg-red-600",
//   brand: `bg-${palette.brand}`,
//   darkbrand: "bg-red-700",
//   black: "bg-neutral-900",
//   white: "bg-white",
//   gray: "bg-gray-200",
//   lightgray: "bg-gray-100",
//   error: "bg-red-500",
//   disabled: "disabled:bg-gray-200",
// };

// const border = {
//   error: "border-red-500",
// };

// const Colors = {
//   palette,
//   bg,
//   border,
// };

const palette = {
  brand: "red-600",
  darkbrand: "red-700",
  black: "neutral-900",
  white: "white",
  gray: "gray-500",
  lightgray: "gray-200",
  xlightgray: "gray-100",
  error: "red-500",
};

const bg = {
  brand: `bg-${palette.brand}`,
  darkbrand: `bg-${palette.darkbrand}`,
  black: `bg-${palette.black}`,
  white: `bg-${palette.white}`,
  gray: `bg-${palette.lightgray}`,
  lightgray: `bg-${palette.xlightgray}`,
  error: `bg-${palette.error}`,
  disabled: `disabled:bg-${palette.lightgray}`,
};

const border = {
  error: `border-${palette.error}`,
};

const Colors = {
  palette,
  bg,
  border,
};

export default Colors;
