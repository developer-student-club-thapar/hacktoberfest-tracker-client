import { useRouter } from "next/router";
import { useState } from "react";


const Access = () => {

    const [username,setUserName] = useState('');
    const router = useRouter();

    const handleChange = (e:any) => {
        setUserName(e.target.value)
    }

    const handleSubmit = (e) => {
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
        <div className='container h-screen w-screen flex justify-center items-center drop-shadow-2xl'>
            <div className='p-8 rounded-lg flex flex-col font-sans text-md bg-slate-600'>
                <label className="mb-2 text-slate-300">Organization username</label>
                <input className="bg-slate-800 rounded-lg px-2.5 py-1 text-white" onChange={handleChange} name="username" value={username}/>
                <button className="text-white bg-indigo-500 w-24 self-center mt-4 rounded-md py-1 font-semibold"  onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Access;