import { BrowserRouter  ,Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx' 
import Profile from './pages/Profile.jsx'
import About from './pages/About.jsx' 
import Header from './Components/Header.jsx'

function App() {


  return (

   <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />  
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
