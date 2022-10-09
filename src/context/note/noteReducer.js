import {
  ADD_Note,
  EDIT_Note,
  DELETE_Note,
  COMPLETED_Note,
  SET_TEXT,
} from '../types'

const NoteReducer = (state, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
      }

    case ADD_Note:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      }
    case DELETE_Note:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      }
    case EDIT_Note:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
        text: state.notes.find((note) => note.id === action.payload).title,
      }
    case COMPLETED_Note:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload) {
            return {
              ...note,
              completed: !note.completed,
            }
          }
          return note
        }),
      }
    default:
      return {
        state,
      }
  }
}
export default NoteReducer
