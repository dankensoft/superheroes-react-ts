import React from 'react';
import "./Liked.css";

export const Liked = () => {
    const smallHeart = process.env.PUBLIC_URL + '/assets/small-heart/small-heart.svg';
    const arrowUp = process.env.PUBLIC_URL + '/assets/arrow-up/arrow-up.svg';
    const bigHeart = process.env.PUBLIC_URL + '/assets/big-heart/big-heart.svg';

    return (
        <div className="liked">
            <div className="title">
                <div className="circle-heart">
                    <img src={smallHeart} alt={'small-heart'} className="small-heart"/>
                </div>
                <div className="liked-text">Liked</div>
                <div className="circle-collapse">
                    <img src={arrowUp} alt={'arrow-up'} className="arrow-up"/>
                </div>
            </div>
            <div className="card-box">
                <img src={bigHeart} alt={'big-heart'} className="big-heart"/>
                <div className="empty-box-text">You haven’t liked any superhero yet</div>
            </div>
        </div>
    );
}
