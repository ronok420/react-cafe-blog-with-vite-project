import React from 'react';
import './Bookmark.css'
import Innerbookmark from '../Innerbookmark/Innerbookmark';

const Bookmark = () => {
    return (
        <div >
            <div className='bookmark-minute-container'>
                <h2>Spent time on read :  min</h2>

            </div>
            <div className="bookmark-blogs-container">
                <h2>Bookmarked Blogs: </h2>

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