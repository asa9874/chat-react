import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { useEffect } from "react";

function MyInfo() {
  const navigate = useNavigate();
  const { id, logout } = useAuthStore();
  useEffect(() => {
    if (!id) navigate("/login");
  }, [id, navigate]);

  
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4  items-center">
      <img
        alt="썸네일"
        src="https://i.namu.wiki/i/xYyTBeEJDkq1-rj2273k8lasr9oLaXZmYDUMuU23VKYteYXuIrI0F16e0gTRLIi9GWbVniuNUZ9-taIao3QNJw.svg"
        className="w-[200px] h-[200px] rounded-full bg-black "
      />
      <div className="text-2xl font-bold">닉네임</div>
      <div className="text-xl text-gray-500">상태메시지상상태태메메메메메</div>
      <button
        className="h-[60px] w-full bg-sky-500 hover:bg-sky-700 text-white font-bold rounded text-xl"
      >
        닉네임 변경
      </button>
      <button
        className="h-[60px] w-full bg-sky-500 hover:bg-sky-700 text-white font-bold rounded text-xl"
      >
        상태메시지 변경
      </button>
      <button
        className="h-[60px] w-full bg-red-500 hover:bg-red-700 text-white font-bold rounded text-xl"
        onClick={logout}
      >
        로그아웃
      </button>
    </div>
  );
}

export default MyInfo;