import {
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import theme from "../../../constants/theme";
import Button from "../../UI/atoms/Button";
import Display from "../../UI/atoms/Typography/Display";
import Heading from "../../UI/atoms/Typography/Heading";
import Text from "../../UI/atoms/Typography/Text";

type Props = {};

const HomeScreen: React.FC<Props> = () => {
  return (
    <Flex bg="black" direction="column" alignItems="center" h="100vh">
      <Stack
        maxW="900px"
        textAlign="center"
        color={theme.color.shades.white}
        spacing="4"
        pt="56px"
      >
        <Heading textSize="h4" color={theme.color.brand}>
          Social shopping marketplace
        </Heading>
        <Display as="h1" styleType="light">
          A place to shop and discover brands with friends
        </Display>
        <Text styleType="light" textSize="p3">
          Shop your favourite stores in one place. Get notified when we launch.
        </Text>
      </Stack>

      <Stack textAlign="center" spacing="2">
        <InputGroup size="md" width="600px" mt="40px">
          <Input
            type="email"
            pr="4.5rem"
            placeholder="Enter your email address"
            size="lg"
            bg="white"
          />
          <InputRightElement width="auto" mr="2">
            <Button onClick={() => console.log("button clicked")} mt="2">
              Get early access
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text styleType="light">Notify me when you launch</Text>
      </Stack>
    </Flex>
  );
};

export default HomeScreen;
