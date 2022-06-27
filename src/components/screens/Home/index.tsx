import {
  Flex,
  Heading,
  Stack,
  Text,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const HomeScreen: React.FC<Props> = () => {
  return (
    <Flex bg="black" direction="column" alignItems="center" h="100vh">
      <Stack
        maxW="900px"
        textAlign="center"
        color="white"
        spacing="4"
        pt="56px"
      >
        <Heading size="lg" color="brand.500" fontWeight="normal">
          Social shopping marketplace
        </Heading>
        <Heading color="white" size="3xl" letterSpacing="-4%" lineHeight="80px">
          A place to shop and discover brands with friends
        </Heading>
        <Text fontSize="18px" color="gray.400">
          Shop your favourite stores in one place
        </Text>
      </Stack>

      <InputGroup size="md" width="600px" mt="40px">
        <Input
          pr="4.5rem"
          placeholder="Enter your email address"
          size="lg"
          bg="white"
        />

        <InputRightElement width="auto">
          <Button
            onClick={() => console.log("button clicked")}
            size="lg"
            mt="2"
            bg="brand.500"
            color="white"
            borderTopLeftRadius="0"
            borderBottomLeftRadius="0"
          >
            Get early access
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default HomeScreen;
