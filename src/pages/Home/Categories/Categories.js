import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../../shared/Loader/Loader';
import CategoryCard from './CategoryCard/CategoryCard';

const Categories = () => {

    const {data : category = [] , isLoading} = useQuery({
        queryKey :['categories'],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/categories`)
            const data = res.json(); 
            return data
        }
    })

    if(isLoading){
        return <Loader/>
    }

    return (
        <section className='mt-16' id='categories'>
            <div className='container mx-auto '>
             <div className='md:w-5/6 mx-auto md:px-0 px-4'>
             <h2 className='text-2xl font-bold'>Popular Categories</h2>
             <div className='h-2 w-14 mt-2 bg-slate-800'></div>
             <div className='mt-16 grid md:grid-cols-3 justify-between gap-5 '>
                    {
                        category.map(cat => <CategoryCard key={cat._id} category ={cat}></CategoryCard>)
                    }
             </div>
             </div>
            </div>
        </section>
    );
};

export default Categories;