import React, { useEffect } from 'react';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import UserLogin from '../components/common/UserLogin';

function UserLoginPage(props) {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const setUser = props.setUser;
    const user = props.user;

    return (
        <>
            <div className='Desktop'>
                <NavMenuDesktop />
            </div>
            <div className='Mobile'>
                <NavMenuMobile />
            </div>
            <UserLogin setUser={setUser} user={user} />
            <div className='Desktop'>
                <FooterDesktop />
            </div>
            <div className='Mobile'>
                <FooterMobile />
            </div>
        </>
    )
}

export default UserLoginPage