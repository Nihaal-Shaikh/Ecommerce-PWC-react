import React from 'react'
import Homepage from '../pages/Homepage'
import { Route, Routes } from 'react-router'

function AppRoute() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Homepage />} />
    </Routes>
    </>
  )
}

export default AppRoute