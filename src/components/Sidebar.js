import React from 'react'
import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { TfiPencilAlt } from 'react-icons/tfi'
import { BsTrash } from 'react-icons/bs'
import { ImCheckmark2 } from 'react-icons/im'

const Sidebar = ({ setShowAll, setShowComplete, setShowRemoved }) => {
  const handleShowAll = () => {
    setShowComplete('false')
    setShowRemoved('false')
    setShowAll('true')
  }
  const handleShowComplete = () => {
    setShowAll('false')
    setShowRemoved('false')
    setShowComplete('true')
  }
  const handleShowRemoved = () => {
    setShowAll('false')
    setShowComplete('false')
    setShowRemoved('true')
  }

  return (
    <Flex h="100%" direction="column" p="4">
      <Box
        w="100%"
        h="20"
        p="4"
        bg="#d0efff"
        border="none"
        display="flex"
        cursor="pointer"
        alignItems="center"
        justifyContent={{ sm: 'center', md: 'center', lg: 'flex-start' }}
        boxShadow="base"
        borderRadius="10"
        my="2"
        transition="transform 200ms ease-in"
        _hover={{ transform: 'scale(0.99)' }}
        onClick={handleShowAll}
      >
        <Icon as={TfiPencilAlt} boxSize={{ md: '10' }} />
        <Text display={{ sm: 'none', md: 'none', lg: 'block' }} marginLeft="8">
          Notes
        </Text>
      </Box>
      <Box
        w="100%"
        h="20"
        p="4"
        bg="#d0efff"
        border="none"
        justifyContent={{ sm: 'center', md: 'center', lg: 'flex-start' }}
        borderRadius="10"
        display="flex"
        cursor="pointer"
        boxShadow="base"
        alignItems="center"
        my="2"
        transition="transform 200ms ease-in"
        _hover={{ transform: 'scale(0.99)' }}
        onClick={handleShowComplete}
      >
        <Icon as={ImCheckmark2} boxSize={{ md: '10' }} />
        <Text display={{ sm: 'none', md: 'none', lg: 'block' }} marginLeft="8">
          Completed Notes
        </Text>
      </Box>
      <Box
        w="100%"
        h="20"
        bg="#d0efff"
        border="none"
        p="4"
        display="flex"
        justifyContent={{ sm: 'center', md: 'center', lg: 'flex-start' }}
        borderRadius="10"
        cursor="pointer"
        boxShadow="base"
        alignItems="center"
        my="2"
        transition="transform 200ms ease-in"
        _hover={{ transform: 'scale(0.99)' }}
        onClick={handleShowRemoved}
      >
        <Icon as={BsTrash} boxSize={{ md: '10' }} />
        <Text display={{ sm: 'none', md: 'none', lg: 'block' }} marginLeft="8">
          Deleted Notes
        </Text>
      </Box>
    </Flex>
  )
}

export default Sidebar
