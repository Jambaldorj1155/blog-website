import Lgo from '../assets/Lgo.png'
import Search from '../assets/search.png'


export const Navbar = () => {
    return(
        <div className='flex flex-row px-[350px] py-[32px]'>
          <img src={Lgo} className='w-[158px] h-[36px]'></img>
          <div className='flex ml-[118px] '>
            <div className='flex w-[667px] justify-center gap-[40px]'>
                <p className='text-base text-slate-600 font-normal'>Home</p>
                <p className='text-base text-slate-600 font-normal'>Blog</p>
                <p className='text-base text-slate-600 font-normal'>Contact</p>
            </div>
            <div className='flex bg-[#F4F4F5]  items-center w-[166px] justify-between py-2 '>
                <div className='ml-[16px]'>Search</div>
              
                <div className='h-4 w-4 flex mr-[10px]'><img src={Search}></img></div>
                
            </div>

          </div>
        </div>
    )
    
}

