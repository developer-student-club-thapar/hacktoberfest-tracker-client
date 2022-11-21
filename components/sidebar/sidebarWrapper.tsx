import { useState } from "react";
import List from "./repoNavigation";

const Sidebar = ({orgName,data}) => {

    const [selected, setSelected]= useState(true);
    const handleClick = () => {
        setSelected(!selected);
    }

    const s='bg-navButtonLight text-[#fff] text-left text-xl w-full py-2 px-2';
    const u='bg-componentLight text-[#000] text-left text-xl w-full py-2 px-2 ';

    return (
        <div className='h-full w-[22vw] bg-componentLight flex flex-col py-7 shadowProfile rounded-xl'>
            <button className={selected?s:u} onClick={handleClick}>{orgName}</button>
            {data.map((repo:any) => {
                    return (
                        <List name={repo.name} key={Math.random()}/> 
                    );
                })
            }
        </div>
    )
}

export default Sidebar