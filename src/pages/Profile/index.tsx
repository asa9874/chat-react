import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createChatRoom } from "../../apis/chatroom";
import { getMemberProfileById, removeFriend } from "../../apis/member";
import { useAuthStore } from "../../store/useAuthStore";
import type { MemberProfile } from "../../types/MemberProfile";

function Profile() {
    const navigate = useNavigate();
    const { id } = useAuthStore();
    const { memberId } = useParams<{ memberId: string }>();
    useEffect(() => {
        if (!id) navigate("/login");
    }, [id, navigate]);
    const [memberProfile, setMemberProfile] = useState<MemberProfile>();

    useEffect(() => {
        const fetchMember = async () => {
            try {
                if (!memberId) throw new Error("Member ID is required");
                const response = await getMemberProfileById(memberId);
                setMemberProfile(response);
            } catch (err: any) {
                console.error("맴버 정보 가져오기 실패:", err);
            }
        };
        fetchMember();
    }, []);



    async function handleCreateChat() {
        try {
            const response = await createChatRoom({
                roomName: `${memberProfile?.name}과의 채팅방`,
                roomDescription: `${memberProfile?.name}과의 채팅방입니다.`,
                ownerId: Number(id),
                memberIds: [Number(memberId), Number(id)],
            });
            navigate(`/chatroom/${response.id}`);
        } catch (err: any) {
            console.error("채팅방 생성 실패:", err);
            alert("채팅방 생성에 실패했습니다. 다시 시도해주세요.");
        }
    }

    async function handleDeleteFriend() {
        try {
            if (!memberId) throw new Error("Member ID is required");
            const response = await removeFriend(String(id), String(memberProfile?.id));
            navigate(`/friend`);
        } catch (err: any) {
            console.error("친구삭제 실패:", err);
            alert("친구삭제에 실패! 다시 시도해주세요.");
        }
    }



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
                    src={memberProfile?.profileImageUrl}
                    className="w-[200px] h-[200px] rounded-full bg-black "
                />
                <p className="text-4xl mt-10"> {memberProfile?.name}</p>
            </div>
            <div className="h-[200px] bg-slate-300 w-full flex items-center justify-center gap-10">
                <button
                    className="h-[100px] w-[100px] bg-slate-200 rounded-full"
                    onClick={handleCreateChat}
                >
                    1대1 채팅
                </button>
                <button
                    className="h-[100px] w-[100px] bg-slate-200 rounded-full"
                    onClick={handleDeleteFriend}
                >
                    친구삭제
                </button>
            </div>
        </div>
    );
}

export default Profile;