import GaleryDesktop from '../Galery/GaleryDesktop';
import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import GaleryMobile from '../Galery/GaleryMobile';
type galeriaProps = {

};

const galeria: React.FC<galeriaProps> = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
            {isMobile ? <GaleryMobile /> : <GaleryDesktop />}
        </>
    )
}
export default galeria;