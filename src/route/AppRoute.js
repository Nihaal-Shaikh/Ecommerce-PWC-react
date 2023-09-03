import React from 'react'
import Homepage from '../pages/Homepage'
import { Route, Routes } from 'react-router'
import UserLoginPage from '../pages/UserLoginPage'

function AppRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<UserLoginPage />} />
            </Routes>
        </>
    )
}

export default AppRoute