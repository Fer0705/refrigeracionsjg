import { ReactElement } from "react";
import {
    Box,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    Flex,
    useColorModeValue,
    Divider,
} from "@chakra-ui/react";
import { GiThermometerCold } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdOutlineLocalLaundryService } from "react-icons/md";

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack
            direction={"column-reverse"}
            border={"1px"}
            borderRadius="xl"
            p="30px"
            bgImage={
                "https://res.cloudinary.com/dldclv2km/image/upload/v1674597971/selider_bjerhe.jpg"
            }
            boxShadow="dark-lg"
        >
            <Flex justify={"space-evenly"}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    rounded={"full"}
                    bg={"gray.100"}
                    mb={1}
                    color={useColorModeValue("blue.400", "blue.400")}
                >
                    {icon}
                </Flex>
            </Flex>
            <Flex direction={"column"} justify="center">
                <Text
                    textAlign={"center"}
                    fontWeight={"bold"}
                    color="black"
                    fontSize={"3xl"}
                >
                    {title}
                </Text>
                <Text textAlign={"center"} color="black" fontSize={"xl"}>
                    {text}
                </Text>
            </Flex>
        </Stack>
    );
};

export default function SimpleThreeColumns() {
    return (
        <Box
            p={4}
            color={useColorModeValue("grey.100", "grey.800")}
            bg={useColorModeValue("gray.100", "grey.800")}
        >
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                <Feature
                    icon={<Icon as={GiThermometerCold} w={10} h={10} />}
                    title={"Aire Acondicionado"}
                    text={
                        "Instalación, mantenimiento y reparación de sistemas de Aire Acondicionado, para hogares, locales comerciales y empresas."
                    }
                />

                <Divider />
                <Feature
                    icon={<Icon as={CgSmartHomeRefrigerator} w={10} h={10} />}
                    title={"Heladeras"}
                    text={
                        "Reparación De Heladera, Freezer, Cámaras frigoríficas y Heladeras exhibidoras. Todas las marcas y modelos."
                    }
                />

                <Divider />
                <Feature
                    icon={<Icon as={MdOutlineLocalLaundryService} w={10} h={10} />}
                    title={"Lavarropas"}
                    text={
                        "Service especializado en todas las marcas de lavarropas y lavasecarropas. "
                    }
                />

                <Divider />
            </SimpleGrid>
        </Box>
    );
}
