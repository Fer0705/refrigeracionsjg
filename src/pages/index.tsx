import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Banner from '../Home/Banner'
import Carousel from '../Carousel'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Head>
        <title>Sebastian Refrigeración</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Container
        maxW="100%"
        display="flex"
        flexDir="column"
        justifyContent="center"
        color={useColorModeValue("grey.100", "grey.800")}
        bg={useColorModeValue("gray.100", "grey.800")}
        alignItems="center"
        mb="0.5rem">
        <Carousel />
        <Banner />
      </Container>
    </>
  )
}
