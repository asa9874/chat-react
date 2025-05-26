import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFriendsByMemberId } from "../../apis/member";
import FriendContainer from "../../components/FriendContainer";
import { useAuthStore } from "../../store/useAuthStore";
import type { Friend } from "../../types/Friend";

function FriendAdd() {
    const [friendList, setFriendList] = useState<Friend[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useAuthStore();
    useEffect(() => {
        if (!id) navigate("/login");
    }, [id, navigate]);

    const fetchFriendList = async () => {
        setLoading(true);
        try {
            const response = await getFriendsByMemberId("1"); //이거 엔드포인트 만들어야함
            setFriendList(response);
        } catch (err: any) {
            setError(err.message);
            console.error("친구 목록 가져오기 실패:", err);
        }
        setLoading(false);
    };

    if (loading) {
        return <div className="flex items-center justify-center w-full h-full">Loading...</div>;
    }

    if (error) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                </div>
            </div>
        );
    }


    return (
        <div className="flex items-center w-full h-full flex-col p-5">
            <form className="w-full h-[80px] p-2 flex items-center bg-slate-200 rounded-2xl">
                <input
                    className="bg-slate-200 w-full h-full text-2xl p-5 "
                    placeholder="친구 이름을 검색하세요"
                />
                <button className="rounded-full w-[50px] h-[50px]">
                    🥰
                </button>
            </form>
            <div className="w-full mt-5 overflow-auto">
                <div className="w-full">
                    {friendList.map((friend) => (
                        <FriendContainer
                            key={friend.id}
                            friend={friend}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FriendAdd;