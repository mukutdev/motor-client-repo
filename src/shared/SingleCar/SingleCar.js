import React, { useContext } from "react";
import { BiMap, BiDollarCircle, BiUserCircle } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { useAdmin } from "../../Hooks/useAdmin";
import { AuthProvider } from "../../context/AuthConText";
import { Link } from "react-router-dom";
// import BookingModal from "../../pages/Home/Categories/BookingModal/BookingModal";

const SingleCar = ({ carInfo , setCarData }) => {

  const {user} = useContext(AuthProvider)
  const [userLevel] = useAdmin(user?.email)
    
  const {
    carName,
    img,
    location,
    description,
    condition,
    sellerNo,
    Availability,
    category,
    originalPrice,
    salePrice,
    uses,
    pubDate,
    seller,
    verified,
    advertised,
  } = carInfo;

  return (
    <div className="md:mx-8 mx-2">
      <div className="p-4 px-6 shadow rounded bottom-1">
        <div className="relative">
          <img className="md:h-72 object-cover w-full"  src={img} alt="" />
          <span
            className={`p-1 text-sm text-white font-medium capitalize tracking-wide rounded px-2 absolute top-3 right-2 ${
              Availability === "available" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {Availability}
          </span>

          {advertised && (
            <span className="p-1 text-sm text-slate-600 font-medium capitalize tracking-wide rounded px-2 absolute top-3 left-2 bg-yellow-400">
              {advertised && "Featured"}
            </span>
          )}
        </div>

        <div className="mt-5 flex md:flex-row flex-col justify-between gap-4">
          <h4 className="text-lg font-semibold ">{carName}</h4>
          <h4 className="flex items-center font-medium text-base gap-1">
            <FaCar />
            {category}
          </h4>
          <h4 className="flex items-center font-medium text-base ">
            <BiMap />
            {location}
          </h4>
          {/* <h5>Original Price${originalPrice}</h5> */}
        </div>
        <div className="mt-4 flex md:flex-row flex-col justify-between gap-4">
          <span className="text-base font-medium flex items-center  gap-1">
            <BsCalendarDate /> {pubDate}
          </span>
          <span className="text-base font-medium text-slate-800">
            <strong>Years Of Used</strong> :{uses}
          </span>
          <span className="text-base font-medium text-slate-800 flex items-center  gap-1">
            <BiUserCircle />
            {seller}
            {verified && <GoVerified className="text-green-600" />}
          </span>
        </div>
        <div className="mt-4 flex  md:flex-row flex-col md:justify-between gap-4 md:items-center">
          <span className="text-base font-medium"><strong>Condition:</strong> {condition}</span>
          <span className="bg-red-600 p-1 text-base font-medium text-white rounded flex items-center gap-1">
            <BiDollarCircle />
            OP : ${originalPrice}
          </span>
          <span className="bg-green-600 p-1 text-base font-medium text-white  rounded flex items-center gap-1">
            <BiDollarCircle />
            SP : ${salePrice}
          </span>
        </div>
        <p className="text-base font-medium mt-4">{description}</p>
        <p className="text-base font-medium mt-4">
          <strong>Seller Contact</strong> : {sellerNo}
        </p>
         {
          userLevel.accountMode === 'buyer' && user?.email ? <label
          onClick={()=> setCarData(carInfo)}
          htmlFor="booking-modal"
          className="btn bg-yellow-400 mt-6 hover:text-white border-0 text-base rounded text-slate-900"
        >
          Book Now
        </label> : user?.email ? <div className="flex flex-col justify-center mt-3">
        <h2 className="text-center text-base font-medium mt-5">{`You are ${userLevel.accountMode} booking option now only for buyer`}</h2>
        <Link className="btn bg-yellow-400 mt-6 hover:text-white rounded border-0 text-base text-slate-900" to={'/dashboard'}>Go To Dashboard</Link>
        </div> : <div className=" mt-5"><Link className="btn bg-yellow-400 mt-3 rounded hover:text-white border-0 text-base text-slate-900" to={'/login'}>For Booking , Login Please</Link></div>
         }   
        
      </div>
     
    </div>
  );
};

export default SingleCar;
