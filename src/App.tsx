

import './App.scss'
import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Main from './modules/main/main'

export default function App(){
  return (
      <Routes>
          <Route path='/' element={<Navigate to='/main'/>} />
          <Route path='/main/*' element={<Main/>} />
      </Routes>
  )
}