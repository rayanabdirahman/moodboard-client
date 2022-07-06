import React from "react";
import { Stack, HStack, Input } from "@chakra-ui/react";
import Button from "../../../atoms/Button";

const SignUpInputs: React.FC = () => {
  return (
    <Stack pb={6}>
      <Stack mb={6} pb={6} borderBottom="2px" borderBottomColor="gray.100">
        <Button styleType="tertiary">Continue with Google</Button>
      </Stack>

      <form>
        <Stack spacing={6}>
          <HStack spacing={4}>
            <Input placeholder="First name" size="md" borderRadius={4} />
            <Input placeholder="Last name" size="md" borderRadius={4} />
          </HStack>
          <Stack spacing={4}>
            <Input placeholder="Email address" size="md" borderRadius={4} />
            <Input placeholder="Password" size="md" borderRadius={4} />
          </Stack>
          <Button styleType="secondary">Continue to create account</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default SignUpInputs;
