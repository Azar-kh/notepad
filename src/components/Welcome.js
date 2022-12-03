import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import welcome from '../images/welcome.png'

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <Box
      h="100vh"
      w="100vw"
      display="flex"
      flexDirection={{ base: 'column-reverse', md: 'row' }}
      alignItems="center"
      justifyContent="space-evenly"
      px={8}
    >
      <Box
        width={{ base: '100%', md: '50%' }}
        height={{ md: '100vh' }}
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
      >
        <Heading>Manage your daily tasks here</Heading>
        <Text my={20} fontSize="xl">
          When you are overwhelmed by the amount of work you have on your plate,
          Stop and make a list!
        </Text>
        <Button
          bg="#d0efff"
          transition="transform 200ms ease-in"
          _hover={{ transform: 'scale(0.99)' }}
          onClick={() => navigate('/mainpage')}
        >
          Get Started
        </Button>
      </Box>
      <Box w="50vw">
        {/* <a href="https://storyset.com/work">Work illustrations by Storyset</a> */}
        <Image src={welcome} />
      </Box>
    </Box>
  )
}

export default Welcome
