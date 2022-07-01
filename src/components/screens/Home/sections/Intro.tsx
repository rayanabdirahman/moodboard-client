import React from "react";
import { Box, Container, Flex, Stack, VStack } from "@chakra-ui/react";
import Heading from "../../../UI/atoms/Typography/Heading";
import Display from "../../../UI/atoms/Typography/Display";
import Text from "../../../UI/atoms/Typography/Text";
import theme from "../../../../constants/theme";
import EarlyAccessInput from "../../../UI/organisms/EarlyAccessInput";

const Inro: React.FC = () => (
  <Box w="full" bg={theme.color.shades.black} pt={20} pb={48}>
    <Container maxW="container.xl">
      <VStack textAlign="center">
        <VStack w="5xl">
          <Heading textSize="h4" color={theme.color.brand} textWeight="normal">
            Social shopping marketplace
          </Heading>
          <Display as="h1" textSize="d1" styleType="light">
            A place to shop and discover brands with friends
          </Display>
          <Text styleType="light" textSize="p3">
            Shop your favourite stores in one place. Get notified when we
            launch.
          </Text>
        </VStack>
        <EarlyAccessInput />
      </VStack>
    </Container>
  </Box>
);

export default Inro;
