import Contributors from "./contributors";
import ProfileCard from "./profileGen";

const Right= (props:any)=>{
    return(
        <div className="flex flex-col h-full items-end xl:w-[25vw]">
            <ProfileCard name={props.orgName} desc={props.orgDesc} link={props.orgLink} pic={props.orgPic}/>
            <Contributors contributors={props.contributors}/>
        </div>
    );
}

export default Right;