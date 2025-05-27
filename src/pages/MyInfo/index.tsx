import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "../../apis/member";
import { useAuthStore } from "../../store/useAuthStore";
import type { MemberProfile } from "../../types/MemberProfile";

function MyInfo() {
  const navigate = useNavigate();
  const [myProfile, setMyProfile] = useState<MemberProfile>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { id, logout } = useAuthStore();
  useEffect(() => {
    if (!id) navigate("/login");
  }, [id, navigate]);

  useEffect(() => {
    const fetchFriendList = async () => {
      setLoading(true);
      try {
        const response = await getMyInfo();
        setMyProfile(response);
      } catch (err: any) {
        setError(err.message);
        console.error("내 정보 가져오기 실패:", err);
      }
      setLoading(false);
    };
    fetchFriendList();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center w-full h-full">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
        <button
          className="h-[60px] w-full bg-red-500 hover:bg-red-700 text-white font-bold rounded text-xl"
          onClick={logout}
        >
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full h-full p-4  items-center">
      <img
        alt="썸네일"
        src={myProfile?.profileImageUrl}
        className="w-[200px] h-[200px] rounded-full bg-black "
      />
      <div className="text-2xl font-bold">{myProfile?.name}</div>
      <div className="text-xl text-gray-500">{myProfile?.profileMessage}</div>
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