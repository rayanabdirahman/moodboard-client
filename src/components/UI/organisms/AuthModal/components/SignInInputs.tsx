import React from "react";
import { Stack, Input } from "@chakra-ui/react";
import Button from "../../../atoms/Button";

const SignInInputs: React.FC = () => {
  return (
    <Stack pb={6}>
      <Stack mb={6} pb={6} borderBottom="2px" borderBottomColor="gray.100">
        <Button styleType="tertiary">Continue with Google</Button>
      </Stack>

      <form>
        <Stack spacing={6}>
          <Stack spacing={4}>
            <Input placeholder="Email address" size="md" borderRadius={4} />
            <Input placeholder="Password" size="md" borderRadius={4} />
          </Stack>
          <Button styleType="secondary">Sign in</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default SignInInputs;
