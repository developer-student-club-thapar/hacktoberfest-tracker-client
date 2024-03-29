import Top from "../../src/components/top"
import Right from "../../src/components/right/right"
import Mid from"../../src/components/mid/mid";
import { useState } from "react"
import Sidebar from "../../src/components/sidebar/sidebarWrapper"
import { useRouter } from "next/router"

export default function Home({data}:any) {

    const router = useRouter();
    const org= router.query;
    
    const [page,setPage] = useState(true);

  return (
    <div>
          <div className="flex flex-col h-screen">
            <Top/>
            <div className="flex flex-row w-screen justify-between h-full py-2">
              <Sidebar orgName={data.name} data={data.repos} setDisplayData={setPage}/>
              <Mid data={data} displayData={page}/>
              <Right orgName={data.name} orgDesc={data.desc} orgPic={data.avatar_url} orgLink={data.url} contributors={data.repos}/>
            </div>
          </div>

      {/* {load? <Loading/>:
      }  */}
    </div>  
  )
}

export async function getServerSideProps({params, req, res}:any) {
  const url = `http://localhost:3000/api/${params.org}`;
  const response = await fetch(url,{
    'method': 'GET',
    'headers': {
        Accept: 'application/json',
    'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  return {
    props: {
      data
    }
  }
}

//   const url = "http://localhost:3060/"+org;
  //   const [data,setData] = useState({
  //       org:{
  //         orgName:'',
  //         orgDesc:'',
  //         orgLink:'',
  //         photo:' '
  //       },
  //       orgData:{
  //         commits:0,
  //         issues:0,
  //         contributors:0,
  //         repoCount:0,
  //         repos:[{
  //           name:'',
  //           desc:'',
  //           topics:[''],
  //           link:'',
  //           topContributor:{
  //             name:'',
  //             photo:'',
  //             contributions:''
  //           }
  //         }]
  //     }
  //   });

  //   const [repoData,setRepoData] = useState({
  //       totalCommits:0,
  //       issues:[{
  //         number:0,
  //         title:"",
  //         user:"",
  //         body:""
  //       }],
  //       members:[{
  //         name:"",
  //         photo:"",
  //         login:"",
  //         contributions:""
  //       }],
  //       totalContributors:0,
  //       totalIssues:0
  //   })

  //   useEffect(() => {
  //     fetch(url,{
  //         'method': 'GET',
  //         'headers': {
  //             Accept: 'application/json',
  //         'Content-Type': 'application/json'
  //         }
  //     }).then((response) => {
  //         return response.json();
  //     }).then((data) => {
  //           setData(data);
  //           setLoading(false);
  //     }
  //     );
  //     // console.log(url);
      
  // },[]);