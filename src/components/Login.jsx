import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

const LoginForm = () => {
  return (
    <Box maxW="500px" mx="auto" py="8">
      <Stack spacing="4">
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input type="email" id="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input type="password" id="password" placeholder="Enter your password" />
        </FormControl>
        <Button colorScheme="blue" size="lg" type="submit">
          Sing In
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
