import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'//1
import Home from './pages/Home/Home'
function App() {
//edit
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
