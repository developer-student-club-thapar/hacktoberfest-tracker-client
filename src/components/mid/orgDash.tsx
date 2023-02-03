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
                        <h1 className="text-ChinaRoseLight font-semibold text-4xl 2xl:text-5xl">{props.contributors}</h1>
                        <h1 className="text-2xl font-normal 2xl:text-3xl">Total Contributors</h1>
                    </div>
                    <div className="flex flex-row gap-4 text-xl justify-evenly h-2/4">

                        <IconContext.Provider value={{ color: "#a3a3a3", size: '2em' }}> 
                            <div className="flex flex-col justify-center bg-bgLight p-4 w-2/3 items-center rounded-lg">
                                <BiGitCommit/>
                                <h1 className="text-ChinaRoseLight font-semibold text-3xl mt-1 2xl:text-4xl">{props.commits}</h1>
                                <h1 className="text-xl font-normal 2xl:text-2xl">Commits</h1>
                            </div>
                            <div className="flex flex-col justify-center bg-bgLight p-4 w-2/3 items-center rounded-lg">
                                <RiGitRepositoryLine/>
                                <h1 className="text-ChinaRoseLight font-semibold text-3xl mt-1 2xl:text-4xl">{props.repoCount}</h1>
                                <h1 className="text-xl font-normal 2xl:text-2xl">Repos</h1>
                            </div>
                            <div className="flex flex-col justify-center bg-bgLight p-4 w-2/3 items-center rounded-lg">
                                <AiOutlineIssuesClose/>
                                <h1 className="text-ChinaRoseLight font-semibold text-3xl mt-1 2xl:text-4xl">{props.issues}</h1>
                                <h1 className="text-xl font-normal 2xl:text-2xl">Issues</h1>
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