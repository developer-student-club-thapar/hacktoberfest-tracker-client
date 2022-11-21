import { useState } from "react";
import List from "./repoNavigation";

const Sidebar = ({orgName,data}) => {

    const [selected, setSelected]= useState(true);
<<<<<<< Updated upstream
    const [highlight,setHighlight] = useState({
        key:-1
    })
    const handleClick = () => {
        if(highlight.key == data.length+1)
            setHighlight({key:-1})
        else
            setHighlight({key:data.length+1})

=======
    const handleClick = () => {
        setSelected(!selected);
>>>>>>> Stashed changes
    }

    const s='bg-navButtonLight text-[#fff] text-left text-xl w-full py-2 px-2';
    const u='bg-componentLight text-[#000] text-left text-xl w-full py-2 px-2 ';

    return (
        <div className='h-full w-[22vw] bg-componentLight flex flex-col py-7 shadowProfile rounded-xl'>
<<<<<<< Updated upstream
            <button className={highlight.key == data.length+1?s:u} onClick={handleClick}>{orgName}</button>
            {data.map((repo:any,index:number) => {
=======
            
            <h3 className="font-medium text-[#a3a3a3] ml-1 mb-1">Organisation</h3>
            <button className={selected?s:u} onClick={handleClick}>{orgName}</button>

            <h3 className="mt-4 font-medium text-[#a3a3a3] ml-1 mb-1">Repositories</h3>
            {data.map((repo:any) => {
>>>>>>> Stashed changes
                    return (
                        <List name={repo.name} key={Math.random()} index={index} check={highlight} setCheck={setHighlight}/> 
                    );
                })
            }
        </div>
    )
}

export default Sidebar