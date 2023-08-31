import React from "react";
import Testimonials from "./Components/Testimonials";

import reviews from "./data";
const App = () => {
  return <div className=" bg-gray-200 flex flex-col justify-center w-[100vw] h-[100vh] items-center " >
    <h1 className=" text-4xl font-bold " >Our Testimonails</h1>
    <div className=" h-[4px] bg-violet-400 w-[170px] mt-1 " ></div>
    <Testimonials reviews={reviews} ></Testimonials>
  </div>;
};

export default App;
