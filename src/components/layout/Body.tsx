import { Outlet } from "react-router-dom";

function Body() {
    return (
        <div className="flex flex-col items-center w-full h-full ">
            <Outlet />
        </div>
    )
}

export default Body;