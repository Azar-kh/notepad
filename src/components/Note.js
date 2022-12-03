import React, { useContext } from 'react'
import NoteContext from '../context/note/noteContext'
import { Flex, Grid, GridItem, Text, Icon } from '@chakra-ui/react'
import { BsTrash } from 'react-icons/bs'
import { ImCheckmark2 } from 'react-icons/im'
import { TfiPencilAlt } from 'react-icons/tfi'

const Note = ({ showAll, showComplete }) => {
  const {
    notes,
    doneNotes,
    removedNotes,
    completedNote,
    deleteNote,
    editNote,
  } = useContext(NoteContext)

  const backgroundColor = (value, secValue) => {
    let bgColor

    if (value === true) {
      bgColor = '#d7f4dd'
    } else if (secValue === true) {
      bgColor = '#ffc7c5'
    } else {
      bgColor = 'RGBA(255, 255, 255, 0.92)'
    }
    return bgColor
  }

  const noteToShow = () => {
    let list

    if (showAll === 'true')
      return (list = notes.filter((note) => note.removed !== true))
    else if (showComplete === 'true') return (list = doneNotes)
    else return (list = removedNotes)
  }

  return (
    <Grid templateRows="repeat(6, 1fr)" gap="2" h="100%" p="4">
      {noteToShow().map((note, index) => (
        <GridItem
          w="100%"
          bg={backgroundColor(note.completed, note.removed)}
          key={index}
          id={note.id}
          borderRadius="10px"
          boxShadow="base"
        >
          <Flex h="100%" position="relative">
            <Text p="2" fontSize="lg">
              {note.title}
            </Text>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="space-around"
              w="10%"
              h="100%"
              position="absolute"
              right="0"
              boxShadow="base"
              transition="all 200ms ease-in"
              _hover={{ bg: '#d0efff' }}
            >
              <button
                onClick={() => {
                  completedNote(note.id)
                }}
              >
                <Icon
                  as={ImCheckmark2}
                  transition="transform 200ms ease-in"
                  _hover={{ transform: 'scale(1.1)' }}
                />
              </button>

              <button onClick={() => editNote(note.id)}>
                <Icon
                  as={TfiPencilAlt}
                  transition="transform 200ms ease-in"
                  _hover={{ transform: 'scale(1.1)' }}
                />
              </button>

              <button onClick={() => deleteNote(note.id)}>
                <Icon
                  as={BsTrash}
                  transition="transform 200ms ease-in"
                  _hover={{ transform: 'scale(1.1)' }}
                />
              </button>
            </Flex>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  )
}

export default Note
