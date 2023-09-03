import React from 'react'
import Homepage from '../pages/Homepage'
import { Route, Routes } from 'react-router'
import UserLoginPage from '../pages/UserLoginPage'
import ContactPage from '../pages/ContactPage'
import PurchasePage from '../pages/PurchasePage'
import PrivacyPage from '../pages/PrivacyPage'
import RefundPage from '../pages/RefundPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import NotificationPage from '../pages/NotificationPage'
import FavouritePage from '../pages/FavouritePage'

function AppRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<UserLoginPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/purchase" element={<PurchasePage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/refund" element={<RefundPage />} />
                <Route path="/productDetail" element={<ProductDetailPage />} />
                <Route path="/notification" element={<NotificationPage />} />
                <Route path="/favourite" element={<FavouritePage />} />
            </Routes>
        </>
    )
}

export default AppRoute