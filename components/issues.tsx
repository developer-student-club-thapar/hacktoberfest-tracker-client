
import {useState} from "react"
import IssueSub from "./issueSub"

export default function Issues(props:any) {


    

    return (

        <div>
            {props.data.map((issue:any) => {
                return (
                    <IssueSub issue={issue}/>
                )
            })}
        </div>
    )
} 