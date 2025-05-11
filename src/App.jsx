import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome.jsx'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Home from './pages/home.jsx'
import Mypage from './pages/mypage.jsx'
import Create from './pages/create.jsx'
import Created from './pages/created.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/mypage' element={<Mypage/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/created' element={<Created/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
