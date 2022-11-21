import Top from "../../components/top"
import { useRouter } from "next/router"
import Right from "../../components/right/right"
import Mid from"../../components/mid/mid";
import { useEffect, useState } from "react"
import Sidebar from "../../components/sidebar/sidebarWrapper"
import Loading from "../../components/loading"


export default function Home() {

    const router = useRouter();
    let {org} = router.query;
    const [load,setLoading] = useState(true);

    const url = "http://localhost:3060/"+org;
    const [data,setData] = useState({
        org:{
          orgName:'',
          orgDesc:'',
          orgLink:''
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
          if(data.response === "false request")
            router.push("/access")
            else{
              setData(data);
            setLoading(false);
            } 
        }
        );
        // console.log(url);
        
    },[]);

  return (
    <div>
      {load? <Loading/>:
          <div className="flex flex-col">
            <Top/>
            <div className="h-[90vh] flex flex-row w-screen">
              <Sidebar orgName={data.org.orgName} data={data.orgData.repos}/>
              <Mid data={data}/>
              <Right orgName={data.org.orgName} orgDesc={data.org.orgDesc} orgLink={data.org.orgLink}/>
            </div>
          </div>
      } 
    </div>  
  )
}
