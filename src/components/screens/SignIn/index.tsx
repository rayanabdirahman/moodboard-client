import React from "react";
import { Box, Flex, HStack, Input, SimpleGrid, Stack } from "@chakra-ui/react";
import AuthLayout from "../../UI/layouts/AuthLayout";
import Display from "../../UI/atoms/Typography/Display";
import Heading from "../../UI/atoms/Typography/Heading";
import Text from "../../UI/atoms/Typography/Text";
import Button from "../../UI/atoms/Button";

const SignInScreen: React.FC = () => {
  return (
    <AuthLayout>
      <Flex justifyContent="center" pt={20} pb={6}>
        <Stack width="372px" spacing={6}>
          <Stack>
            <Stack
              spacing={8}
              borderBottom="2px"
              borderBottomColor="gray.100"
              pb={6}
              mb={6}
            >
              <Stack>
                <Heading textSize="h3" textWeight="bold">
                  Sign In
                </Heading>
                <Text>Get started on moodboard</Text>
              </Stack>

              <Button styleType="tertiary">Continue with Google</Button>
            </Stack>

            <form>
              <Stack spacing={6}>
                <Stack spacing={4}>
                  <Input
                    placeholder="Email address"
                    size="md"
                    borderRadius={4}
                  />
                  <Input placeholder="Password" size="md" borderRadius={4} />
                </Stack>
                <Button styleType="secondary">Sign in</Button>
              </Stack>
            </form>
          </Stack>

          <Stack spacing={4} textAlign="center">
            <Text textWeight="semibold">Forgot password?</Text>
            <Text textWeight="semibold">Dont have an account? Sign up</Text>
          </Stack>
        </Stack>
      </Flex>
    </AuthLayout>
  );
};

export default SignInScreen;
