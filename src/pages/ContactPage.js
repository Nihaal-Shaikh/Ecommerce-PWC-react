import React from 'react';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import Contact from '../components/common/Contact';

function ContactPage() {
  return (
    <>
        <div className='Desktop'>
            <NavMenuDesktop />
        </div>
        <div className='Mobile'>
            <NavMenuMobile />
        </div>
        <Contact />
        <div className='Desktop'>
            <FooterDesktop />
        </div>
        <div className='Mobile'>
            <FooterMobile />
        </div>
    </>

  )
}

export default ContactPage