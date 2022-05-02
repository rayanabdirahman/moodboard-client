import React from "react";
import clsx from "clsx";
import * as styles from "./styles";
import * as btnstyles from "../Button/styles";
import { default as NextLink } from "next/link";

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  type?: "link" | "button";
};

const Link: React.FC<Props> = ({ children, type = "link", href }) => {
  const classname = clsx(
    type === "button" ? [btnstyles.base, btnstyles.primary] : styles.link
  );

  return (
    <NextLink href={href as any}>
      <a className={classname}>{children}</a>
    </NextLink>
  );
};

export default Link;
