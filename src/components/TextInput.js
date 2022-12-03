import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NoteContext from '../context/note/noteContext'
import { Button, Center, Input, useToast, Icon } from '@chakra-ui/react'
import { IoMdAdd } from 'react-icons/io'

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
        removed: false,
      })

      setText('')
    }
  }

  return (
    <Center w="80%" h="100%">
      <form onSubmit={submitHandler}>
        <Input
          size={['md', 'lg']}
          w={['15em', '15em', '30em']}
          onChange={changeHandler}
          focusBorderColor="#d0efff"
          isInvalid
          errorBorderColor="RGBA(0, 0, 0, 0.08)"
          type="text"
          value={text}
          placeholder="Ex: complete the report"
          autoComplete="off"
        />
      </form>

      <Button
        ml="2"
        size={['md', 'lg']}
        w="10"
        variant="outline"
        onClick={submitHandler}
        bg="#d0efff"
        border="none"
        transition="transform 200ms ease-in"
        _hover={{ transform: 'scale(0.98)' }}
      >
        <Icon as={IoMdAdd} boxSize={{ md: '10' }} />
      </Button>
    </Center>
  )
}

export default TextInput
