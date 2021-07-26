import React, {useEffect, useState} from 'react';
import "./General.css";
import {Search} from "../search/Search";
import {getHeroes} from "../../helpers/getHeroes";
import {GeneralItem} from "./generalItem";

export const General = () => {
    const [images, setImages] = useState([]);

    useEffect( () => {
        getHeroes()
            .then(setImages)
    },[])

    return (
        <>
            <div className="title-box">
                <div className="title-text">All superheros</div>
                <Search />
                {
                    images.map(img => (
                        <GeneralItem
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    );
}
