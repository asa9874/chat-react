import { Outlet } from "react-router-dom";

function Body() {
    return (
        <div className="flex flex-col items-center w-full h-full overflow-auto">
            <Outlet />
        </div>
    )
}

export default Body;