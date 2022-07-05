import { Box, Container, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import theme from "../../../../constants/theme";
import Button from "../../atoms/Button";
import Text from "../../atoms/Typography/Text";

// const Navbar: React.FC = () => (
//   <Box w="full" bg="black" py={4}>
//     <Container maxW="container.xl">
//       <HStack justifyContent="space-between">
//         <Image src="/logo-light.svg" height="48px" alt="logo"></Image>
//         <HStack spacing={6}>
//           {/* <Text color={theme.color.shades.white}>Features</Text> */}
//           {/* <Text color={theme.color.shades.white}>Shopping</Text>
//           <Text color={theme.color.shades.white}>Social</Text> */}
//           <Button size="sm">Get early access</Button>
//         </HStack>
//       </HStack>
//     </Container>
//   </Box>
// );

const Navbar: React.FC = () => (
  <Box
    w="full"
    bg={theme.color.shades.white}
    borderBottom="1px"
    borderBottomColor="gray.100"
    py={7}
  >
    <Container maxW="container.xl">
      <HStack justifyContent="space-between">
        <Link href="/">
          <a>
            <Image src="/logo-text-dark.svg" height="18px" alt="logo"></Image>
          </a>
        </Link>
        <HStack spacing={6}>
          {/* <Text color={theme.color.shades.white}>Features</Text> */}
          {/* <Text color={theme.color.shades.white}>Shopping</Text>
          <Text color={theme.color.shades.white}>Social</Text> */}
          {/* <Button styleType="secondary" size="sm">
            Get early access
          </Button> */}
        </HStack>
      </HStack>
    </Container>
  </Box>
);

export default Navbar;
