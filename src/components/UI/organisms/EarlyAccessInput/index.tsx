import React from "react";
import { Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import Button from "../../atoms/Button";
import Text from "../../atoms/Typography/Text";

const EarlyAccessInput: React.FC = () => {
  return (
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
  );
};

export default EarlyAccessInput;
