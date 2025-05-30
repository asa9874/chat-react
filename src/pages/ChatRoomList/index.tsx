import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyChatRooms } from "../../apis/member";
import ChatContainer from "../../components/ChatContainer";
import { useAuthStore } from "../../store/useAuthStore";
import type { ChatRoom } from "../../types/ChatRoom";
import type { MessageSocket } from "../../types/MessageSocket";
import { connectMemberWebSocket } from "../../utils/websocket";

function ChatRoomList() {
  const [chatRoomList, setChatRoomList] = useState<ChatRoom[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useAuthStore();
  useEffect(() => {
    if (!id) navigate("/login");
  }, [id, navigate]);

  useEffect(() => {
    const fetchChatRoomList = async () => {
      setLoading(true);
      try {
        const response = await getMyChatRooms();
        setChatRoomList(response);
      } catch (err: any) {
        setError(err.message);
        console.error("채팅방 목록 가져오기 실패:", err);
      }
      setLoading(false);
    };
    fetchChatRoomList();
  }, []);


  useEffect(() => {
    if (!id) return;

    connectMemberWebSocket((messageFrame) => {
      const receivedMessage = JSON.parse(messageFrame.body) as MessageSocket;
      const changedChatRoomId = receivedMessage.chatRoomId;
      const changedLastMessage = receivedMessage.content;
      const changedSenderName = receivedMessage.senderName;
      const changedDate = receivedMessage.timestamp;
      console.log(changedLastMessage)
      console.log(changedChatRoomId)
      setChatRoomList(prevChatRooms => {
        return prevChatRooms.map(chatRoom => {
          if (chatRoom.id === Number(changedChatRoomId)) {
            return {
              ...chatRoom,
              lastMessage: changedLastMessage,
              lastSenderName: changedSenderName,
              lastDate: changedDate,
            };
          }
          return chatRoom;
        });
      });
    }, String(id));
  }, [id]);


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
    <div className="flex items-center w-full h-full flex-col ">
      {chatRoomList.map((chatRoom) => (
        <ChatContainer
          key={chatRoom.id}
          chatRoom={chatRoom}
        />
      ))}
    </div>
  );
}

export default ChatRoomList;