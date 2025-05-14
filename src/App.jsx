import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './componenet/ScrallToTop.jsx'
import Welcome from './pages/welcome.jsx'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Home from './pages/home.jsx'
import Mypage from './pages/mypage.jsx'
import Create from './pages/create.jsx'
import ResultList from './pages/resultlist.jsx'
import Result from './pages/result.jsx'
import EmptyHome from './pages/emptyhome.jsx'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/mypage' element={<Mypage/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/resultlist' element={<ResultList/>}/>
        <Route path='result' element={<Result/>}/>
        <Route path='/emptyhome' element={<EmptyHome/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
