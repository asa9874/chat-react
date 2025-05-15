import { Outlet } from "react-router-dom";

function Body() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white">
            <Outlet />
        </div>
    )
}

export default Body;