

const OrgDash = (props) => {
    return (
        <div className="h-[40vh] flex flex-row gap-2 bg-componentLight p-6 rounded-lg drop-shadow-lg overflow-scroll">
            <div className="flex flex-col gap-4 w-2/4 h-full">
                <div className="text-3xl bg-bgLight flex flex-col justify-center p-8 text-center rounded-lg h-2/4">
                    <h1 className="text-[#BC5C82]">{props.contributors}</h1>
                    <h1>Total Contributors</h1>
                </div>
                <div className="flex flex-row gap-4 text-xl justify-evenly h-2/4">
                    <div className="flex flex-col justify-center bg-bgLight p-4 w-2/3 text-center rounded-lg">
                        <h1 className="text-[#BC5C82]">{props.commits}</h1>
                        <h1>Commits</h1>
                    </div>
                    <div className="flex flex-col justify-center bg-bgLight p-4 w-2/3 text-center rounded-lg">
                        <h1 className="text-[#BC5C82]">{props.repoCount}</h1>
                        <h1>Repos</h1>
                    </div>
                    <div className="flex flex-col justify-center bg-bgLight p-4 w-2/3 text-center rounded-lg">
                        <h1 className="text-[#BC5C82]">{props.issues}</h1>
                        <h1>Issues</h1>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default OrgDash