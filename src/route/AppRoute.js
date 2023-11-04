import React, { useState } from 'react'
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
import CartPage from '../pages/CartPage'
import AboutPage from '../pages/AboutPage'
import ProductCategoryPage from '../pages/ProductCategoryPage'
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage'
import SearchPage from '../pages/SearchPage'
import UserRegisterPage from '../pages/UserRegisterPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import ProfilePage from '../pages/ProfilePage'
import { useEffect } from 'react'
import axios from 'axios'
import AppUrl from '../Api/AppUrl'
import NavMenuDesktop from '../components/common/NavMenuDesktop'

function AppRoute() {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(AppUrl.userData)
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            // Handle error
          });
      }, []);
    

    return (
        <>
        <NavMenuDesktop user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<UserLoginPage user={user} setUser={setUser} />} />
                <Route path="/register" element={<UserRegisterPage user={user} setUser={setUser} />} />
                <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
                <Route path="/resetPassword/:id" element={<ResetPasswordPage />} />
                <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/purchase" element={<PurchasePage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/refund" element={<RefundPage />} />
                <Route path="/productDetails/:id" element={<ProductDetailPage />} />
                <Route path="/notification" element={<NotificationPage />} />
                <Route path="/favourite" element={<FavouritePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/productCategory/:category" element={<ProductCategoryPage />} />
                <Route path="/productSubCategory/:category/:subcategory" element={<ProductSubCategoryPage />} />
                <Route path="/searchByProduct/:searchKey" element={<SearchPage />} />
            </Routes>
        </>
    )
}

export default AppRoute