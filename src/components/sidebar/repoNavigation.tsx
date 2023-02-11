import {useRouter} from "next/router"
import PropTypes, {InferProps} from 'prop-types';

const propTypes= {
    name:PropTypes.string,
    index:PropTypes.number,
    check:PropTypes.bool,
    setCheck:PropTypes.func,
    setDisplayData:PropTypes.func
}
type ComponentTypes = InferProps<typeof propTypes>;


const List = ({name,index,check,setCheck,setDisplayData}:ComponentTypes) => {

    const router = useRouter();
    const {org} = router.query

    console.log(org);
    
    
    const handleClick = (e:any) => {
        if(index == check.key)
            setCheck({key:-1})
        else
            setCheck({key:index});
        
        fetch("http://localhost:3060/"+org+"/"+e.target.name,{
                'method': 'GET',
                'headers': {
                    Accept: 'application/json',
                'Content-Type': 'application/json'
                }
            }).then((response) => {
                return response.json()
            }).then((data)=>{
                setRepoData(data);
                setDisplayData(false);
            })
    }

    const s='bg-navButtonLight text-[#fff] text-left text-xl w-full py-2 px-2';
    const u='bg-componentLight text-[#000] text-left text-xl w-full py-2 px-2 ';

    return (
        <div className="w-full flex flex-col items-start">
            <button className={check.key==index?s:u} onClick={handleClick} value={index} name={name} >{name.slice(0,1).toUpperCase()+name.slice(1,name.length)}</button>
            {/* {check.key==index?
                <div className="flex flex-col items-start">
                    <button className="font-light text-base py-1 px-2 bg-slate-300">Dashboard</button>
                    <button className="font-light text-base py-1 px-2 bg-slate-300">Issues</button>
                    <button className="font-light text-base py-1 px-2 bg-slate-300">Contributors</button>
                </div>
            :
                null
            } */}
        </div>

    )
}

export default List;