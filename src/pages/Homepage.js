import React from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrivals from '../components/home/NewArrivals'
import HomeTop from '../components/home/HomeTop'

function Homepage() {
    return (
        <>
            <HomeTop />
            <FeaturedProducts />
            <NewArrivals />
            <Collection />
            <Categories />
        </>
    )
}

export default Homepage