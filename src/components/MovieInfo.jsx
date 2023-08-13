import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const MovieInfo = ({ title, description, creationTime }) => {
  return (
    <Box>
      <Heading as="h2" size="lg">
        {title}
      </Heading>
      <Text>{description}</Text>
      <Text>Created: {creationTime}</Text>
    </Box>
  );
};

export default MovieInfo;
