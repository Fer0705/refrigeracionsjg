import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import { IconButton } from '@chakra-ui/react';
import { BsWhatsapp } from "react-icons/bs";
import w from '../../public/svg/whatsapp-svgrepo-com.svg'
import Whatspp from "../Buttons/Whatspp";
interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <Navbar />
            {/* <Directory /> */}
            <Whatspp />
            {children}
            <Footer />

        </>
    );
};

export default Layout;
