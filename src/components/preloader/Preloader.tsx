import React from 'react';
import {MyLoader} from "./MyLoader";

export const Preloader = () => {
    const logo = process.env.PUBLIC_URL + '/assets/logo/logo.svg';
    return (
        <>
            <img src={logo} alt={'logo'} className="logo"/>
            <MyLoader />
        </>
    );
}
