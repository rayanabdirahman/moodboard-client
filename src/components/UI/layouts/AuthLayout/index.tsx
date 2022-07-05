import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../../organisms/Navbar";

type Props = { children: React.ReactNode };

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">{children}</Container>
    </>
  );
};

export default AuthLayout;
