import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from '../views/Login/SingIn'
import Home from '../views/Home'
import Error404 from '../views/Error404'
import SignUp from '../views/Login/SignUp'

function AppRoute() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/register' element={<SignUp />} />
    <Route path='/login' element={<SignIn />} />
    <Route path='*' element={<Error404 />} />
   </Routes>
  </BrowserRouter>
 )
}

export default AppRoute