import { atom } from "recoil";

type ViewType =
  | "signIn"
  | "signUp"
  | "addBirthday"
  | "createUsername"
  | "forgotPassword";

export enum AuthModalViewEnum {
  SIGN_IN = "signIn",
  SIGN_UP = "signUp",
  ADD_BIRTHDAY = "addBirthday",
  CREATE_USERNAME = "createUsername",
  FORGOT_PASSWORD = "forgotPassword",
}

export interface AuthModelState {
  isOpen: boolean;
  view: ViewType;
}

const defaultState: AuthModelState = {
  isOpen: false,
  view: AuthModalViewEnum.SIGN_UP,
};

export const authModelState = atom<AuthModelState>({
  key: "authModelState",
  default: defaultState,
});
