import {useState} from "react"

export default function IssueSub ({issue}:any) {

    const [showMore,setShowMore] = useState(false)

    const handleClick = () => {
        setShowMore(!showMore)
    }

    return (
        <div className=" bg-issuesLight rounded-lg py-2 px-4 text-[#fff]">
            <div className="flex flex-row justify-start items-center gap-2 mb-1">
                <div className="rounded-full bg-[#fff] p-1">
                    <p className="text-sm text-[#000]">#{issue.number}</p>
                </div>
                <h1 className="text-lg text-semibold 2xl:text-xl">{issue.title}</h1>
                <p className="text-sm text-[#f3f3f3]">/{issue.user}</p>
            </div>
            <div className="text-sm">
                {issue.body.length>100?<p>{showMore?issue.body:issue.body.slice(0,100)}<button onClick={handleClick}>{showMore?"...less":"...more"}</button></p>:<p>{issue.body}</p>}
            </div>
            
        </div>
    )
}