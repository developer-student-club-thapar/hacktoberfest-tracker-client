import Card from "./repoCard"

export default function RepoList({repoData}){
    return (
        <div className="">
            {repoData.map((props) => {
                return <Card name={props.name} desc={props.desc} link={props.link} topics={props.topics}/> 
            })}   
        </div>
    )
}