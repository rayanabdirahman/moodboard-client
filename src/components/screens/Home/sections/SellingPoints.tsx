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

// const images = [
//   "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
// ];

const points = [
  {
    bgColor: "green.100",
    icon: IoCashOutline,
    title: "Pay better",
    subheading:
      "Speed safely through checkout and plant trees at no extra cost.",
  },
  {
    bgColor: "red.100",
    icon: IoLocationOutline,
    title: "Track better",
    subheading:
      "Get real-time delivery updates from cart to home in one place.",
  },
  {
    bgColor: "blue.100",
    icon: IoPricetagsOutline,
    title: "Shop better",
    subheading: "Discover new arrivals from your favorite stores first.",
  },
];

// const SellingPoints: React.FC = () => {
//   return (
//     <Box w="full" py={20} bg={theme.color.shades.white}>
//       <Container maxW="container.xl">
//         <VStack alignItems="flex-start">
//           <Heading textSize="h4" textWeight="bold" mb={8}>
//             A new Shopping experience
//           </Heading>
//         </VStack>
//         <Grid templateColumns="repeat(3, 1fr)" gap={6}>
//           {images.map((image, index) => (
//             <GridItem key={`landing-image-${index}`}>
//               <AspectRatio ratio={1}>
//                 <Image
//                   src={image}
//                   rounded="xl"
//                   objectFit="cover"
//                   alt="placeholder image"
//                 />
//               </AspectRatio>
//             </GridItem>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

const SellingPoints: React.FC = () => {
  return (
    <Box w="full" py={20} bg={theme.color.shades.white}>
      <Container maxW="container.xl">
        <VStack alignItems="flex-start" mb={8}>
          <Heading textSize="h4" textWeight="bold">
            A new Shopping experience
          </Heading>
          <Text textSize="p2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </VStack>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {points.map((point, index) => (
            <GridItem key={`landing-image-${index}`} w="full" h="full">
              <Stack
                bg={point.bgColor}
                rounded="xl"
                w="full"
                h="xs"
                p={10}
                justifyContent="space-between"
              >
                <Icon as={point.icon} w={12} h={12} />

                <Stack>
                  <Heading textSize="h6">{point.title}</Heading>
                  <Text textSize="p2">{point.subheading}</Text>
                </Stack>
              </Stack>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SellingPoints;
