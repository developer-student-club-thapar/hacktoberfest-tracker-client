import List from "./repoNavigation";
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = ({orgName,data}) => {

    return (
        <div className='drop-shadow-xl h-4/5 text-xl w-1/5 bg-componentLight flex flex-col text-slate-600'>
            <button className="font-semibold text-2xl my-6 bg-slate-300">{orgName}<FontAwesomeIcon icon={faCaretUp}/></button>
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