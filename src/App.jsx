import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome.jsx'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Home from './pages/home.jsx'
import Mypage from './pages/mypage.jsx'
import Create from './pages/create.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/mypage' element={<Mypage/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
