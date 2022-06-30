import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  VStack,
  Image,
  AspectRatio,
  Icon,
  Stack,
} from "@chakra-ui/react";
import {
  IoCashOutline,
  IoLocationOutline,
  IoPricetagsOutline,
} from "react-icons/io5";
import Heading from "../../../UI/atoms/Typography/Heading";
import Text from "../../../UI/atoms/Typography/Text";
import theme from "../../../../constants/theme";

const images = [
  "https://images.unsplash.com/photo-1595991209266-5ff5a3a2f008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

const ShopFeatures: React.FC = () => {
  return (
    <Box w="full" py={20} bg={theme.color.shades.white}>
      <Container maxW="container.xl">
        <VStack alignItems="flex-start" mb={8}>
          <Heading textSize="h4" textWeight="bold">
            Spend &amp; Shop
          </Heading>
          <Text textSize="p2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </VStack>

        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {images.map((image, index) => (
            <GridItem key={`landing-image-${index}`}>
              <AspectRatio ratio={1}>
                <Image
                  src={image}
                  rounded="xl"
                  objectFit="cover"
                  alt="placeholder image"
                />
              </AspectRatio>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShopFeatures;
