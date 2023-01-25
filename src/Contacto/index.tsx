import {
  Container,
  Flex,
  Box,
  Heading,
  IconButton,
  Button,
  VStack,
  Stack,
  HStack,
  Wrap,
  WrapItem,
  useBreakpointValue,
  List,
  ListIcon,
  ListItem,
  Text
} from "@chakra-ui/react";

import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import Link from 'next/link';
import ContactMobile from "./ContactMobile";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

export default function Contact() {
  const whatsapp = "https://api.whatsapp.com/send?phone=541130430020&text=Hola!%20Quiero%20contratar%20sus%20servicios!"
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container maxW='full' mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          boxSize="max-content"
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box alignContent={"center"} justifyContent="center">
                  <Heading fontSize={"6xl"} textAlign={"center"}>Contacto</Heading>
                  <br />
                  <br />
                  {isMobile ? <ContactMobile /> : <List spacing={3}>
                    <ListItem>
                      <Flex direction={"row"}>
                        <a href="tel:+541130430020">
                          <ListIcon _hover={{ color: "white" }} as={PhoneIcon} color='blue.500' boxSize={"40px"} />
                        </a>
                        <Text ml={"30px"} mt="0" fontWeight={"semibold"} fontSize={"2xl"} textAlign="center">
                          11-3043-0020
                        </Text>
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex direction={"row"}>
                        <a
                          target="_blank"
                          href="mailto:desmandrilado17@gmail.com"
                          rel="noreferrer"
                        >
                          <ListIcon _hover={{ color: "white" }} as={EmailIcon} color='blue.500' boxSize={"40px"} />
                        </a>
                        <Text ml={"30px"} mt="0" fontWeight={"semibold"} fontSize={"2xl"} textAlign="center">
                          desmandrilado17@gmail.com
                        </Text>
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex direction={"row"}>
                        <ListIcon _hover={{ color: "white" }} as={IoLocationSharp} color='blue.500' boxSize={"40px"} />
                        <Text ml={"30px"} mt="0" fontWeight={"semibold"} fontSize={"2xl"} textAlign="center">
                          Buenos Aires, Argentina
                        </Text>
                      </Flex>
                    </ListItem>
                  </List>}
                  <br />
                  <br />
                  <Flex
                    direction={"row"}
                    justify="space-evenly"
                  >

                    <Link target={"_blank"} href={whatsapp}>
                      <IconButton
                        aria-label="whatsapp"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "green" }}
                        icon={<BsWhatsapp size="48px" />}
                      />
                    </Link>
                    <Link target={"_blank"} href="https://www.instagram.com/refrigeracionsjg/">
                      <IconButton
                        aria-label="instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#ffb3c1" }}
                        icon={<BsInstagram size="48px" />}
                      />
                    </Link>
                  </Flex>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container >
  );
}

// <Link href="https://api.whatsapp.com/send?phone=541134898698&text=Hola!%20Quiero%20contratar%20sus%20servicios!">
//     <button>WHATSAPP</button>
// </Link>
