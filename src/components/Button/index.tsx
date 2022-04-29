import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<Props> = ({ children, ...props }) => (
  <button
    className="bg-red-600 disabled:bg-gray-200 hover:bg-red-700 text-white disabled:text-gray-500 rounded w-full py-2 mb-4 disabled:cursor-not-allowed"
    {...props}
  >
    {children}
  </button>
);

export default Button;
