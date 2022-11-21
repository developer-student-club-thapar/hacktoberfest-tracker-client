import { ThreeCircles } from "react-loader-spinner";
export default function Loading() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <ThreeCircles
            height="200"
            width="200"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor="#6FA4FC"
            middleCircleColor="#BC5C82"
/>
        </div>
    )
}