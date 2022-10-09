import React, { useReducer } from 'react'
import NoteReducer from './noteReducer'
import NoteContext from './noteContext'
import {
  ADD_Note,
  EDIT_Note,
  DELETE_Note,
  COMPLETED_Note,
  SET_TEXT,
} from '../types'

const NoteState = (props) => {
  const initialState = {
    notes: [],
    text: '',
  }

  const [state, dispatch] = useReducer(NoteReducer, initialState)

  const setText = (input) => {
    dispatch({ type: SET_TEXT, payload: input })
  }

  const addNote = (note) => {
    dispatch({ type: ADD_Note, payload: note })
  }

  const deleteNote = (id) => {
    dispatch({ type: DELETE_Note, payload: id })
  }

  const editNote = (id) => {
    dispatch({ type: EDIT_Note, payload: id })
  }

  const completedNote = (id) => {
    dispatch({ type: COMPLETED_Note, payload: id })
  }

  let doneNotes = state.notes.filter((note) => note.completed === true)
  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        text: state.text,
        doneNotes,
        setText,
        addNote,
        editNote,
        deleteNote,
        completedNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
