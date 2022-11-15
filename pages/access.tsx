import { useRouter } from "next/router";
import { useState } from "react";

const Access = () => {
    const [username,setUserName] = useState('');
    const router = useRouter();

    const handleChange = (e:any) => {
        setUserName(e.target.value)
    }

    const handleSubmit = () => {
        const url = "https://localhost:3000/"+username;
        fetch(url,{
            'method': 'POST',
            'headers': {
                Accept: 'application/json',
            'Content-Type': 'application/json'
            }
        }).then((response) => {
            const data = response.json()
        }).then((data) => {
            if(data != null){
                console.log(data);
                router.push({
                    pathname:"/dashboard",
                    query:data
                });
            }
        }); 
    }

    return (
        <div className='container h-screen flex justify-center items-center drop-shadow-xl'>
            <div className='flex flex-col font-sans text-lg'>
                <label className="mb-4">Username</label>
                <input placeholder="Enter organization username" onChange={handleChange} name="username" value={username}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Access;