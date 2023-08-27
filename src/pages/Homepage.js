import React from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'

function Homepage() {
  return (
    <>
    <FeaturedProducts />
    <Collection />
    <Categories />
    </>
  )
}

export default Homepage