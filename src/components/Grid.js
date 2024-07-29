
import Image from '../assets/Image.png'
import Back from '../assets/back.png'
import Forward from '../assets/forward.png'

export const Grid = () => {
    return(
        <div>
      
            <img className='absolute' src={Image}></img>            
         
            <div className='flex w-[598px] p-[40px] flex-col items-start gap-[24px] rounded-xl bg-white relative top-80 ml-[11px]'>
                <div className='flex flex-col items-start gap-[16px] self-stretch'>
                <div className='flex py-1 px-2.5 justify-center items-center gap-1 rounded-md  bg-[#4B6BFB]'>
                <p className='text-xs text-white not-italic font-medium leading-5'>Technology</p>
                </div>
                <p className='self-stretch font-sans text-4xl font-semibold not-italic leading-10'>Grid system for better Design User Interface</p>

                </div>
                <div className='flex items-center gap-[20px]'>
                <p className='flex'>August 20, 2022</p>
                </div>
            </div>
            <div className='inline-flex justify-center items-center'>
            <img src={Forward}></img>
            </div>
            <div className='inline-flex justify-center items-center'>
            <img src={Back}></img>

        </div>
        </div>
    )
}