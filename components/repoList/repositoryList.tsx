import Card from "./repoCard"

export default function RepoList({repoData}){
    return (
        <div className="w-[53vw] overlfow-scroll mb-8">
            <div className="flex flex-row gap-4">
            {repoData.map((props) => {
                return <Card name={props.name} desc={props.desc} link={props.link} topics={props.topics}/> 
            })}   
            </div>
        </div>
        
    )
}