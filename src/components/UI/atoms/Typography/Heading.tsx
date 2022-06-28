import React from "react";
import { Heading as CUHeading, HeadingProps } from "@chakra-ui/react";

type Props = HeadingProps & {
  styleType?: "dark" | "light";
  textSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textWeight?: "semibold" | "bold" | "extrabold";
};

const Heading: React.FC<Props> = ({
  styleType = "dark",
  textSize,
  textWeight = "semibold",
  ...props
}) => {
  const color = styleType === "dark" ? "black.800" : "white";
  const size =
    textSize === "h1"
      ? "5xl"
      : textSize === "h2"
      ? "4xl"
      : textSize === "h3"
      ? "3xl"
      : textSize === "h4"
      ? "1.8125rem"
      : textSize === "h5"
      ? "2xl"
      : "xl";

  const lineHeight =
    textSize === "h1"
      ? "54px"
      : textSize === "h2"
      ? "47px"
      : textSize === "h3"
      ? "40px"
      : textSize === "h4"
      ? "34px"
      : textSize === "h5"
      ? "28px"
      : "23px";

  const weight =
    textWeight === "extrabold"
      ? "extrabold"
      : textWeight === "bold"
      ? "bold"
      : "semibold";
  return (
    <CUHeading
      {...props}
      color={props.color || color}
      fontSize={props.size || size}
      fontWeight={weight}
      letterSpacing="-4%"
      lineHeight={lineHeight}
    />
  );
};

export default Heading;
