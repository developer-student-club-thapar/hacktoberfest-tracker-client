import {BiGitCommit} from 'react-icons/bi';
import {RiGitRepositoryLine} from 'react-icons/ri';
import {AiOutlineIssuesClose} from 'react-icons/ai';
import { IconContext } from "react-icons";

const OrgDash = (props:any) => {
    return (
        <>
            <h1 className="font-semibold font-sans text-4xl my-4">Contributions</h1>
            
            <div className="h-[40vh] flex flex-row gap-2 bg-componentLight p-6 rounded-lg shadowProfile2">
                <div className="flex flex-col gap-4 w-2/4 h-full">
                    <div className="bg-bgLight flex flex-col justify-center p-8 text-center rounded-lg h-2/4">
                        <h1 className="text-ChinaRoseLight font-semibold text-4xl">{props.contributors}</h1>
                        <h1 className="text-2xl font-normal">Total Contributors</h1>
                    </div>
                    <div className="flex flex-row gap-4 text-xl justify-evenly h-2/4">

                        <IconContext.Provider value={{ color: "#a3a3a3", size: '1.5em' }}> 
                            <div className="flex flex-col justify-center bg-bgLight p-4 w-2/3 items-center rounded-lg">
                                <BiGitCommit/>
                                <h1 className="text-ChinaRoseLight font-semibold text-3xl mt-1">{props.commits}</h1>
                                <h1 className="text-xl font-normal">Commits</h1>
                            </div>
                            <div className="flex flex-col justify-center bg-bgLight p-4 w-2/3 items-center rounded-lg">
                                <RiGitRepositoryLine/>
                                <h1 className="text-ChinaRoseLight font-semibold text-3xl mt-1">{props.repoCount}</h1>
                                <h1 className="text-xl font-normal">Repos</h1>
                            </div>
                            <div className="flex flex-col justify-center bg-bgLight p-4 w-2/3 items-center rounded-lg">
                                <AiOutlineIssuesClose/>
                                <h1 className="text-ChinaRoseLight font-semibold text-3xl mt-1">{props.issues}</h1>
                                <h1 className="text-xl font-normal">Issues</h1>
                            </div> 
                        </IconContext.Provider>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default OrgDash