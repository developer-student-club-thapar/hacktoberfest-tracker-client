import List from "./repoNavigation"

const Sidebar = (data:any) => {

    return (
        <div className=''>
            <h1>{data.orgName}</h1>
            {data.data.forEach((repo:any) => {
                return (
                    <List name={repo.name}/> 
                );
            })}
        </div>
    )
}

export default Sidebar