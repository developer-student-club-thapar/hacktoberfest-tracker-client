import Contributors from "./contributors";
import ProfileCard from "./profileGen";

const Right= (props:any)=>{
    return(
        <div className="flex flex-col h-full w-[25vw] items-end">
            <ProfileCard name={props.orgName} desc={props.orgDesc} link={props.orgLink}/>
            <Contributors />
        </div>
    );
}

export default Right;