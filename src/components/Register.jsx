import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <Box maxW="500px" mx="auto" py="8">
      <Stack spacing="4">
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input type="text" id="name" placeholder="Enter your name" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input type="email" id="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input type="password" id="password" placeholder="Enter your password" />
        </FormControl>
        <Button colorScheme="blue" size="lg" type="submit">
          Sing Up
        </Button>
    <Link to={'/login'} style={{display:'block',width:'100%'}}>
        <Button size={"lg"} style={{width:'100%'}}>Sing In</Button>
    </Link>
      </Stack>
    </Box>
  );
};

export default RegistrationForm;
