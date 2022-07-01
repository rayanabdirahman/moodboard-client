import { Box, Container, HStack, Image } from "@chakra-ui/react";
import React from "react";
import theme from "../../../../constants/theme";
import Button from "../../atoms/Button";
import Text from "../../atoms/Typography/Text";

const Navbar: React.FC = () => (
  <Box w="full" bg="black" py={4}>
    <Container maxW="container.xl">
      <HStack justifyContent="space-between">
        <Image src="/logo-light.svg" height="48px" alt="logo"></Image>
        <HStack spacing={6}>
          {/* <Text color={theme.color.shades.white}>Features</Text> */}
          {/* <Text color={theme.color.shades.white}>Shopping</Text>
          <Text color={theme.color.shades.white}>Social</Text> */}
          <Button size="sm">Get early access</Button>
        </HStack>
      </HStack>
    </Container>
  </Box>
);

export default Navbar;
