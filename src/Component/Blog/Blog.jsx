import React, { useEffect, useState } from 'react';
import './Blog.css'
import Bloginside from '../Bloginside/Bloginside';
import Bookmark from '../Bookmark/Bookmark';

const Blog = () => {

    const [blogs, setBlog] = useState([]);
    const [cartblog,setCartblog] =useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))

    }, [])
    const handleCartToAdd=(blg) =>{
       
          console.log(blg);
        const newCart=[...cartblog,blg];
     
        setCartblog(newCart);
    }

    return (
        <div className='blog-section'>
            <div className='blog-container'>
                {

                    blogs.map(blg => <Bloginside blg={blg} key={blg.id}  handleCartToAdd={handleCartToAdd}></Bloginside>)
                }



            </div>



            <div className="bookmark-container">
               
                <Bookmark></Bookmark>
            </div>




        </div>



    );
};

export default Blog;