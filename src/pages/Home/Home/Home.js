import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../../../shared/Loader/Loader';
import About from '../About/About';
import Advertised from '../Advertised/Advertised';
import Categories from '../Categories/Categories';
import Hero from '../Hero/Hero';

const Home = () => {

  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    const timeout = setTimeout(() => {
        setLoading(false)
    }, 1000);

    return  ()=> clearTimeout(timeout)


  }, [])
    return (
        <div>
            {
                loading ? <Loader/> : 
                <>
                 <Hero></Hero>
            <Advertised/>
            <Categories/>
            <About/> </>
            }
         
        
            
           
           
        </div>
    );
};

export default Home;