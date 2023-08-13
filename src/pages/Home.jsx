import React from 'react'
import Slider from '../components/Slider'
import NavbarApp from '../components/Navbar'
import Products from '../components/Products'
import ContactForm from '../components/Contact'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <NavbarApp />
      <Slider />
      <Products />
      <Box bg={'blue.500'} color={"white"}>
        <Container maxW="xl" py={10}>
          <ContactForm />
        </Container>
      </Box>

        <Footer />


    </div>
  )
}

export default Home