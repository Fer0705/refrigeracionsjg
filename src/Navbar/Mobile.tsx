import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorModeValue,
    useColorMode,
    useDisclosure,
    Flex,
} from "@chakra-ui/react";
import {
    AddIcon,
    CloseIcon,
    EditIcon,
    EmailIcon,
    ExternalLinkIcon,
    HamburgerIcon,
    MoonIcon,
    RepeatIcon,
    SettingsIcon,
    SunIcon,
    ViewIcon,
} from "@chakra-ui/icons";
import Image from 'next/image';
import Link from 'next/link'
import logo from '../../public/images/LOGO-SEBA-REFRIGERACION-removebg-preview.png'

type Props = {};

export default function Mobile({ }: Props) {
    const text = useColorModeValue("Dark", "Light");
    const { toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex direction={"row"}>
            <Menu>
                <MenuButton
                    mt={"15px"}
                    as={IconButton}
                    aria-label="Options"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    variant="outline"
                    display={{ base: "flex", sm: "none", md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <MenuList>
                    <Link href={"/servicios"}>
                        <MenuItem icon={<SettingsIcon />}>
                            Servicios
                        </MenuItem>
                    </Link>
                    <Link href={"/contacto"}>
                        <MenuItem icon={<EmailIcon />}>
                            Contacto
                        </MenuItem>
                    </Link>
                    <Link href={"/galeria"}>
                        <MenuItem icon={<ViewIcon />}>
                            Galería
                        </MenuItem>
                    </Link>
                    <MenuItem
                        onClick={toggleColorMode}
                        icon={text === "Dark" ? <MoonIcon /> : <SunIcon />}
                    >
                        {text}
                    </MenuItem>
                </MenuList>
            </Menu>
            <Link href="/">
                <Image
                    src={logo}
                    width={250}
                    height={250}
                    alt="logo"
                />
            </Link>
        </Flex>
    );
}
