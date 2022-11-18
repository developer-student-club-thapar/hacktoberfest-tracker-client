import { useRouter } from "next/router";
import { useState } from "react";


const Access = () => {

    const [username,setUserName] = useState('');
    const router = useRouter();

    const handleChange = (e:any) => {
        setUserName(e.target.value)
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
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
                router.push("/dashboard/"+username)
            }    
        }); 
    }

    return (
        <div className='container h-screen w-[100vw] flex justify-center items-center drop-shadow-2xl'>
            <div className='shadow-[0_25px_30px_20px_rgba(148,163,184,0.8)] p-8 h-[18vh] rounded-lg flex flex-col font-sans bg-[#475569]'>
                <label className="font-sans mb-2 text-xl text-[#FFF]">Organization username</label>
                <input className="rounded-lg px-2.5 py-1 text-white w-[15vw]" onChange={handleChange} name="username" value={username}/>
                <button className="font-sans shadow-[0_4px_15px_6px_rgba(59,130,246,0.8)] text-[#FFF] bg-[#3b82f6] text-xl w-24 self-center mt-4 rounded-md py-1 font-semibold transition ease-in-out delay-150 hover:shadow-[rgba(79,70,229,0.8)] hover:scale-110 hover:bg-[#4f46e5] duration-300"  onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Access;