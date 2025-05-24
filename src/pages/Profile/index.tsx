import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { useEffect } from "react";

function Profile() {
    const navigate = useNavigate();
    const { id } = useAuthStore();
    useEffect(() => {
        if (!id) navigate("/login");
    }, [id, navigate]);
    return (
        <div className="flex items-center w-full h-full flex-col bg-sky-200">
            <div className="h-[70px] bg-slate-700 w-full flex items-center p-3">
                <button className="bg-slate-200 rounded-full p-2 mr-5"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" />
                        <path d="M5 12l6 6" /><path d="M5 12l6 -6" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col h-full justify-center items-center">
                <img
                    alt="썸네일"
                    src="https://i.namu.wiki/i/xYyTBeEJDkq1-rj2273k8lasr9oLaXZmYDUMuU23VKYteYXuIrI0F16e0gTRLIi9GWbVniuNUZ9-taIao3QNJw.svg"
                    className="w-[200px] h-[200px] rounded-full bg-black "
                />
                <p className="text-4xl mt-10"> 홍홍길</p>
            </div>
            <div className="h-[200px] bg-slate-300 w-full flex items-center justify-center gap-10">
                <button
                    className="h-[100px] w-[100px] bg-slate-200 rounded-full"
                >
                    1대1 채팅
                </button>
                <button
                    className="h-[100px] w-[100px] bg-slate-200 rounded-full"
                >
                    친구삭제
                </button>
            </div>
        </div>
    );
}

export default Profile;