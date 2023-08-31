import { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) =>{
    let reviews=props.reviews;
    
    const [index,setIndex]=useState(0);

    function leftHandler(){
        if(index-1<0)
        {
            setIndex(reviews.length-1);
        }
        else
        {
            setIndex(index-1);
        }
    }

    function rightHandler(){
        if(index+1>reviews.length-1)
        {
            setIndex(0);
        }
        else
        {
            setIndex(index+1);
        }
    }

    function surpriseHandler(){
        setIndex(Math.floor(Math.random() * reviews.length))
    }

    return(
        <div className=" w-[45vw] flex flex-col justify-center items-center bg-[white] mt-10 rounded-md " >
            <Card review={reviews[index]} />
            <div className=" mt-10 text-3xl text-violet-400 flex gap-3 justify-center items-center " >
                <button className=" cursor-pointer hover:text-violet-500 transition-all duration-200" >
                    <FiChevronLeft onClick={leftHandler} />
                </button>
                <button className=" cursor-pointer hover:text-violet-500 transition-all duration-200">
                    <FiChevronRight onClick={rightHandler}/>
                </button>
            </div>

            <div className=" mt-6 mb-10" >
                <button className="text-white bg-violet-400 px-10 py-2 text-[18px] font-bold rounded-md cursor-pointer hover:bg-violet-500 transition-all duration-200" onClick={surpriseHandler} >
                    Surprise Me
                </button>
            </div>
        </div>
    )
}
export default Testimonials;