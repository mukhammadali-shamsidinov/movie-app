import React from 'react';
import { Box, Flex, Link, Text, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" mt="auto">
      <Flex
        align="center"
        justify="space-between"
        p={4}
        bg="gray.800"
        color="white"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Text>&copy; 2023 Your Movie App</Text>
        <Flex>
          <Link href="#" mx={2}>
            Privacy Policy
          </Link>
          <Text mx={2}>|</Text>
          <Link href="#" mx={2}>
            Terms of Service
          </Link>
        </Flex>
        <Flex>
          <Link href="#" mx={2}>
            <Icon as={FaFacebook} boxSize={5} />
          </Link>
          <Link href="#" mx={2}>
            <Icon as={FaTwitter} boxSize={5} />
          </Link>
          <Link href="#" mx={2}>
            <Icon as={FaInstagram} boxSize={5} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
