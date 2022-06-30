import {
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import theme from "../../../constants/theme";
import Button from "../../UI/atoms/Button";
import Display from "../../UI/atoms/Typography/Display";
import Heading from "../../UI/atoms/Typography/Heading";
import Text from "../../UI/atoms/Typography/Text";
import SocialFeatures from "./sections/SocialFeatures";
import Intro from "./sections/Intro";
import SellingPoints from "./sections/SellingPoints";
import Waitlist from "./sections/Waitlist";
import ShopFeatures from "./sections/ShopFeatures";

type Props = {};

const HomeScreen: React.FC<Props> = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Intro />
      <SellingPoints />
      <ShopFeatures />
      <SocialFeatures />
      <Waitlist />
    </Flex>
  );
};

export default HomeScreen;
