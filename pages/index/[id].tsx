import Top from "../../components/top"
import Left from "../../components/left"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Sidebar from "../../components/sidebar/sidebarWrapper"


export default function Home() {

  const router = useRouter();
    const {id} = router.query;
    const url = "http://localhost:3060/"+id
    const [data,setData] = useState({
        orgName:'',
        data:['']
    })
    // useEffect(() => {
    //     fetch(url,{
    //         'method': 'GET',
    //         'headers': {
    //             Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //         }
    //     }).then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         setData(data);
    //     }
    //     );
    //     // console.log(url);
        
    // },[]);

  return (
    <div className="flex flex-col">
      <Top/>
      <div className="flex flex-row w-screen">
        <Sidebar orgName={data.orgName} data={data.data}/>
        <div className="w-full">

        </div>
        <Left/>
      </div>
    </div>
  )
}
