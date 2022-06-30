import React from "react";
import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import Text from "../../../UI/atoms/Typography/Text";
import theme from "../../../../constants/theme";

const Footer: React.FC = () => (
  <Box
    w="full"
    bg={theme.color.shades.white}
    py={10}
    borderTop="1px"
    borderColor="gray.100"
  >
    <Container maxW="container.xl">
      <HStack justifyContent="flex-end" alignItems="flex-end">
        <Text> Made with ❤️ in London</Text>
      </HStack>
    </Container>
  </Box>
);

export default Footer;
