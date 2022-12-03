import NoteState from './context/note/NoteState'
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import MainPage from './components/MainPage'

function App() {
  return (
    <NoteState>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </NoteState>
  )
}

export default App
