import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props) {
    return (
        <div className='w-[16vw] drop-shadow-lg h-full rounded-lg bg-componentLight p-6 flex flex-col'>
            <div className='h-1/4 flex flex-row justify-between'>
                <h1 className='text-xl font-semibold '>{props.name}</h1>
                <a href={props.link} target="_blank"><FontAwesomeIcon icon={faLink}/></a>
            </div>
            <div className='h-2/4 overflow-y-scroll mb-[6px]'><p className='text-[#8F8F8F] text-xs font-medium mb-2'>{props.desc}</p></div>
            <div className='m-0 flex flex-row overflow-x-scroll gap-1 overflow-y-hidden'>
                {props.topics.map((topic) => {
                return <div className='h-1/4'><p className='whitespace-nowrap bg-[#BC5C82] rounded-xl text-[#FFF] px-2 py-.5 text-sm '>{topic}</p></div>
                })}
            </div>
        </div>
    )
}