import React from 'react'
import Note from './Note'
import TextInput from './TextInput'
import { Box } from '@chakra-ui/react'

const NoteList = () => {
  return (
    <Box h="100vh" bg="#252525">
      <Box
        w="100%"
        p={4}
        fontWeight="semibold"
        letterSpacing="wide"
        textAlign="center"
        color="white"
      >
        The only task manager you need
      </Box>

      <TextInput />
      <Note />
    </Box>
  )
}

export default NoteList
