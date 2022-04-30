// const Font = {
//   size: {
//     sm: "text-sm" /* 14px */,
//   },
//   color: {
//     white: "text-white",
//     primary: "text-neutral-900",
//     secondary: "text-gray-500",
//     error: "text-red-500",
//     disabled: "disabled:text-gray-500",
//   },
// };

import Colors from "./Colors";

const Font = {
  size: {
    sm: "text-sm" /* 14px */,
  },
  color: {
    white: `text-${Colors.palette.white}`,
    primary: `text-${Colors.palette.black}`,
    secondary: `text-${Colors.palette.gray}`,
    error: `text-${Colors.palette.error}`,
    disabled: `disabled:text-${Colors.palette.gray}`,
  },
};

export default Font;
