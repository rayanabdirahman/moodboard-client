import React from "react";
import { Box, Flex, HStack, Input, SimpleGrid, Stack } from "@chakra-ui/react";
import AuthLayout from "../../UI/layouts/AuthLayout";
import Display from "../../UI/atoms/Typography/Display";
import Heading from "../../UI/atoms/Typography/Heading";
import Text from "../../UI/atoms/Typography/Text";
import Button from "../../UI/atoms/Button";
import SignUpInputs from "../../UI/organisms/AuthModal/components/SignUpInputs";

const SignUpScreen: React.FC = () => {
  return (
    <AuthLayout>
      <Flex justifyContent="center" pt={20} pb={6}>
        <Stack spacing={6}>
          <Stack>
            <Heading textSize="h3" textWeight="bold">
              Sign up
            </Heading>
            <Text>Get started on moodboard</Text>
          </Stack>
          <SignUpInputs />
        </Stack>
      </Flex>
    </AuthLayout>
  );
};

export default SignUpScreen;
