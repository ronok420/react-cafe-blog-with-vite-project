import React, { useEffect, useState } from 'react';
import './Blog.css'
import Bloginside from '../Bloginside/Bloginside';
import Bookmar from '../Bookmark/Bookmar';

const Blog = () => {

    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))

    }, [])
    return (
        <div className='blog-section'>
            <div className='blog-container'>
                {

                    blogs.map(blg => <Bloginside blg={blg} key={blg.id} ></Bloginside>)
                }



            </div>



            <div className="bookmark-container">
               
                <Bookmar></Bookmar>
            </div>




        </div>



    );
};

export default Blog;