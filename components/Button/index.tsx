import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<Props> = ({ children, ...props }) => (
  <button
    className="bg-red-600 hover:bg-red-700 text-white rounded w-full py-2  mb-4"
    {...props}
  >
    {children}
  </button>
);

export default Button;
