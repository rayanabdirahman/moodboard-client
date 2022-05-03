import React from 'react';
import clsx from 'clsx';
import * as styles from './styles';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'secondary';
  width?: 'full' | 'auto';
  htmlType?: 'submit' | 'reset' | 'button';
};

const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  htmlType = 'button',
  width = 'auto',
  ...props
}) => {
  const classname = clsx(styles.base, [
    props.disabled
      ? styles.disabled
      : [variant === 'primary' && [styles.primary]],
    { 'w-full': width === 'full' }
  ]);

  return (
    <button type={htmlType} {...props} className={classname}>
      {children}
    </button>
  );
};

export default Button;
