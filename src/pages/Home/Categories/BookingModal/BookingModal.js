import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthProvider } from "../../../../context/AuthConText";

const BookingModal = ({carData , setCarData , refetch }) => {

    const {user} = useContext(AuthProvider)
    const {register , handleSubmit , formState: { errors }} = useForm()
 

const handleBooking = data =>{
  
    const bookingData = {
        carName : carData?.carName,
        customer : user?.displayName,
        cusEmail : user?.email,
        salePrice : carData?.salePrice,
        phone : data.phone,
        location : data.meetingLocation,
        seller : carData?.seller,
        catId : carData?.categoryId,
        image : carData?.img
    }

    // posting booking data to db

    fetch('http://localhost:5000/bookings' , {
      method: 'POST',
      headers :{
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.acknowledged){
        console.log(data)
        toast.success('Booking created successfully')
        setCarData(null)
        refetch()
      }else{
        toast.error(data.message)
      }
    })
    .catch(err => console.log(err))
    
}

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className={`modal`}>
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {carData?.carName}
          </h3>
          <div className="py-4">
          <form onSubmit={handleSubmit(handleBooking)}>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
            //   placeholder="Enter Full Name"
              {...register("name" )}
              className="border-0 w-full outline-none bg-gray-300 px-3 py-3 mt-5 text-slate-900 placeholder-gray-500"
            />
            <input
              type="email"
             defaultValue={user?.email}
             readOnly
              {...register("email")}
              className="border-0 w-full outline-none bg-gray-300 px-3 py-3 mt-3 text-slate-900 placeholder-gray-500"
            />
            <input
              type="text"
              defaultValue={carData?.salePrice}
              readOnly
              {...register("salePrice")}
              className="border-0 w-full outline-none bg-gray-300 px-3 py-3 mt-3 text-slate-900 placeholder-gray-500"
            />
            <input
              type="tel"
              placeholder="Enter Phone Number"
              {...register("phone" , { required: true })}
              className="border-0 w-full outline-none bg-gray-300 px-3 py-3 mt-3 text-slate-900 placeholder-gray-500"
            />
            {errors.phone && <span className="text-red-500">Enter Phone number </span>}
            <input
              type="text"
              placeholder="Enter Meeting Location"
              {...register("meetingLocation" , { required: true })}
              className="border-0 w-full outline-none bg-gray-300 px-3 py-3 mt-3 text-slate-900 placeholder-gray-500"
            />
            {errors.meetingLocation && <span className="text-red-500">Enter Meeting Location</span>}
             <input type="submit" value="Confirm Booking"  className="w-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer py-3 mt-4 font-semibold text-xl"/>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
