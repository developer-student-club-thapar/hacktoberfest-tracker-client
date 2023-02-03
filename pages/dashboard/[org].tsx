import Top from "../../src/components/top"
import { useRouter } from "next/router"
import Right from "../../src/components/right/right"
import Mid from"../../src/components/mid/mid";
import { useEffect, useState } from "react"
import Sidebar from "../../src/components/sidebar/sidebarWrapper"
import Loading from "../../src/components/loading"


export default function Home() {

    const router = useRouter();
    let {org} = router.query;
    const [load,setLoading] = useState(true);
    const [page,setPage] = useState(true);

    const url = "http://localhost:3060/"+org;
    const [data,setData] = useState({
        org:{
          orgName:'',
          orgDesc:'',
          orgLink:'',
          photo:' '
        },
        orgData:{
          commits:0,
          issues:0,
          contributors:0,
          repoCount:0,
          repos:[{
            name:'',
            desc:'',
            topics:[''],
            link:'',
            topContributor:{
              name:'',
              photo:'',
              contributions:''
            }
          }]
      }
    });

    const [repoData,setRepoData] = useState({
        totalCommits:0,
        issues:[{
          number:0,
          title:"",
          user:"",
          body:""
        }],
        members:[{
          name:"",
          photo:"",
          login:"",
          contributions:""
        }],
        totalContributors:0,
        totalIssues:0
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
            setLoading(false);
      }
      );
      // console.log(url);
      
  },[]);

  return (
    <div>
      {load? <Loading/>:
          <div className="flex flex-col">
            <Top/>
            <div className="h-[90vh] flex flex-row w-screen justify-between">
              <Sidebar orgName={data.org.orgName} data={data.orgData.repos} setRepoData={setRepoData} setDisplayData={setPage}/>
              <Mid data={page?data:repoData} displayData={page}/>
              <Right orgName={data.org.orgName} orgDesc={data.org.orgDesc} orgPic={data.org.photo} orgLink={data.org.orgLink} contributors={data.orgData.repos}/>
            </div>
          </div>
      } 
    </div>  
  )
}
