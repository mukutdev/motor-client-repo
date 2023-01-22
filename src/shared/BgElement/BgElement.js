import React from 'react';

const BgElement = ({content}) => {
    // https://i.ibb.co/M9dJrZC/category-bg.jpg
    return (
        <div
        style={{ backgroundImage: `url(https://i.ibb.co/M9dJrZC/category-bg.jpg)` }}
        className="md:h-96 h-64 bg-cover flex items-center justify-center"
      >
        <h2 className="text-3xl uppercase tracking-widest text-center text-white font-semibold">
          {content}
        </h2>
      </div>
    );
};

export default BgElement;