import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "../components/loading";


const Access = () => {

    const [username,setUserName] = useState('');
    const [notVerified,setVerified] = useState(false);
    const router = useRouter();
    const [isLoading, setIsLoadinng] = useState(false)

    const handleChange = (e:any) => {
        setUserName(e.target.value)
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoadinng(true);
        const url = "http://localhost:3060/verify/"+username;
        fetch(url,{
            'method': 'POST',
            'headers': {
                Accept: 'application/json',
            'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((data) => {
            if(data.verified == true){
                router.push("/dashboard/"+username);
            } 
            else{
                setVerified(true);
            }   
        }); 
    }

    return (
        <>
        {
            !isLoading?
            <div className='h-screen w-screen bgok bg-fixed bg-center bg-no-repeat bg-cover'>
                <div className="flex flex-col w-1/2 h-full px-4 justify-center items-center">
                    <h1 className="text-4xl font-semibold text-[#fff] mb-8">Hacktoberfest Tracker</h1>
                    <div className='rounded-lg flex flex-col justify-center items-center py-6 w-1/2 shadowProfile bg-contributorsDashNestedLight'>
                        <label className="font-sans text-xl text-[#FFF]">Organization username</label>
                        {notVerified?<p className="text-[#e11d48] mb-1">*User not found</p>:null}
                        <input className="bg-[#94a3b8] active-[#6366f1] rounded-lg px-2.5 py-1 text-[#e2e8f0] w-[15vw]" onChange={handleChange} name="username" value={username}/>
                        <button className="font-sans shadow-[0_4px_40px_6px_rgba(99,102,241,0.8)] text-[#e2e8f0] bg-[#6366f1] text-xl w-24 self-center mt-6 rounded-md py-1 font-semibold transition ease-in-out delay-150 hover:shadow-[rgba(79,70,229,0.8)] hover:scale-110 hover:bg-[#4f46e5] duration-300"  onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            :
            <Loading/>
        }
        </>
    )
}

export default Access;