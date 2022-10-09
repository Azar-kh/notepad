import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NoteContext from '../context/note/noteContext'
import { Box, Input, useToast } from '@chakra-ui/react'

const TextInput = () => {
  const toast = useToast()
  const { notes, addNote, text, setText } = useContext(NoteContext)
  const randomId = uuidv4()

  const changeHandler = (e) => {
    setText(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (text === '') {
      return toast({
        description: 'Please type somthing!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    } else if (notes.length === 5) {
      return toast({
        description: 'You can only add 5 tasks at a time.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    } else {
      addNote({
        id: randomId,
        title: text,
        completed: false,
      })

      setText('')
    }
  }

  return (
    <Box my="6" textAlign="center" w="100%" flex justifyContent="center">
      <form onSubmit={submitHandler}>
        <Input
          w={[300, 500, 700]}
          focusBorderColor="RGBA(255, 255, 255, 0.92)"
          bg="RGBA(255, 255, 255, 0.92)"
          color="RGBA(255, 255, 255, 0.92)"
          onChange={changeHandler}
          type="text"
          value={text}
          variant="filled"
          placeholder="Ex: complete the report"
          autoComplete="off"
          autoFocus
          maxLength="60"
        ></Input>
      </form>
    </Box>
  )
}

export default TextInput
