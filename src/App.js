import NoteState from './context/note/NoteState'
import NoteList from './components/NoteList'
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'

function App() {
  return (
    <NoteState>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/notelist" element={<NoteList />} />
      </Routes>
    </NoteState>
  )
}

export default App
