import Image from "next/image";
import hacktober from '../../public/hacktober.png';

const ProfileCard= (props:any)=>{
    return(
        <div className=" flex flex-col justify-center items-center py-8 px-4 w-full
         bg-componentLight rounded-xl shadowProfile mb-2">
            
            <div className="mb-4 ">
                <Image className="rounded-full" src={hacktober} alt={'ok'} width={80}/>
            </div>

            <div className="flex flex-col items-center">
                <a href={props.link} target="_blank"> 
                    <h1 className="font-sans font-semibold underline-offset-2 text-xl text-center mb-2">{props.name}</h1> 
                </a>
                <h3 className="font-sans text-md text-center mb-1">{props.desc}</h3>  
            </div>
        </div>
    );
}

export default ProfileCard;