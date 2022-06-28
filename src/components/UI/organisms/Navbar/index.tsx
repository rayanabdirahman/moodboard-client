import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Button from "../../atoms/Button";

const Navbar: React.FC = () => (
  <Flex
    bg="black"
    height="76px"
    padding="16px 32px"
    alignItems="center"
    color="white"
    justifyContent="space-between"
  >
    <Flex>
      <Image src="/logo-light.svg" height="48px" alt="logo"></Image>
    </Flex>
    <Flex align="center">
      {/* <Text mr="4">Features</Text> */}
      <Button size="sm">Get early access</Button>
    </Flex>
  </Flex>
);

export default Navbar;
