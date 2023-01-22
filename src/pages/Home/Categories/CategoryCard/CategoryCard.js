import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { name, catId, catImg } = category;
  return (
    <div className="md:mx-2">
      <div className="shadow-md rounded py-6">
        <img className="h-60 object-fill" src={catImg} alt="" />
        <div className="flex justify-between gap-5 px-5 md:px-10 items-center mt-7">
          <h3 className="text-xl font-bold">{name}</h3>
          <Link
            to={`/category/${catId}`}
            className="btn bg-yellow-400 hover:text-white border-0 text-base rounded text-slate-900"
          >
            See All Cars
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
