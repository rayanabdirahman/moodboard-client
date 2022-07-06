import React from "react";
import {
  HStack,
  Input,
  // Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import {
  AuthModalViewEnum,
  authModelState,
} from "../../../../state/atoms/authModalAtom";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Typography/Heading";
import Text from "../../atoms/Typography/Text";
import SignUpInputs from "./components/SignUpInputs";
import ForgotPasswordInputs from "./components/ForgotPasswordInputs";
import CreateUsernameInputs from "./components/CreateUsernameInputs";
import AddBirthdayInputs from "./components/AddBirthdayInputs";

const MAPPED_AUTH_VIEW_HEADER: {
  [key: string]: { heading: string; subHeading: string };
} = {
  [AuthModalViewEnum.SIGN_UP]: {
    heading: "Sign Up",
    subHeading: "Get started on moodboard",
  },
  [AuthModalViewEnum.FORGOT_PASSWORD]: {
    heading: "Forgot password?",
    subHeading: "Enter your emaill address to receive a reset link",
  },
  [AuthModalViewEnum.CREATE_USERNAME]: {
    heading: "Create username",
    subHeading: "You can always change this later.",
  },
  [AuthModalViewEnum.ADD_BIRTHDAY]: {
    heading: "When's your birthday?",
    subHeading: "Your birthday wont be shown publicly.",
  },
};

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModelState);

  const onClose = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <Modal isOpen={modalState.isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={4}>
        <ModalHeader>
          <Stack>
            <Heading textSize="h4" textWeight="bold">
              {MAPPED_AUTH_VIEW_HEADER[modalState.view].heading}
            </Heading>
            <Text>{MAPPED_AUTH_VIEW_HEADER[modalState.view].subHeading}</Text>
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {modalState.view === AuthModalViewEnum.SIGN_UP && <SignUpInputs />}
          {modalState.view === AuthModalViewEnum.FORGOT_PASSWORD && (
            <ForgotPasswordInputs />
          )}
          {modalState.view === AuthModalViewEnum.ADD_BIRTHDAY && (
            <AddBirthdayInputs />
          )}
          {modalState.view === AuthModalViewEnum.CREATE_USERNAME && (
            <CreateUsernameInputs />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
