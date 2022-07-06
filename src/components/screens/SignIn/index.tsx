import React from "react";
import {
  Box,
  Flex,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Button as CUButton,
} from "@chakra-ui/react";
import AuthLayout from "../../UI/layouts/AuthLayout";
import Display from "../../UI/atoms/Typography/Display";
import Heading from "../../UI/atoms/Typography/Heading";
import Text from "../../UI/atoms/Typography/Text";
import Button from "../../UI/atoms/Button";
import theme from "../../../constants/theme";
import { useSetRecoilState } from "recoil";
import { authModelState } from "../../../state/atoms/authModalAtom";
import AuthModal from "../../UI/organisms/AuthModal";
import SignInInputs from "../../UI/organisms/AuthModal/components/SignInInputs";

const SignInScreen: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModelState);
  return (
    <>
      <AuthModal />
      <AuthLayout>
        <Flex justifyContent="center" pt={20} pb={6}>
          <Stack width="372px">
            <Stack spacing={6}>
              <Stack>
                <Heading textSize="h3" textWeight="bold">
                  Sign in
                </Heading>
                <Text>Welcome back to moodboard</Text>
              </Stack>
              <SignInInputs />
            </Stack>

            <Stack spacing={4} textAlign="center">
              <CUButton
                color={theme.color.text.black}
                variant="link"
                onClick={() =>
                  setAuthModalState({ isOpen: true, view: "forgotPassword" })
                }
              >
                Forgot password?
              </CUButton>
              <CUButton
                color={theme.color.text.black}
                variant="link"
                onClick={() =>
                  setAuthModalState({ isOpen: true, view: "signUp" })
                }
              >
                Dont have an account? Sign up
              </CUButton>
            </Stack>
          </Stack>
        </Flex>
      </AuthLayout>
    </>
  );
};

export default SignInScreen;
