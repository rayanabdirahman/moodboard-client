import React from "react";
import { Stack, HStack, Input } from "@chakra-ui/react";
import Button from "../../../atoms/Button";

const CreateUsernameInputs: React.FC = () => {
  return (
    <Stack pb={6}>
      <form>
        <Stack spacing={6}>
          <Stack spacing={4}>
            <Input placeholder="Username" size="md" borderRadius={4} />
          </Stack>
          <Button styleType="secondary">Sign up</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreateUsernameInputs;
