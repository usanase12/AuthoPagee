import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Reset from './components/Reset'
import Change from './components/Change'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Layout from './components/layout'
import ConfirmationPage from './components/otp'

function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={
      <Login />
    }/>
    <Route path="/signup" element={
      <SignUp />
    }/>
    <Route path="/reset" element={
      <Reset />
    }/>
    <Route path="/change" element={
      <Change />
    }/>
    <Route path="/otp" element={
      <ConfirmationPage />
    }/>
  

  <Route path="/" element={<Layout />}> 
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App