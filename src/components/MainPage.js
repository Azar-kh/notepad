import React, { useState, useContext } from 'react'
import NoteContext from '../context/note/noteContext'
import TextInput from './TextInput'
import Note from './Note'
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { TfiPencilAlt } from 'react-icons/tfi'
import Sidebar from './Sidebar'

const MainPage = () => {
  const { notes } = useContext(NoteContext)

  const [showAll, setShowAll] = useState('true')
  const [showComplete, setShowComplete] = useState('false')
  const [showRemoved, setShowRemoved] = useState('false')

  return (
    <Box bg="#f4f4f4" h="100vh" w="100vw" position="relative">
      <Flex justifyContent="center" alignItems="center" boxShadow="base" h="20">
        <TextInput />
      </Flex>

      <Grid templateColumns="20% 80%" h="100%">
        <GridItem boxShadow="base">
          <Sidebar
            setShowAll={setShowAll}
            setShowComplete={setShowComplete}
            setShowRemoved={setShowRemoved}
          />
        </GridItem>
        <GridItem position="relative">
          {notes.length === 0 ? (
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%,-70%)"
              textAlign="center"
            >
              <Icon as={TfiPencilAlt} boxSize="40" opacity="0.1" />
              <Text mt="8" opacity="0.7">
                Your notes will show here
              </Text>
            </Box>
          ) : (
            <Note
              showAll={showAll}
              showComplete={showComplete}
              showRemoved={showRemoved}
            />
          )}
        </GridItem>
      </Grid>
    </Box>
  )
}

export default MainPage
