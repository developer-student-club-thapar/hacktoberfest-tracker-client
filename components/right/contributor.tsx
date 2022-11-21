import {BiGitMerge} from 'react-icons/bi'

const Contributor= (props:any)=>{
    return(
        <div className="flex flex-row w-full bg-contributorsDashLight mb-2 rounded-lg items-center gap-2 justify-between
            px-4 py-2 ">
                <div className='flex flex-row items-center gap-2'>
                    <img className='rounded-full w-10' src={props.data.photo} alt={props.data.name} />
                    <h3 className='text-sm text-left font-medium'>{props.data.name}</h3>
                </div>
            <div className='flex flex-row bg-contributorsDashNestedLight rounded-2xl 
                gap-2 h-fit px-2 py-1 justify-center items-center text-[#fff]'>
                <BiGitMerge size={15}/>
                <p className='text-xs font-thin'>{props.data.contributions}</p>
            </div>
        </div>
    );
}

export default Contributor;