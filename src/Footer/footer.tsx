import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import logo from '../../public/images/logo-sjg.png'

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            target="_blank"
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function SmallWithLogoLeft() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Link href="/">
                    <Image
                        src={logo}
                        width={250}
                        height={250}
                        alt="logo"
                    />
                </Link>
                <Stack direction={'row'} spacing={6}>
                    <Text ml={"30px"} mt="0" fontWeight={"semibold"} fontSize={"xl"} textAlign="center">
                        11-3043-0020
                    </Text>
                    <SocialButton label={'Instagram'} href={"https://www.instagram.com/refrigeracionsjg/"}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
                <Text textAlign={"center"}>Copyright© 2023. <br /> Todos los derechos reservados.</Text>
            </Container>
        </Box>
    );
}
