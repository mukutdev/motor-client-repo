import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../../context/AuthConText";
import { BsTrash } from "react-icons/bs";
import { useAdmin } from "../../../Hooks/useAdmin";
import { Link, useNavigate } from "react-router-dom";

const MyProduct = () => {
  const { user } = useContext(AuthProvider);
  const [products, setProducts] = useState([])
  const [userLevel] = useAdmin(user?.email)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_url}/allCars?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("resaleToken")}`,
        },
      })
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      });
  }, [user?.email]);

  console.log(products);

  if (Object.keys(userLevel).length === 0) {
    return;
  }
  if (userLevel.accountMode !== "seller") {
    return navigate("/");
  }

  return (
    <section className="mt-10 md:mx-16 mx-2">
     {
        products.length > 0 ? <> <h2 className="text-2xl font-semibold text-center">
        You Added {products.length} Cars
      </h2>
      <div className="my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-xl font-medium">Sl</th>
              <th className="text-xl font-medium">Car</th>
              <th className="text-xl font-medium">Name</th>
              <th className="text-xl font-medium">Price</th>
              <th className="text-xl font-medium">status</th>
              <th className="text-xl font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => {
              return (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.img} alt={product.carName} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold text-xl">{product.carName}</td>
                  <td className="font-semibold text-xl">
                    {" "}
                    ${product.salePrice}
                  </td>
                  <th>
                    <button
                      className={`btn border-0 rounded-sm text-slate-700 ${
                        product?.Availability === "available"
                          ? "bg-yellow-400 hover:bg-yellow-400"
                          : "bg-green-500 hover:bg-green-500"
                      } btn-xs`}
                    >
                      {product.Availability}
                    </button>
                    {product?.Availability === "available" && (
                      <button className="btn border-0 rounded-sm btn-primary btn-xs mx-2">
                        Advertise
                      </button>
                    )}
                  </th>

                  <th>
                    <div
                      className="tooltip tooltip-right"
                      data-tip="Delete"
                    >
                         <button className="h-10 w-10 mx-auto rounded-full bg-red-500 text-white"><BsTrash className="mx-auto" /></button>
                      
                    </div>
                  
                  </th>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th className="text-xl font-medium">Sl</th>
              <th className="text-xl font-medium">Car</th>
              <th className="text-xl font-medium">Name</th>
              <th className="text-xl font-medium">Price</th>
              <th className="text-xl font-medium">status</th>
              <th className="text-xl font-medium">Action</th>
            </tr>
          </tfoot>
        </table>
      </div></> : <div className="my-14 w-96 mx-auto bg-gray-100 py-9 px-5">
      <h2 className="text-center text-2xl" >You haven't added a car yet</h2>
      <Link className="btn border-0 rounded-md flex justify-center btn-primary my-5" to={'/dashboard/addproduct'}> Add A Product </Link>
      </div>
     }
    </section>
  );
};

export default MyProduct;
