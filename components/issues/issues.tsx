import IssueSub from "./issueSub"

export default function Issues(props:any) {

    return (
        <div>
            <h1 className="font-semibold text-4xl mb-4">Issues</h1>

            <div className="w-full h-[35vh] mb-8 flex flex-col gap-2 overflow-y-scroll py-6 px-4
                bg-componentLight rounded-lg shadowProfile2">
                {props.data.map((issue:any) => {
                    return (
                        <div>
                            <IssueSub issue={issue}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
} 