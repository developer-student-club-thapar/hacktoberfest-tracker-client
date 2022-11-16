import { useState } from "react";

const List = ({name}) => {

    const [list,setList] = useState(false);

    const handleClick = () => {
        setList(!list)
    }

    return (
        <div className="w-full flex flex-col">
            <button className="font-medium text-xl py-2 bg-slate-800" onClick={handleClick}>{name}</button>
            {list?
                <div className="flex flex-col items-start">
                    <button className="font-light text-base py-1 px-2 bg-slate-300">Dashboard</button>
                    <button className="font-light text-base py-1 px-2 bg-slate-300">Issues</button>
                    <button className="font-light text-base py-1 px-2 bg-slate-300">Contributors</button>
                </div>
            :
                null
            }
        </div>
    )
}

export default List;