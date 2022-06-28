import {
  Flex,
  Heading,
  Stack,
  Text,
  Input,
  InputGroup,
  Button,
  InputRightElement,
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
          Shop your favourite stores in one place. Get notified when we launch.
        </Text>
      </Stack>

      <Stack textAlign="center" spacing="2">
        <InputGroup size="md" width="600px" mt="40px">
          <Input
            pr="4.5rem"
            placeholder="Enter your email address"
            size="lg"
            bg="white"
          />
          <InputRightElement width="auto" mr="2">
            <Button
              onClick={() => console.log("button clicked")}
              size="md"
              mt="2"
              bg="brand.500"
              color="white"
            >
              Get early access
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text fontSize="16px" color="gray.400">
          Notify me when you launch
        </Text>
      </Stack>
    </Flex>
  );
};

export default HomeScreen;
