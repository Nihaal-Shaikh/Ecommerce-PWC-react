import React, { useEffect } from 'react';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import UserProfile from '../components/common/UserProfile';

function ProfilePage(props) {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const user = props.user;

  return (
    <>
        <div className='Desktop'>
            <NavMenuDesktop />
        </div>
        <div className='Mobile'>
            <NavMenuMobile />
        </div>
        <UserProfile user={user} />
        <div className='Desktop'>
            <FooterDesktop />
        </div>
        <div className='Mobile'>
            <FooterMobile />
        </div>
    </>
)
}

export default ProfilePage