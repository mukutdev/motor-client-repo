import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCar from "../../../shared/SingleCar/SingleCar";
import SmallSpinner from "../../../shared/SmallSpinner/SmallSpinner";
import BookingModal from "../Categories/BookingModal/BookingModal";

const Advertised = () => {
  const [products, setProducts] = useState([]);
  const [carData , setCarData] = useState(null);
  const [loading , setLoading] =useState(true)

  useEffect(() => {
    
    axios
      .get(`http://localhost:5000/allCars/advertise`)
      .then(res => {
        setProducts(res.data);
        setLoading(false)
      });
  }, []);

//   console.log(products);
  return (
    <section>
        {
          loading ? <SmallSpinner/> : 
          <>
          {
            products.length > 0 ? <><section className='mt-16'>
            <div className='container mx-auto '>
             <div className='md:w-5/6 mx-auto md:px-0 px-4'>
             <h2 className='text-2xl font-bold'>Featured Cars</h2>
             <div className='h-1 w-14 mt-2 bg-slate-800'></div>
             <div className='mt-16 grid md:grid-cols-2 justify-between gap-5 '>
                    {
                        products.map(carInfo => <SingleCar key={carInfo._id} carInfo={carInfo} setCarData={setCarData}></SingleCar>)
                    }
          
                    <BookingModal carData={carData} setCarData={setCarData}></BookingModal>
             </div>
             </div>
            </div>
          </section></> : ""
        }
          </>
        }
    </section>
    
  );
};

export default Advertised;
