import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, WorkSpace, NewWorkSpace, NotFound, Login } from './Pages'
import Register from './Pages/Register/Register'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/workSpace/:workSpaceID/:channelID" element={<WorkSpace/>} />
      <Route path="/WorkSpace/New" element={<NewWorkSpace/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
