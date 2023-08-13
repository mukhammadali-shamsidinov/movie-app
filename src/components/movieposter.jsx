import React from 'react';
import { Image } from '@chakra-ui/react';

const MoviePoster = ({ posterSrc }) => {
  return <Image src={posterSrc} alt="Movie Poster" />;
};

export default MoviePoster;
