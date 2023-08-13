import React, { useContext } from 'react';
import { Box, Image, Text, Badge } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../App';

const MovieCard = ({ movie }) => {

  const {detailPages} = useContext(Context)
  const { title, poster, like, rating,category,time } = movie;


  return (
    

    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      style={{height:'300px'}}
      onClick={()=>detailPages(movie)}
    >
      <Image src={poster} alt={title} style={{objectFit:'cover',width:'100%',height:'70%'}} />

      <Box p="3">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
          <i className="fa-regular fa-thumbs-up"></i> {like}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            
            
          >
         <Badge borderRadius="full" px="2" colorScheme="cyan">
                      rating:{rating}
          </Badge>
          
          </Box>
        </Box>

        <Text ml-2 mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
          {title}
        </Text>
      </Box>
    </Box>
 
  );
};

export default MovieCard;
