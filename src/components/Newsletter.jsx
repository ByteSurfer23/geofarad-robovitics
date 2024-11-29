import React from 'react';
import Form from './Form';
import OurBrands from './OurBrands';

const Newsletter = () => {
  return (
    <>
      <OurBrands />
      <Form />
      <div className="relative bg-red-500 text-white py-12 text-center w-full overflow-hidden"> 
        <img 
          src="src\assets\bgnew.jpg"
          alt="Newsletter Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-black text-xl uppercase mb-2 opacity-30">Newsletter</h2>
          <h1 className="text-4xl font-bold mb-4">Subscribe Now</h1>
          <p className="text-lg mb-8">
            Stay Updated and keep up with all the latest products that are launching soon!
          </p>
          <div className="flex justify-center items-center mx-auto max-w-lg">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 py-3 px-4 text-black text-base border-none"
            />
            <button className="bg-red-800 text-white py-3 px-8 font-bold text-base">
              Subscribe
            </button>
          </div>
          <p className="text-lg mb-8 mt-[40px]">
            *Don't worry we won't spam you!
          </p>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
