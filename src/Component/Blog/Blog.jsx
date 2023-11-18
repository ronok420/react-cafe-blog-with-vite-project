import React, { useEffect, useState } from 'react';
import './Blog.css'
import Bloginside from '../Bloginside/Bloginside';
import Bookmark from '../Bookmark/Bookmark';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Blog = () => {

    const [blogs, setBlog] = useState([]);
    const [cartblog,setCartblog] =useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))

    }, [])
    useEffect(()=>{
        const savedCart =[];
        const storedCart= getShoppingCart();
        console.log(storedCart);
        for(const id in storedCart){
            const addedPRoduct= blogs.find(bg=> bg.id ===id);
            if(addedPRoduct){
                const quantity=storedCart[id];
                addedPRoduct.quantity=quantity;
                console.log(addedPRoduct);
                savedCart.push(addedPRoduct);

            }
        }
        setCartblog(savedCart);


    },[blogs])
    const handleCartToAdd=(blg) =>{
       
        //   console.log(blg);
        // const newCart=[...cartblog,blg];

        let newCart=[];
        const exist =cartblog.find(bg=> bg.id === blg.id);
        if(!exist){
            blg.quantity=1;
            newCart=[...cartblog,blg];

        }else{
            exist.quantity +=1;
            const remaining= cartblog.filter(bg=> bg.id!=blg.id);
            newCart=[...remaining,exist];
        }
     
        
        addToDb(blg.id);
        setCartblog(newCart);
    }

    return (
        <div className='blog-section'>
            <div className='blog-container'>
                {

                    blogs.map(blg => <Bloginside blg={blg} key={blg.id}    handleCartToAdd={handleCartToAdd}></Bloginside>)
                }



            </div>



            <div className="bookmark-container">
               
                <Bookmark cartblog={cartblog}></Bookmark>
            </div>




        </div>



    );
};

export default Blog;