import React, { useEffect } from 'react';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import UserRegister from '../components/common/UserRegister';

function UserRegisterPage() {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <div className='Desktop'>
                <NavMenuDesktop />
            </div>
            <div className='Mobile'>
                <NavMenuMobile />
            </div>
            <UserRegister />
            <div className='Desktop'>
                <FooterDesktop />
            </div>
            <div className='Mobile'>
                <FooterMobile />
            </div>
        </>
    )
}

export default UserRegisterPage