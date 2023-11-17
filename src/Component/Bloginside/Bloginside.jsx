import React from 'react';
import './Bloginside.css'

const Bloginside = ({blg,handleCartToAdd}) => {


    // const handleCartToAdd=handleCartToAdd;
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
                    <button onClick={()=>handleCartToAdd(blg)}>
                        <span className='text-blog-span' >{blg.readtime} min read</span>
                    </button>
                 

                 </div>




            </div>


            <div className="blog-title">
                <h1>{blg.blog_title}</h1>
                <a href="">mark as read</a>
            </div>
           

           
            
        </div>
    );
};

export default Bloginside;