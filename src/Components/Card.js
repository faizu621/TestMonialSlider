
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
const Card=(props)=>{
    let review=props.review;
    return(
        <div className=' relative flex flex-col justify-center items-center ' >
            <img className=' absolute h-[140px] w-[140px] rounded-full bg-violet-400 top-[-75px] left-[40px] z-[10] ' src={review.image} ></img>
                <div className=' absolute h-[140px] w-[140px] rounded-full bg-violet-400 top-[-80px] left-[45px] z-[5] ' ></div>
            <div>
            </div>
            <div className=' mt-[60px] flex justify-center items-center flex-col ' >
                <p className=' tracking-wider text-2xl font-bold  ' >{review.name}</p>
                <p className='text-[14px] uppercase text-violet-400 ' > {review.job} </p>
            </div>

            <div className=' text-violet-400 text-center mt-5 ' >
                <FaQuoteLeft/>
            </div>

            <div className='mt-5 sm:px-[50px] px-2 text-center text-slate-500 ' >
                <p> {review.text} </p>
            </div>
            <div className=' mt-5 text-violet-400 '>
                <FaQuoteRight/>
            </div>

            
        </div>
    )
}
export default Card;