import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  Stack,
  useColorMode,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import Image from 'next/image';
import Link from 'next/link';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Mobile from "./Mobile";
import sjg from '../../public/images/logo-sjg.png'

const Links = ["Servicios", "Contacto", "Galeria"];

export default function Simple() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Dark", "Light");
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {isMobile ? <Mobile /> : false}

          <HStack spacing={8} alignItems={"center"} display={{ base: "none", md: "flex" }}>
            <Link href={"/"}>
              <Image
                src={sjg}
                width={250}
                height={250}
                alt="logo"
              />
            </Link>

          </HStack>
          <Stack display={{ base: "none", sm: "flex", md: "flex" }} direction={'row'} justifyContent="flex-end" spacing={5} fontSize="2xl" >
            {Links.map((link) => (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/${link.toLowerCase()}`} key={link} >
                <Text key={link} _hover={{ fontWeight: "bold" }}>{link}</Text>
              </Link>
            ))}
            {/* </HStack> */}
            <Flex alignItems={"center"}>
              <IconButton
                colorScheme="blue"
                aria-label="Color mode"
                icon={text === "Dark" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                size="xl"
              />
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
