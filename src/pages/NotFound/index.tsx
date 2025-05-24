import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { useEffect } from "react";

function NotFound(){
    const navigate = useNavigate();
    const { id } = useAuthStore();
    useEffect(() => {
      if (!id) navigate("/login");
    }, [id, navigate]);

    return (
        <>
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-4 text-lg">Page Not Found</p>
        </>
    );
}

export default NotFound;