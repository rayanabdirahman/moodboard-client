import React from "react";
import { Button as CUButton, ButtonProps } from "@chakra-ui/react";

type Props = ButtonProps & { styleType?: "primary" | "secondary" | "tertiary" };

const Button: React.FC<Props> = ({ styleType = "primary", ...props }) => {
  const bg =
    styleType === "secondary"
      ? "black.800"
      : styleType === "tertiary"
      ? "white"
      : "brand.500";

  const color = styleType === "tertiary" ? "black.800" : "white";

  const statebg =
    styleType === "secondary"
      ? "black"
      : styleType === "tertiary"
      ? "gray.50"
      : "brand.400";

  return (
    <CUButton
      {...props}
      bg={bg}
      color={color}
      borderWidth={styleType === "tertiary" ? 2 : "inherit"}
      borderColor={styleType === "tertiary" ? "black.800" : "inherit"}
      _hover={{ bg: statebg }}
      _active={{ bg: statebg }}
    />
  );
};

export default Button;
