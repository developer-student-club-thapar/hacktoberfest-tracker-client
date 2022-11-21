import Image from "next/image";
import hacktober from '../../public/hacktober.png';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const ProfileCard= ()=>{
    return(
        <div className=" flex flex-col justify-center items-center py-[32px] px-[20px]
         bg-componentLight w-fit rounded-xl shadowProfile">
            
            <div className="mb-[16px] ">
                <Image className="rounded-full" src={hacktober} alt={'ok'} width={80}/>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="font-sans font-semibold text-2xl">Servatom</h1> {/* org name */}
                <h3 className="font-sans text-xl">Building Something Great!</h3>  {/* org description */}
                <div className="flex flex-row gap-[10px] text-[20px]">
                    <a href="https://google.com"><AiFillGithub /></a>       {/* org github link */}
                    <a href="https://google.com"><AiFillTwitterCircle /></a>    {/* org social link, if available */}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;