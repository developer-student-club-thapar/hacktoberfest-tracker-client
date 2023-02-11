import { useState } from "react";
import List from "./repoNavigation";
import PropTypes, {InferProps} from 'prop-types';

const propTypes= {
    orgName:PropTypes.string,
    data:PropTypes.array,
    setDisplayData:PropTypes.func
}
type ComponentTypes = InferProps<typeof propTypes>;

const Sidebar = ({orgName,data,setDisplayData}:ComponentTypes) => {

    const [highlight,setHighlight] = useState({
        key:data.length+1
    })
    const handleClick = () => {
        if(highlight.key == data.length+1)
            setHighlight({key:-1})
        else
            setHighlight({key:data.length+1})
        
        setDisplayData(true)
    }

    const s='bg-navButtonLight text-[#fff] text-left text-xl w-full py-2 px-2';
    const u='bg-componentLight text-[#000] text-left text-xl w-full py-2 px-2 ';

    return (
        <div className='h-full bg-componentLight flex flex-col py-7 shadowProfile rounded-xl '>

            <h3 className="ml-1 mb-1 text-lg font-medium text-[#a3a3a3] 2xl:text-xl">Organisation</h3>
            <button className={highlight.key == data.length+1?s:u} onClick={handleClick}>{orgName}</button>

            <h3 className="ml-1 mb-1 mt-4 text-lg font-medium text-[#a3a3a3] 2xl:text-xl">Repositories</h3>
            {data.map((repo:object,index:number) => {
                    return (
                        <List name={repo.name} key={Math.random()} index={index} check={highlight} setCheck={setHighlight} setDisplayData={setDisplayData}/> 
                    );
                })
            }
        </div>
    )
}

export default Sidebar