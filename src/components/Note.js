import React, { useContext } from 'react'
import NoteContext from '../context/note/noteContext'
import { Flex, Text } from '@chakra-ui/react'
import { CheckIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'

const Note = () => {
  const { notes, completedNote, deleteNote, editNote } = useContext(NoteContext)

  const backgroundColor = (value) => {
    let bgColor

    if (value === true) {
      bgColor = '#68D391'
    } else {
      bgColor = 'RGBA(255, 255, 255, 0.92)'
    }
    return bgColor
  }

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      h="550"
    >
      {notes.map((note, index) => (
        <Flex
          direction="column"
          justifyContent="space-between"
          bg={backgroundColor(note.completed)}
          h="200px"
          w={{ base: '400px', md: '200px' }}
          borderRadius="20"
          key={index}
          id={note.id}
          py="2"
          px="6"
          m="2"
          boxShadow="0 0 5px rgba(0, 0, 0,0.4)"
        >
          <Text fontSize="lg">{note.title}</Text>
          <Flex w="100%" justifyContent="space-evenly">
            <button
              onClick={() => {
                completedNote(note.id)
              }}
            >
              <CheckIcon />
            </button>

            <button onClick={() => editNote(note.id)}>
              <EditIcon />
            </button>

            <button onClick={() => deleteNote(note.id)}>
              <DeleteIcon />
            </button>
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default Note
