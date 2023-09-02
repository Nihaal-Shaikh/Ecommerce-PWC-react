import React from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrivals from '../components/home/NewArrivals'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'

function Homepage() {
    return (
        <>
            <NavMenuMobile />
            <HomeTop />
            <FeaturedProducts />
            <NewArrivals />
            <Categories />
            <Collection />
        </>
    )
}

export default Homepage