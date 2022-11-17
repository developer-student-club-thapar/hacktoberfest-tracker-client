import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props) {
    return (
        <div className='flex flex-col w-64 rounded-lg bg-componentLight m-2 p-4'>
            <h1>{props.name}</h1>
            <a href={props.link}><FontAwesomeIcon icon={faLink}/></a>
            <p>{props.desc}</p>
            <div className='flex flex-row gap-4 flex-wrap m-0'>
                {props.topics.map((topic) => {
                return <div className='bg-[#000] rounded-xl text-[#FFF] px-1'>{topic}</div>
                })}
            </div>
        </div>
    )
}