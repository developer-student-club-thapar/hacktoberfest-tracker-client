import Contributor from "./contributor";

const Contributors=(props:any) =>{
    return (
        <div className="flex flex-col bg-componentLight shadowProfile rounded-xl
            items-center py-6 px-4 w-full h-full">
            <h3 className="text-2xl font-semibold mb-4">Top Contributors</h3>

            {
                props.contributors.map((repo:any)=>{
                    return(
                        <Contributor data={repo.topContributor} repo={repo.name}/>
                    )
                })
            }
        </div>
    );
}

export default Contributors;