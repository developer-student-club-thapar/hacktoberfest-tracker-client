import Image from "next/image";
import hacktober from '../../public/hacktober.png';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const ProfileCard= (props:any)=>{
    return(
        <div className=" flex flex-col justify-center items-center py-[32px] px-[20px]
         bg-componentLight w-fit rounded-xl shadowProfile">
            
            <div className="mb-4 ">
                <Image className="rounded-full" src={hacktober} alt={'ok'} width={80}/>
            </div>

            <div className="flex flex-col items-center">
                <a href={props.link}> {/* org link */}
                    <h1 className="font-sans font-semibold underline-offset-2 text-xl text-center mb-2">{props.name}</h1> 
                </a>
                <h3 className="font-sans text-md text-center mb-1">{props.desc}</h3>  
            </div>
        </div>
    );
}

export default ProfileCard;