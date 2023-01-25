import React from "react";
import heladera from "../../../public/images/mixrefrigeracion.png";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";

const Banner: React.FC = () => {
  return (
    <>
      <Box>
        <Flex direction={{ base: "column", md: "row" }}>
          <Image
            src={heladera}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt="heladera"
          />
          <Text fontSize={{ base: 'xl', md: '2xl' }} as='i' textAlign={{ base: "center", md: "justify" }}>
            Más que un servicio al cliente, le entregamos nuestra atención
            personalizada. La atención personalizada es la que implica un trato
            directo o personal entre nosotros y usted, nuestro cliente. Y que
            nos compromete a tomar en cuenta sus necesidades, sus gustos y sus
            preferencias. Brindar esta atención personalizada nos permite
            hacerle saber que no lo tratamos como si fuera un cliente más, sino
            que tomamos en cuenta sus necesidades, gustos y preferencias
            particulares, sobre cada uno de nuestros servicios. Nuestro
            compromiso es ofrecerle la mejor atención personalizada y los
            precios más competitivos, lo que nos ha asegurado a lo largo de los
            años contar con la confianza y preferencia de todos nuestros
            clientes, entre los cuales deseamos seguir contándolo.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Banner;
