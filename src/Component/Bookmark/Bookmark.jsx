import React, { useEffect, useState } from 'react';
import './Bookmark.css'
import Innerbookmark from '../Innerbookmark/Innerbookmark';

const Bookmark = ({cartblog}) => {



    let quantity = 0;
    for (const blg of cartblog) {
        quantity += blg.quantity;
    }





    return (
        <div >
            <div className='bookmark-minute-container'>
                <h2>Spent time on read :  min</h2>

            </div>
            <div className="bookmark-blogs-container">
                <h2>Bookmarked Blogs:{quantity} </h2>

                <div className="bookmark-inner-container2">
                    <Innerbookmark></Innerbookmark>
                    <Innerbookmark></Innerbookmark>

                    <h3></h3>
                    <h3></h3>
                </div>




            </div>
        </div>

    );
};

export default Bookmark;