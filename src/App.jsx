import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Reset from './components/Reset'
import Change from './components/Change'
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
  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App