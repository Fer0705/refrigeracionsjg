import React from 'react';
import style from "./whatspp.module.css"
import { Icon } from '@chakra-ui/react';
import { BsWhatsapp } from 'react-icons/bs';
type WhatsppProps = {

};

const Whatspp: React.FC<WhatsppProps> = () => {
    const whatsapp = "https://api.whatsapp.com/send?phone=541130430020&text=Hola!%20Quiero%20contratar%20sus%20servicios!"
    return (
        <>
            <a href={whatsapp} className={style.whatsapp} target="_blank" rel="noreferrer"> <Icon as={BsWhatsapp} boxSize={14} w={8} h={8} color='white' mt={4} ml={0.5} /> </a>
        </>
    )
}
export default Whatspp;