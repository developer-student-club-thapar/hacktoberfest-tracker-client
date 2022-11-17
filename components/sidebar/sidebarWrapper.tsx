import List from "./repoNavigation";

const Sidebar = ({orgName,data}) => {

    return (
        <div className='h-full text-xl w-[22vw] bg-componentLight flex flex-col p-4'>
            <button className="font-semibold text-2xl my-6 bg-slate-300">{orgName}</button>
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