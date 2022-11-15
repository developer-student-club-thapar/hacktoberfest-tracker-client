import { useRouter } from "next/router"
import Sidebar from "../components/sidebar/sidebarWrapper"


export const Dashboard = () => {

    const router = useRouter();
    const data = router.query;

    return (
        <div>
            <Sidebar data={data}/>
        </div>
    )
}