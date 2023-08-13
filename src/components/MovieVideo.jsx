import React from 'react';

const MovieVideo = ({ videoUrl }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={videoUrl}
      title="Movie Trailer"
      allowFullScreen
    />
  );
};

export default MovieVideo;
