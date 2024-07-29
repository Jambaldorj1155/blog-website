
import { Grid } from './Grid'
import { Trending } from './Trending'



export const Container = () => {
    return(
        <div className='flex h-[1200px] flex-col items-center gap-[100px]'>
            <div className='w-[1216px] h-[651px] flex-shrink-0'>
            
               <Grid></Grid>
                <Trending></Trending>
                
                

            </div>
        </div>
    )
}

