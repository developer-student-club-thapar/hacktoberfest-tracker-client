import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props) {
    return (
        <div className='w-3/5 drop-shadow-lg flex flex-col h-48 rounded-lg bg-componentLight p-6 overflow-scroll'>
            <h1 className='text-xl font-semibold '>{props.name}</h1>
            <a href={props.link}><FontAwesomeIcon icon={faLink}/></a>
            <p className='text-[#8F8F8F] text-xs font-medium mb-2'>{props.desc}</p>
            <div className='flex flex-row gap-2 m-0 flex-wrap'>
                {props.topics.map((topic) => {
                return <div className='bg-[#BC5C82] rounded-xl text-[#FFF] px-2 py-.5 text-sm' >{topic}</div>
                })}
            </div>
        </div>
    )
}