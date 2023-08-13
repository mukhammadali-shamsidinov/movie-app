import React from 'react';
import { ChakraProvider, Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can replace this with your actual submission logic
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="name" mb={4}>
        <FormLabel>Name</FormLabel>
        <Input type="text" {...register('name', { required: 'Name is required' })} />
        {errors.name && <span>{errors.name.message}</span>}
      </FormControl>

      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })} />
        {errors.email && <span>{errors.email.message}</span>}
      </FormControl>

      <FormControl id="message" mb={4}>
        <FormLabel>Message</FormLabel>
        <Input type="textarea" {...register('message', { required: 'Message is required' })} />
        {errors.message && <span>{errors.message.message}</span>}
      </FormControl>

      <Button type="submit" colorScheme="teal" mt={4}>Submit</Button>
    </Box>
  );
};

export default ContactForm;
