import { useState } from "react";
import List from "./repoNavigation";

const Sidebar = ({orgName,data}:any) => {

    const [highlight,setHighlight] = useState({
        key:data.length+1
    })
    const handleClick = () => {
        if(highlight.key == data.length+1)
            setHighlight({key:-1})
        else
            setHighlight({key:data.length+1})

    }

    const s='bg-navButtonLight text-[#fff] text-left text-xl w-full py-2 px-2';
    const u='bg-componentLight text-[#000] text-left text-xl w-full py-2 px-2 ';

    return (
        <div className='h-full w-[24vw] bg-componentLight flex flex-col py-7 shadowProfile rounded-xl
            2xl:w-30'>

            <h3 className="ml-1 mb-1 text-lg font-medium text-[#a3a3a3]">Organisation</h3>
            <button className={highlight.key == data.length+1?s:u} onClick={handleClick}>{orgName}</button>

            <h3 className="ml-1 mb-1 mt-2 text-lg font-medium text-[#a3a3a3]">Repositories</h3>
            {data.map((repo:any,index:number) => {
                    return (
                        <List name={repo.name} key={Math.random()} index={index} check={highlight} setCheck={setHighlight}/> 
                    );
                })
            }
        </div>
    )
}

export default Sidebar