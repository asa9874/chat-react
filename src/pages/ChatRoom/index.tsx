import { useNavigate, useParams } from "react-router-dom";
import ChatRoomMyChat from "../../components/ChatRoomMyChat";
import ChatRoomOtherChat from "../../components/ChatRoomOtherChat";
import { useAuthStore } from "../../store/useAuthStore";
import { useEffect, useState } from "react";
import type { Message } from "../../types/Message";
import { getChatRoomById, getMessagesByChatRoomId } from "../../apis/chatroom";
import type { ChatRoom } from "../../types/ChatRoom";

function ChatRoom() {
  const navigate = useNavigate();
  const { id } = useAuthStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatRoom,setChatRoom] = useState<ChatRoom>()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { chatRoomId } = useParams<{ chatRoomId: string }>();

  useEffect(() => {
    if (!id) navigate("/login");
  }, [id, navigate]);

  useEffect(() => {
    const fetchChatRoomMessageList = async () => {
      setLoading(true);
      try {
        if (!chatRoomId) throw new Error("채팅방 ID가 없습니다.");
        const response = await getMessagesByChatRoomId(chatRoomId);
        setMessages(response);
        const  responseChatRoom = await getChatRoomById(chatRoomId);
        setChatRoom(responseChatRoom);
      } catch (err: any) {
        setError(err.message);
        console.error("채팅방 메시지 가져오기 실패:", err);
      }
      setLoading(false);
    };
    fetchChatRoomMessageList();
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
      </div>
    );
  }

  return (
    <div className="flex flex-col  w-full h-screen bg-sky-100">
      <div className="flex w-full h-[80px] p-5 bg-sky-300">
        <button className="bg-sky-200 rounded-full p-2 mr-5"
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
        <img
          alt="썸네일"
          src="https://i.namu.wiki/i/xYyTBeEJDkq1-rj2273k8lasr9oLaXZmYDUMuU23VKYteYXuIrI0F16e0gTRLIi9GWbVniuNUZ9-taIao3QNJw.svg"
          className="w-[50px] h-full rounded-full bg-black mr-10"
        />
        <h3 className="text-3xl font-semibold">
          {chatRoom?.roomName}
          <a className="text-sm p-3 text-gray-500">{chatRoom?.memberCount}명</a>
        </h3>
      </div>
      <div className="flex flex-col p-3 gap-5 h-full overflow-auto">
        {messages.map((message) => {
          return Number(message.senderId) === id ? (
            <ChatRoomMyChat
              message={message}
              key={message.id}
            />
          ) : (
            <ChatRoomOtherChat
              message={message}
              key={message.id}
            />
          );
        })}
      </div>
      <div className="bg-gray-100 h-[150px] pl-5 pr-5">
        <div className="h-[100px] flex items-center">
          <input
            className="bg-gray-200 h-[50px] w-full rounded-2xl p-5"
            placeholder="메시지를 입력해주세용"
          />
          <button className="bg-sky-500 w-[100px] h-[50px] rounded-md">
            전송
          </button>

        </div>
      </div>
    </div >
  );
}
export default ChatRoom;