import React from "react";
import { BsGearFill, BsFillTrophyFill } from "react-icons/bs";
import { FaCar, FaUserTie } from "react-icons/fa";

const About = () => {
  const companyFeatures = [
    {
      id: 1,
      name: `WE'RE EXPERTS`,
      des: "There are many variations of passages of Lorem Ipsum",
      icon: <BsGearFill className="text-white text-3xl m-auto" />,
    },
    {
      id: 2,
      name: `WE'RE FRIENDLY`,
      des: "There are many variations of passages of Lorem Ipsum",
      icon: <FaUserTie className="text-white text-3xl m-auto" />,
    },
    {
      id: 3,
      name: `WE'RE ACCURATE`,
      des: "There are many variations of passages of Lorem Ipsum",
      icon: <FaCar className="text-white text-3xl m-auto" />,
    },
    {
      id: 4,
      name: `WE'RE TRUSTED`,
      des: "There are many variations of passages of Lorem Ipsum",
      icon: <BsFillTrophyFill className="text-white text-3xl m-auto" />,
    },
  ];

  return (
    <section className="my-14 container mx-auto">
      <div className="md:flex justify-between md:w-5/6 mx-auto items-center">
        <div className="md:w-1/2 md:px-0 px-4">
          <h2 className="text-2xl font-bold">ABOUT COMPANY</h2>
          <div className="h-2 w-14 mt-2 bg-slate-800"></div>
          <p className="text-base my-10">
            Welcome To Motor Motor is a Professional Car Seller Platform. Here
            we will provide you only interesting content, which you will like
            very much. We're dedicated to providing you the best of Car Seller,
            with a focus on dependability and Car selling. We're working to turn
            our passion for Car Seller into a booming online website. We hope
            you enjoy our Car Seller as much as we enjoy offering them to you. I
            will keep posting more important posts on my Website for all of you.
            Please give your support and love. Thanks For Visiting Our Site
          </p>
         
          <div className="mt-7">
            <div className="grid md:grid-cols-2 justify-between gap-7">
              {companyFeatures.map(company => {
                return (
                  <div key={company.id} className="flex justify-between gap-7 ">
                    <div className="bg-slate-800 h-24 flex w-1/3">
                      {company.icon}
                    </div>
                    <div className="h-24 w-2/3">
                      <h2 className="text-lg font-bold">{company.name}</h2>
                      <p className="pt-2 text-base">{company.des}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <img
            className="md:h-[600px] h-96 mx-auto"
            src="https://i.ibb.co/r0hFVs4/worker.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
