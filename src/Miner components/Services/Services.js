import React from 'react';

const Services = () => {
  return (
    <>
        <h2 className="text-4xl font-bold relative w-full text-center mt-10">Services we offer</h2>
    <div className="flex flex-col mt-10 gap-10 md:flex-row justify-around my-13 mb-10 px-10">
      <div className="relative h-[40vh] w-full md:w-[32%]  p-10 rounded-lg shadow-md text-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1705955463252-e3f670e4041b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundPosition: 'center',backgroundSize:"cover" }}>
        <div className="absolute inset-0 bg-blue-100 bg-opacity-60 flex flex-col justify-center z-10 rounded-lg">
        <h2 className="text-xl font-bold relative">Buy Lands and Plots</h2>
        <div className='w-full flex flex-col items-center'><p className="mt-2 w-[70%]">Discover prime lands and plots for your dream home or investment. Explore various options available in your desired location.</p>
        <button className="mt-4 bg-blue-500 w-fit text-white px-4 py-2 rounded-lg">Explore Buying Commercial</button></div></div>
      </div>
      <div className="relative h-[40vh] w-full md:w-[32%] flex flex-col justify-center p-5 rounded-lg shadow-md text-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1640531783776-abf014a39f7f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundPosition: 'center',backgroundSize:"cover" }}>
        <div className="absolute inset-0 flex flex-col justify-center bg-green-100 bg-opacity-50 rounded-lg">
        <h2 className="text-xl font-bold relative">Sell Lands and Plots</h2>
        <div className='w-full flex flex-col items-center'><p className="mt-2 w-[70%]">Unlock the potential of your property. List your lands and plots for sale and connect with interested buyers.</p>
        <button className="mt-4 bg-green-500 text-white w-fit px-4 py-2 rounded-lg">Explore Selling Lands & Plots</button></div></div>
      </div>
      <div className="relative h-[40vh] w-full md:w-[32%] flex flex-col justify-center p-5 rounded-lg shadow-md text-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1539268222734-fb0aa2d0d679?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundPosition: 'contain', backgroundSize:"cover" }}>
        <div className="absolute inset-0 flex flex-col justify-center bg-yellow-100 bg-opacity-50 rounded-lg">
        <h2 className="text-xl font-bold relative">Farmhouse Opportunities</h2>
        <div className='w-full flex flex-col items-center'><p className="mt-2 w-[70%]">Find your perfect farmhouse retreat. Explore options for buying or leasing farmhouses in serene locations.</p>
        <button className="mt-4 bg-yellow-500 text-white w-fit px-4 py-2 rounded-lg">Explore Farmhouse Options</button></div></div>
      </div>
    </div></>
  );
};

{/* <div className="relative h-[40vh] w-full md:w-[32%] p-10 rounded-lg shadow-md text-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600585154365-1c1c1c1c1c1c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundPosition: 'center' }}>
<div className="absolute inset-0 bg-blue-100 bg-opacity-60 flex flex-col justify-center z-10 rounded-lg">
<h2 className="text-xl font-bold relative">Buy Lands and Plots</h2>
<div className='w-full flex flex-col items-center'><p className="mt-2 w-[70%]">Discover prime lands and plots for your dream home or investment. Explore various options available in your desired location.</p>
<button className="mt-4 bg-blue-500 w-fit text-white px-4 py-2 rounded-lg">Explore Buying Lands</button></div></div>
</div>
<div className="relative h-[40vh] w-full md:w-[32%] flex flex-col justify-center p-5 rounded-lg shadow-md text-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600585154365-1c1c1c1c1c1c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundPosition: 'center' }}>
<div className="absolute inset-0 flex flex-col justify-center bg-green-100 bg-opacity-50 rounded-lg">
<h2 className="text-xl font-bold relative">Lease Lands and Plots</h2>
<div className='w-full flex flex-col items-center'><p className="mt-2 w-[70%]">Explore leasing options for lands and plots suitable for various purposes, including agriculture, residential, and commercial use.</p>
<button className="mt-4 bg-green-500 text-white w-fit px-4 py-2 rounded-lg">Explore Leasing Lands</button></div></div>
</div>
<div className="relative h-[40vh] w-full md:w-[32%] flex flex-col justify-center p-5 rounded-lg shadow-md text-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600585154365-1c1c1c1c1c1c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundPosition: 'center' }}>
<div className="absolute inset-0 flex flex-col justify-center bg-yellow-100 bg-opacity-50 rounded-lg">
<h2 className="text-xl font-bold relative">Farmhouse Opportunities</h2>
<div className='w-full flex flex-col items-center'><p className="mt-2 w-[70%]">Find your perfect farmhouse retreat. Explore options for buying or leasing farmhouses in serene locations.</p>
<button className="mt-4 bg-yellow-500 text-white w-fit px-4 py-2 rounded-lg">Explore Farmhouse Options</button></div></div>
</div> */}

export default Services;
