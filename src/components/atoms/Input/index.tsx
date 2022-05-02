import React from "react";
import clsx from "clsx";
import * as styles from "./styles";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  errorMessage?: string;
};

const Input: React.FC<Props> = ({ errorMessage, ...props }) => {
  const classname = clsx(styles.base, props.className, [
    errorMessage && [styles.error],
  ]);

  return (
    <div className={styles.container}>
      <input {...props} className={classname} />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
