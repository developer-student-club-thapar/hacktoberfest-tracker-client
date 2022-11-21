import { useState } from "react";

const List = ({name}) => {

    const [list,setList] = useState(false);

    const handleClick = () => {
        setList(!list)
    }

    const s='bg-navButtonLight text-[#fff] text-left text-xl w-full py-2 px-2 w-full flex flex-col items-start';
    const u='bg-componentLight text-[#000] text-left text-xl w-full py-2 px-2 w-full flex flex-col items-start';

    const sn='text-left text-base py-1 px-2 bg-navButtonNestedLight w-full text-left';
    const un= 'text-left text-base py-1 px-2 w-full text-left'

    return (
        <div className={list?s:u}>
            <button className="mb-1" onClick={handleClick}>{name.slice(0,1).toUpperCase()+name.slice(1,name.length)}</button>
            {list?
                <div className="flex flex-col items-start w-full mt-1">
                    <button className="text-left text-base py-1 px-2 bg-slate-300 bg-navButtonNestedLight w-full text-left">Dashboard</button>
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