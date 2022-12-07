import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Noticeboard } from '../Pages/Noticeboard'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/noticeboard' element={<Noticeboard/>}/>
        </Routes>
    </div>
  )
}
