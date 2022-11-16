import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <a><FontAwesomeIcon icon={faLink}/></a>
            <p>{props.desc}</p>
            {props.topics.map((topic) => {
                return <div>{topic}</div>
            })}
        </div>
    )
}