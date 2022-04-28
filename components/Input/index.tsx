import React from "react";

type Props = React.HTMLProps<HTMLInputElement>;

const Input: React.FC<Props> = (props) => (
  <input className="bg-gray-100 rounded w-full py-2 px-4 mb-4" {...props} />
);

export default Input;
