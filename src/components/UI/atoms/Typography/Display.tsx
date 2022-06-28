import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

type Props = HeadingProps & {
  styleType?: "dark" | "light";
  textSize?: "d1" | "d2";
  textWeight?: "semibold" | "bold" | "extrabold";
};

const Display: React.FC<Props> = ({
  styleType = "dark",
  textSize = "d2",
  textWeight = "semibold",
  ...props
}) => {
  const color = styleType === "dark" ? "black.800" : "white";
  const size = textSize === "d1" ? "4xl" : "3xl";
  const lineHeight = textSize === "d1" ? "80px" : "72px";
  const weight =
    textWeight === "extrabold"
      ? "extrabold"
      : textWeight === "bold"
      ? "bold"
      : "semibold";
  return (
    <Heading
      {...props}
      color={props.color || color}
      size={props.size || size}
      fontWeight={weight}
      letterSpacing="-4%"
      lineHeight={lineHeight}
    />
  );
};

export default Display;
