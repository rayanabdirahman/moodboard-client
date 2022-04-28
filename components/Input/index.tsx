import React from "react";

type Props = React.HTMLProps<HTMLInputElement> & {
  errorMessage?: string;
};

const Input: React.FC<Props> = ({ errorMessage, ...props }) => (
  <div className="flex flex-col w-full mb-4">
    <input className="bg-gray-100 rounded py-2 px-4" {...props} />
    {errorMessage && (
      <span className="text-sm text-red-600">{errorMessage}</span>
    )}
  </div>
);

export default Input;
