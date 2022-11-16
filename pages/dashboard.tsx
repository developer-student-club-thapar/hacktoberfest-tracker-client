import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Sidebar from "../components/sidebar/sidebarWrapper"
import Top from "../components/top"

type repo = {
    "name":string,
    "totalCommits":any,
    "totalIssues":number,
    "members":any,
    "issues":any
}

const Dashboard = () => {

    const router = useRouter();
    const username = router.query;
    const [data,setData] = useState({
        orgName:'',
        data:['']
    })
    useEffect(() => {
        fetch("https://localhost:3060/"+username,{
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
    },[]);

    return (
        <div className="h-screen">
            <Top/>
            <Sidebar orgName={data.orgName} data={data.data}/>
        </div>
    )
}

export default Dashboard