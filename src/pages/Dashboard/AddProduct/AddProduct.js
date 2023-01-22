import React, { useContext  } from "react";
import { useForm } from "react-hook-form";
import { AuthProvider } from "../../../context/AuthConText";
import { format } from 'date-fns'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../../Hooks/useAdmin";
import SmallSpinner from "../../../shared/SmallSpinner/SmallSpinner";
import { useState } from "react";

const AddProduct = () => {
    const {user} = useContext(AuthProvider)
    const navigate = useNavigate()
    const [userLevel , isAdminLoading] = useAdmin(user?.email)
    const [loading , setLoading] = useState(false)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (Object.keys(userLevel).length === 0) {
    return;
  }
  if (userLevel.accountMode !== "seller") {
    return navigate("/");
  }

  const imgKey = process.env.REACT_APP_imgBB

//   console.log(imgKey);
  const handleNewCar = data => {

    setLoading(true)
    const date = format(new Date() , 'PP')
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
    
    fetch(url , {
        method : 'POST',
        body : formData
    })
    .then(res => res.json())
    .then(img => {
        if(img.success){
            const newCarData = {
                carName : data.carName,
                location: data.location,
                description : data.description,
                condition: data.condition,
                sellerNo : data.sellerNo,
                Availability : 'available',
                salePrice : parseInt(data.salePrice),
                originalPrice : parseInt(data.salePrice) + 30000,
                uses : "2 Years",
                seller : user?.displayName.split(" ")[0],
                verified : false,
                advertised:false,
                pubDate : date,
                category : data.category.split(" ")[0],
                categoryId : data.category.split(" ")[1],
                img : img.data.url,
                email : user?.email
             
            }

            console.log(newCarData);
            fetch(`${process.env.REACT_APP_url}/allcars` , {
                method : 'POST',
                headers :{
                    'content-type' : 'application/json',
                    authorization : `bearer ${localStorage.getItem('resaleToken')}`    
                },
                body : JSON.stringify(newCarData)
            })
            .then(res => res.json())
            .then(data =>{
                toast.success(`${newCarData.carName} is now added successfully`)
                setLoading(false)
                navigate('/dashboard/myproducts')
            })
            .catch(err =>{
              setLoading(false)
            })
            
    
        }
    })


    }
    


  return (
    <div className="my-6 container mx-auto">
      {
        isAdminLoading ? <SmallSpinner/> : 
        <div className=" shadow py-9 px-5 my-20 w-2/5 bg-gray-50 mx-auto">
        <h2 className="font-semibold text-2xl text-center">Add A New Car</h2>

        <form className="" onSubmit={handleSubmit(handleNewCar)}>
          <input
            type="text"
            placeholder="Enter Car Name"
            {...register("carName", { required: true })}
            className="border-0 w-full outline-none bg-gray-200 px-3 py-3 mt-5 text-slate-900 placeholder-gray-500"
          />
          {errors.carName && (
            <span className="text-red-500">Please enter car name</span>
          )}
          <div className="grid md:grid-cols-2 gap-2 justify-between items-center">
            <div className="mt-5">
              <select   value={"Select Category"}
                className="select w-full max-w-xs bg-gray-200 text-slate-900 placeholder-gray-500 rounded-none"
                {...register("category", { required: true })}
              >
                <option defaultChecked disabled >
                  Select category
                </option>
                 
                <option value="Mercedes 637f95669789df96bf37080b">Mercedes-Benz</option>
                <option value="Audi 637f95669789df96bf37080d">Audi</option>
                <option value="Nissan 637f95669789df96bf37080c">Nissan</option>
              </select>
              {errors.category && (
                <span className="text-red-500">Select a category</span>
              )}
            </div>

            <div className="mt-5">
              <select 
                className="select w-full max-w-xs bg-gray-200 text-slate-900 placeholder-gray-500 rounded-none"
                {...register("condition", { required: true })}
              >
                <option defaultChecked disabled >
                  Select Car Condition
                </option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Excellent">Excellent</option>
              </select>
              {errors.condition === "Select Car Condition"  && (
                <span className="text-red-500">Please Select Car Condition option</span>
              )}
            </div>
          </div>

          <div className="flex justify-between item-center gap-2">
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                {...register("sellerNo", { required: true })}
                className="border-0 w-full outline-none bg-gray-200 px-3 py-3 mt-5 text-slate-900 placeholder-gray-500"
              />
              {errors.sellerNo && (
                <span className="text-red-500">Phone Number is required</span>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Location"
                {...register("location", { required: true })}
                className="border-0 w-full outline-none bg-gray-200 px-3 py-3 mt-5 text-slate-900 placeholder-gray-500"
              />
              {errors.location && (
                <span className="text-red-500">Location is required</span>
              )}
            </div>
            <div>
              <input
                type="number"
                placeholder="Enter Price"
                {...register("salePrice", { required: true })}
                className="border-0 w-full outline-none bg-gray-200 px-3 py-3 mt-5 text-slate-900 placeholder-gray-500"
              />
              {errors.salePrice && (
                <span className="text-red-500">Price is required</span>
              )}
            </div>
          </div>

          <div>
            <textarea
            {...register("description", { required: true })}
              className="textarea rounded-none w-full bg-gray-200 mt-5"
              placeholder="Enter Description "
            ></textarea>
            {errors.description && (
                <span className="text-red-500">Description is required</span>
              )}
            <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs mt-5"  placeholder="Upload Image"/>
            {errors.image && (
                <span className="text-red-500">Select a image</span>
              )}
          </div>

         {
          loading ? <SmallSpinner/> :  <input type="submit" value="Add New Car" className="w-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer py-3 mt-6 font-semibold text-xl"/>
         }

        </form>
      </div>
      }
    </div>
  );
};

export default AddProduct;
