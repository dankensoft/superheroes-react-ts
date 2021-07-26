import React, {useEffect, useState} from 'react';
import {Home} from "../components/home/Home";
import {Preloader} from "../components/preloader/Preloader";

export const Show = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    if(!loading){
        return <Home />
    }else{
        return <Preloader />
    }
}
