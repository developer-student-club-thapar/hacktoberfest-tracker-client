import Issues from "../issues/issues";
import RepoList from "../repoList/repositoryList";
import OrgDash from "./orgDash";

const Mid=({data}:any) =>{

    return(
            <div className="flex flex-col justify-between py-6 px-4 h-full w-[65vw] 2xl:w-[70vw]">
                {data?<RepoList repoData={data.repos}/>:null}
                {data?<OrgDash commits={data.totalCommits} contributors={data.totalPrOpen} repoCount={data.totalRepos} issues={data.totalIssues}/>:null}
                {data?<Issues data={data.totalIssues}/>:null}
                {data?<OrgDash commits={data.totalCommits} repoCount={1} issues={data.totalIssues}/>:null}
            </div>
    );
}

export default Mid;