import Top from "../components/top"
import Left from "../components/left"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Top/>
      <div className="flex flex-row w-screen">
        <div className="w-full">

        </div>
        <Left/>
      </div>
    </div>
  )
}
