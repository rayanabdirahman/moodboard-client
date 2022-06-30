import React from "react";
import { Box, Container, Flex, Stack, VStack } from "@chakra-ui/react";
import Heading from "../../../UI/atoms/Typography/Heading";
import Display from "../../../UI/atoms/Typography/Display";
import Text from "../../../UI/atoms/Typography/Text";
import theme from "../../../../constants/theme";
import EarlyAccessInput from "../../../UI/organisms/EarlyAccessInput";

const Waitlist: React.FC = () => (
  <Box w="full" py={4} bg={theme.color.shades.white}>
    <Container maxW="container.xl" bg={theme.color.brand} py={20} rounded="xl">
      <VStack textAlign="center">
        <VStack maxW="4xl">
          <Display styleType="light">
            Everything about shopping can be better.
          </Display>
        </VStack>
        <EarlyAccessInput buttonType="secondary" />
      </VStack>
    </Container>
  </Box>
);

export default Waitlist;
