import React from 'react';
import { Stack, Button, Box, Flex, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { IoLocationSharp } from 'react-icons/io5';

type ContactMobileProps = {

};

const ContactMobile: React.FC<ContactMobileProps> = () => {

  return (
    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
      <List spacing={3}>
        <ListItem>
          <Flex direction={"row"}>
            <a href="tel:+541130430020">
              <ListIcon _hover={{ color: "white" }} as={PhoneIcon} color='blue.500' boxSize={"30px"} />
            </a>
            <Text ml={"30px"} mt="0" fontWeight={"semibold"} fontSize={"xl"} textAlign="center">
              11-3043-0020
            </Text>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex direction={"row"} justify="center">
            <a
              target="_blank"
              href="mailto:sebastiang.refrigeracion@gmail.com"
              rel="noreferrer"
            >
              <ListIcon _hover={{ color: "white" }} as={EmailIcon} color='blue.500' boxSize={"30px"} />
            </a>
            <Text ml={"30px"} mt="0" fontWeight={"semibold"} fontSize={"md"} textAlign="center">
              sebastiang.refrigeracion@gmail.com
            </Text>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex direction={"row"}>
            <ListIcon _hover={{ color: "white" }} as={IoLocationSharp} color='blue.500' boxSize={"30px"} />
            <Text ml={"30px"} mt="0" fontWeight={"semibold"} fontSize={"lg"} textAlign="center">
              Buenos Aires, Argentina
            </Text>
          </Flex>
        </ListItem>
      </List>
    </Box>
  )
}
export default ContactMobile;