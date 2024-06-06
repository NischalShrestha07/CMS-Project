import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'//1
import Home from './pages/Home/Home'
function App() {

  return (
    // 2
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
