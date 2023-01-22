import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../context/AuthConText";
import { useAdmin } from "../../../Hooks/useAdmin";

const MyOrders = () => {
  const { user } = useContext(AuthProvider);
  const [userLevel] = useAdmin(user?.email);
  const navigate = useNavigate();

  // if(userLevel.accountMode != 'buyer'){
  //   return navigate('/')
  // }

  console.log(userLevel);

  const url = `${process.env.REACT_APP_url}/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("resaleToken")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });

  if (Object.keys(userLevel).length === 0) {
    return;
  }
  if (userLevel.accountMode !== "buyer") {
    return navigate("/");
  }

 

  return (
    <section className="mt-10 md:mx-16 mx-2">
      {bookings?.length > 0 ? (
        <>
          {" "}
          <h2 className="text-xl font-semibold">
            You Have {bookings.length} Bookings
          </h2>
          <div className="my-10">
            {bookings.length > 0 && (
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="text-lg font-medium">Sl</th>
                    <th className="text-lg font-medium">Car</th>
                    <th className="text-lg font-medium">Name</th>
                    <th className="text-lg font-medium">Price</th>
                    <th className="text-lg font-medium">Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, i) => {
                    return (
                      <tr key={booking._id}>
                        <th>{i + 1}</th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={booking.image}
                                  alt={booking.carName}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="font-medium text-lg">
                          {booking.carName}
                        </td>
                        <td className="font-medium text-lg">
                          {" "}
                          ${booking.salePrice}
                        </td>
                        <th>
                          <button className="btn btn-primary btn-xs">
                            Pay Now
                          </button>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th className="text-lg font-medium">Sl</th>
                    <th className="text-lg font-medium">Car</th>
                    <th className="text-lg font-medium">Name</th>
                    <th className="text-lg font-medium">Price</th>
                    <th className="text-lg font-medium">Payment</th>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="my-14 w-96 mx-auto bg-gray-100 py-9 px-5">
            <h2 className="text-center text-2xl">
              Your Cart is empty
            </h2>
            <Link
              className="btn border-0 rounded-md flex justify-center btn-primary my-5"
              to={"/"}
            >
              {" "}
             Book a car{" "}
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default MyOrders;
