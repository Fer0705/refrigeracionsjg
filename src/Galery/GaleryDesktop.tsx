import { Box, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

type GaleryDesktopProps = {};

const GaleryDesktop: React.FC<GaleryDesktopProps> = () => {
    const cards = [
        "https://res.cloudinary.com/dldclv2km/image/upload/v1674504656/Imagen_de_WhatsApp_2023-01-21_a_las_17.01.46_cab9hg.jpg",
        "https://res.cloudinary.com/dldclv2km/image/upload/v1674504655/Imagen_de_WhatsApp_2023-01-21_a_las_16.58.00_zywde4.jpg",
        "https://res.cloudinary.com/dldclv2km/image/upload/v1674504655/Imagen_de_WhatsApp_2023-01-21_a_las_16.56.26_ho7nzz.jpg",
        "https://res.cloudinary.com/dldclv2km/image/upload/v1674504655/Imagen_de_WhatsApp_2023-01-21_a_las_16.50.27_ilpxpb.jpg",
        "https://res.cloudinary.com/dldclv2km/image/upload/v1674504655/Imagen_de_WhatsApp_2023-01-21_a_las_16.58.05_kam4db.jpg",
        "https://res.cloudinary.com/dldclv2km/image/upload/v1674504552/Imagen_de_WhatsApp_2023-01-21_a_las_16.34.34_q9v6ge.jpg",
        "https://res.cloudinary.com/dldclv2km/image/upload/v1674504613/Imagen_de_WhatsApp_2023-01-21_a_las_16.42.35_c5qiwr.jpg",
        "https://res.cloudinary.com/dldclv2km/image/upload/v1674504654/Imagen_de_WhatsApp_2023-01-21_a_las_16.45.30_wy4kfq.jpg",
        "https://res.cloudinary.com/dldclv2km/image/upload/v1674504655/Imagen_de_WhatsApp_2023-01-21_a_las_16.50.30_cshf7h.jpg",
        "https://res.cloudinary.com/dldclv2km/image/upload/v1674604199/s_ho6ye5.jpg",
        'https://res.cloudinary.com/dldclv2km/image/upload/v1674504394/Imagen_de_WhatsApp_2023-01-21_a_las_16.29.32_a29yrr.jpg',
        'https://res.cloudinary.com/dldclv2km/image/upload/v1674504656/Imagen_de_WhatsApp_2023-01-21_a_las_17.12.08_pybdum.jpg',

    ];
    return (
        <>
            <Text fontFamily={"fantasy"} textAlign={"center"} fontSize={"4xl"}>NUESTROS TRABAJOS</Text>
            <SimpleGrid minChildWidth="400px" spacing="40px" >
                {cards.map((url, index) => (
                    <Box
                        height={"md"}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        key={index}
                        bgImage={url}
                        borderRadius="lg"
                        boxShadow={"dark-lg"}
                        _hover={{ borderRadius: "30%", WebkitBorderRadius: "30%", boxShadow: "0px 0px 9px 9px #8ecae6", WebkitBoxShadow: "0px 0px 9px 9px #8ecae6", transform: "rotate(360deg)", WebkitTransform: "rotate(360deg)" }}
                    ></Box>
                ))}
            </SimpleGrid>
        </>
    );
};
export default GaleryDesktop;
