const Banner = () => {
  return (
    // <div className="h-[70vh] flex justify-center items-center">
    //   <div className="card w-full h-[70vh] bg-base-100 rounded-none   opacity-100 image-full">
    //     <figure className="rounded-none"> 
    //       <img className="w-full rounded-none"
    //         src="https://i.ibb.co/wrPLV0B/fc1f79e18cdc1a12320b9b10ec3e253d.jpg"
    //         alt="community picture"
    //       />
    //     </figure>
    //     <div className="card-body flex justify-center items-center">
    //       <h2 className="card-title text-black text-center font-bold text-5xl">I Grow By Helping People In Need</h2>
          
    //       <div className="card-actions flex justify-center items-center mt-20 rounded ">
    //        <input type="text" placeholder="Search Here" className="w-3/4" />
    //        <button className="btn-primary rounded p-2 text-base font-medium w-1/4">Search</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div >
        <div className="banner-bg h-[70vh] m-10">
            <div className="bg-[#ffffffee] pt-20 pb-28">
                <h3 className="text-3xl text-black font-bold mt-12 mb-10 px-8 text-center">I Grow By Helping People In Need</h3>
                <div className="mb-20 rounded-lg overflow-hidden border flex mx-auto w-80  bg-gray-400">
                    <input type="text" className="outline-none w-60 py-2 bg-white" placeholder="Search Here..." />
                    <button className="pb-px px-4 text-white bg-red-400">Search</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
