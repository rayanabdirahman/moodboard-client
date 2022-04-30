import React from "react";
import clsx from "clsx";
import * as styles from "./styles";

export type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary";
};

const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const classname = clsx(styles.base, [
    props.disabled
      ? styles.disabled
      : [variant === "primary" && [styles.primary]],
  ]);

  return (
    <button {...props} className={classname}>
      {children}
    </button>
  );
};

export default Button;
