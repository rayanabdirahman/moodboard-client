import React from "react";
import clsx from "clsx";
import * as styles from "./styles";

type Props = React.HTMLProps<HTMLInputElement> & {
  errorMessage?: string;
};

const Input: React.FC<Props> = ({ errorMessage, ...props }) => {
  const classname = clsx(styles.base, [errorMessage && [styles.error]]);

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
