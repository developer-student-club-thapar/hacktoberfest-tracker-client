import {AiOutlineLink} from 'react-icons/ai';

export default function Card(props:any) {
    return (
        <div className='w-[16vw] shadowProfile2 h-full rounded-lg bg-componentLight py-6 px-4 flex flex-col'>
            <div className='h-1/4 flex flex-row justify-between'>
                <h1 className='text-xl font-semibold 2xl:text-2xl'>{props.name}</h1>
                <a href={props.url} target="_blank"><AiOutlineLink size={26}/></a>
            </div>
            <div className='h-2/4 overflow-y-scroll mb-[6px]'><p className='text-[#8F8F8F] text-xs font-medium 2xl:text-sm'>{props.desc}</p></div>
            <div className='m-0 flex flex-row overflow-x-scroll gap-1 overflow-y-hidden'>
                {props.topics.map((topic:any) => {
                return <div className='h-1/4'><p className='whitespace-nowrap bg-[#BC5C82] rounded-xl text-[#FFF] px-2 py-.5 text-sm '>{topic}</p></div>
                })}
            </div>
        </div>
    )
}