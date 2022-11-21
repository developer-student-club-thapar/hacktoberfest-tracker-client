import Card from "./repoCard"

export default function RepoList({repoData}){
    return (
            <div className="w-full h-[30vh] mb-8 flex flex-row gap-4 overflow-x-scroll pt-4 pb-6 ">
            {repoData.map((props) => {
                return <Card name={props.name} desc={props.desc} link={props.link} topics={props.topics}/> 
            })}   
            </div>
        
    )
}