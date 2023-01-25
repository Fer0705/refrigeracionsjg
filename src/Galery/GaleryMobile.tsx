import React from 'react';
import { Box, IconButton, useBreakpointValue, Text } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Galery() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674504656/Imagen_de_WhatsApp_2023-01-21_a_las_17.01.46_cab9hg.jpg',
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674504655/Imagen_de_WhatsApp_2023-01-21_a_las_16.58.00_zywde4.jpg',
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674504655/Imagen_de_WhatsApp_2023-01-21_a_las_16.56.26_ho7nzz.jpg',
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674504655/Imagen_de_WhatsApp_2023-01-21_a_las_16.58.05_kam4db.jpg',
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674504552/Imagen_de_WhatsApp_2023-01-21_a_las_16.34.34_q9v6ge.jpg',
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674504613/Imagen_de_WhatsApp_2023-01-21_a_las_16.42.35_c5qiwr.jpg',
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674504654/Imagen_de_WhatsApp_2023-01-21_a_las_16.45.30_wy4kfq.jpg',
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674504655/Imagen_de_WhatsApp_2023-01-21_a_las_16.50.30_cshf7h.jpg',
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674604199/s_ho6ye5.jpg',
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674606913/ss_q0drlo.jpg',
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674606913/sss_vwhv5l.jpg',
    'https://res.cloudinary.com/dldclv2km/image/upload/v1674504655/Imagen_de_WhatsApp_2023-01-21_a_las_16.58.07_dagbp4.jpg',




  ];

  return (
    <Box
      position={"relative"}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Text fontFamily={"fantasy"} textAlign={"center"} fontSize={"3xl"} fontWeight={600}>NUESTROS TRABAJOS</Text>

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)} >
        {cards.map((url, index) => (
          <Box
            key={index}
            height={{ base: 'md', md: 'lg', lg: 'xl' }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
