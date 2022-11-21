import Issues from "../issues/issues";
import RepoList from "../repoList/repositoryList";
import OrgDash from "./orgDash";

const Mid=(props:any) =>{

    return(
            <div className="flex flex-col justify-between py-6 px-4 h-full w-[65vw] 2xl:w-[70vw]">
                {props.displayData?<RepoList repoData={props.data.orgData.repos}/>:null}
                {props.displayData?<OrgDash commits={props.data.orgData.commits} contributors={props.data.orgData.contributors} repoCount={props.data.orgData.repoCount} issues={props.data.orgData.issues}/>:null}
                {!props.displayData?<Issues data={props.data.issues}/>:null}
                {!props.displayData?<OrgDash commits={props.data.totalCommits} contributors={props.data.totalContributors} repoCount={1} issues={props.data.totalIssues}/>:null}
            </div>
    );
}

export default Mid;