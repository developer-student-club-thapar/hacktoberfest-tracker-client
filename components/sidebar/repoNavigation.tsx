import { useState } from "react";

const List = ({name}) => {

    const [list,setList] = useState(false);

    const handleClick = () => {
        setList(!list)
    }

    return (
        <div>
            <h2 className={"font-semibold text-2xl my-6 bg-slate-300"} onClick={handleClick}>{name}</h2>
            {list?
                <div>
                    <button className="font-semibold text-2xl my-6 bg-slate-300">Dashboard</button>
                    <button className="font-semibold text-2xl my-6 bg-slate-300">Issues</button>
                    <button className="font-semibold text-2xl my-6 bg-slate-300">Contributors</button>
                </div>
            :
                null
            }
        </div>
    )
}

export default List;