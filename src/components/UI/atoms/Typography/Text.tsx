import React from "react";
import { Text as CUText, TextProps } from "@chakra-ui/react";
import theme from "../../../../constants/theme";

type Props = TextProps & {
  styleType?: "dark" | "light";
  textSize?: "p1" | "p2" | "p3";
  textWeight?: "normal" | "semibold" | "bold";
};

const Text: React.FC<Props> = ({
  styleType = "dark",
  textSize = "p2",
  textWeight = "normal",
  ...props
}) => {
  const color =
    styleType === "dark" ? theme.color.text.black : theme.color.text.gray_400;
  const size = textSize === "p1" ? "sm" : textSize === "p2" ? "md" : "lg";
  const lineHeight =
    textSize === "p1" ? "17px" : textSize === "p2" ? "19px" : "21.6px";
  const weight =
    textWeight === "bold"
      ? theme.font.weight.bold
      : textWeight === "semibold"
      ? theme.font.weight.semibold
      : theme.font.weight.normal;
  return (
    <CUText
      {...props}
      color={props.color || color}
      fontSize={size}
      lineHeight={lineHeight}
      fontWeight={weight}
    />
  );
};

export default Text;
