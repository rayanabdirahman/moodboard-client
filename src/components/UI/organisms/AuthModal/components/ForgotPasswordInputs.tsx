import React from "react";
import { Stack, HStack, Input } from "@chakra-ui/react";
import Button from "../../../atoms/Button";

const ForgotPasswordInputs: React.FC = () => {
  return (
    <Stack pb={6}>
      <form>
        <Stack spacing={6}>
          <Stack spacing={4}>
            <Input placeholder="Email address" size="md" borderRadius={4} />
          </Stack>
          <Button styleType="secondary">Send reset link</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default ForgotPasswordInputs;
