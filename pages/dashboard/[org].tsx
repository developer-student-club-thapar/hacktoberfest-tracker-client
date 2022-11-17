import Top from "../../components/top"
import Left from "../../components/left/left"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Sidebar from "../../components/sidebar/sidebarWrapper"
import RepoList from "../../components/repoList/repositoryList"


export default function Home() {

    const router = useRouter();
    const {org} = router.query;
    const url = "http://localhost:3060/"+org;
    const [data,setData] = useState({
        org:{
          orgName:'',
          orgDesc:''
        },
        data:{
          commits:0,
          issues:0,
          contributors:0,
          repoCount:0,
          repos:[]
      }
    });

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
    <div className="flex flex-col">
      <Top/>
      <div className="flex flex-row w-screen">
        <Sidebar orgName={data.org.orgName} data={data.data.repos}/>
        <div className="w-full flex flex-col">
          <RepoList repoData={data.data.repos}/>
        </div>
        {/* <Left/> */}
      </div>
    </div>
  )
}