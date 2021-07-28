import React from 'react';
import "./General.css";
import {Search} from "../search/Search";
import {GeneralItem} from "./generalItem";

export const General = () => {

    return (
        <>
            <div className="title-box">
                <div className="title-text">All superheros</div>
                <Search />
            </div>
            <GeneralItem />
        </>
    );
}
