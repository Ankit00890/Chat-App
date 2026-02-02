import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'

const App = () => {
  const authUser = null; // Mock authentication state

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
