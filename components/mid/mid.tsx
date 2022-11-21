import RepoList from "../repoList/repositoryList";
import OrgDash from "./orgDash";

const Mid=(props:any) =>{
    return(
            <div className="w-[70vw] flex flex-col py-6 px-4 h-full">
                <RepoList repoData={props.data.orgData.repos}/>
                <OrgDash commits={props.data.orgData.commits} contributors={props.data.orgData.contributors} repoCount={props.data.orgData.repoCount} issues={props.data.orgData.issues}/>
            </div>
    );
}

export default Mid;