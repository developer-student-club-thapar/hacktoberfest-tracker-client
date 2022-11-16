import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Sidebar from "../../components/sidebar/sidebarWrapper"
import Top from "../../components/top"

type repo = {
    "name":string,
    "totalCommits":any,
    "totalIssues":number,
    "members":any,
    "issues":any
}

const Dashboard = () => {

    const router = useRouter();
    const {id} = router.query;
    const url = "http://localhost:3060/"+id
    const [data,setData] = useState({
        orgName:'',
        data:['']
    })
    useEffect(() => {
        fetch(url,{
            'method': 'GET',
            'headers': {
                Accept: 'application/json',
            'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setData(data);
        }
        );
        // console.log(url);
        
    },[]);

    return (
        <div className="h-screen">
            <Top/>
            <Sidebar orgName={data.orgName} data={data.data}/>
        </div>
    )
}

export default Dashboard