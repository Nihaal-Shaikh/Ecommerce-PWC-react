import React from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrivals from '../components/home/NewArrivals'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import HomeTopMobile from '../components/home/HomeTopMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'

function Homepage() {
	return (
		<>
			<div className='Desktop'>
				<NavMenuDesktop />
				<HomeTop />
			</div>
			<div className='Mobile'>
				<NavMenuMobile />
				<HomeTopMobile />
			</div>
			<FeaturedProducts />
			<NewArrivals />
			<Categories />
			<Collection />
			<div className='Desktop'>
				<FooterDesktop />
			</div>
			<div className='Mobile'>
				<FooterMobile />
			</div>
		</>
	)
}

export default Homepage