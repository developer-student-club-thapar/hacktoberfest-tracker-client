
import {useState} from "react"

export default function IssueSub ({issue}:any) {

    const [showMore,setShowMore] = useState(false)

    const handleClick = () => {
        setShowMore(!showMore)
    }

    return (
        <div className="flex flex-col bg-componentLight m-2">
            <div className="flex flex-row justify-start">
            <h1 className="mr-2">{issue.title}</h1>
            <p className="mr-2">#{issue.number}</p>
            <p>/{issue.user}</p>
            </div>
            {issue.body.length>100?<p>{showMore?issue.body:issue.body.slice(0,100)}<button onClick={handleClick}>{showMore?"...less":"...more"}</button></p>:<p>{issue.body}</p>}
            
        </div>
    )
}