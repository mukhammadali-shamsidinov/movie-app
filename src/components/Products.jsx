import { Button, CircularProgress, Container, Grid, Heading, SimpleGrid } from '@chakra-ui/react'
import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { Context } from '../App'

function Products() {
const {movies} = useContext(Context)
    return (
        <>
            <Heading align={'center'} mt={5}>
                Trends movies
            </Heading>
            <br />
            <Container maxW="xxl" py={10} style={{margin:'0 auto'}}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
                    {movies.filter(c=>c.category == 'trend').map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </SimpleGrid>
                <br />
                <p align="center">
                <Button colorScheme='blue' >Load More</Button>
                </p>
                
            </Container>

            <Heading align={'center'} mt={5}>
                Fantastic movies
            </Heading>

            <Container maxW="xxl" py={10} style={{margin:'0 auto'}}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
                    {movies.filter(c=>c.category == 'fantastic').map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </SimpleGrid>
                <br />
                <p align="center">
                <Button colorScheme='blue' >Load More</Button>
                </p>
                
            </Container>

            <Heading align={'center'} mt={5}>
                Jangari movies
            </Heading>

            <Container maxW="xxl" py={10} style={{margin:'0 auto'}}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
                    {movies.filter(c=>c.category == 'jangari').map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </SimpleGrid>
                <br />
                <p align="center">
                <Button colorScheme='blue'>Load More </Button>
                </p>
                
            </Container>

            <Heading align={'center'} mt={5}>
                Drama
            </Heading>

            <Container maxW="xxl" py={10} style={{margin:'0 auto'}}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
                    {movies.filter(c=>c.category == 'drama').map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </SimpleGrid>
                <br />
                <p align="center">
                <Button colorScheme='blue'>Load More </Button>
                </p>
                
            </Container>

        </>
    )
}

export default Products