import React from 'react';
import './Bloginside.css'

const Bloginside = ({blg}) => {
    return (
        <div className='blog-indide-section'>
            <div className="image-blog">
            <img src={blg.blogCoverImage} alt="" />


            </div>


            <div className="text-blog-plus-container">
                    <div className="text-blog">
                        <img src={blg.authorImage} alt="" />
                         <h3> {blg.authorName}   <br />
                        <span className='text-blog-span' >{blg.publishdate}</span>
                        </h3> 
            
                 </div>
                 <div className="readtime">
                 <span className='text-blog-span' >{blg.publishdate}</span>

                 </div>




            </div>
           

           
            
        </div>
    );
};

export default Bloginside;