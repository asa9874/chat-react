import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteChatRoom, getChatRoomById, getMessagesByChatRoomId } from "../../apis/chatroom";
import ChatRoomMyChat from "../../components/ChatRoomMyChat";
import ChatRoomOtherChat from "../../components/ChatRoomOtherChat";
import { useAuthStore } from "../../store/useAuthStore";
import type { ChatRoom } from "../../types/ChatRoom";
import type { Message } from "../../types/Message";
import { connectWebSocket, disconnectWebSocket, sendMessageWebSocket } from "../../utils/websocket";

function ChatRoom() {
  const navigate = useNavigate();
  const { id } = useAuthStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatRoom, setChatRoom] = useState<ChatRoom>();
  const [messageInput, setMessageInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { chatRoomId } = useParams<{ chatRoomId: string }>();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 로그인 검사
  useEffect(() => {
    if (!id) navigate("/login");
  }, [id, navigate]);

  // 초기 메시지 + 채팅방 정보 불러오기
  useEffect(() => {
    const fetchChatRoomMessageList = async () => {
      setLoading(true);
      try {
        if (!chatRoomId) throw new Error("채팅방 ID가 없습니다.");
        const response = await getMessagesByChatRoomId(chatRoomId);
        setMessages(response);
        const responseChatRoom = await getChatRoomById(chatRoomId);
        setChatRoom(responseChatRoom);
      } catch (err: any) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchChatRoomMessageList();
  }, []);

  const handleDeleteChatRoom = async () => {
    try {
      if (!chatRoomId) throw new Error("채팅방 ID가 없습니다.");
      await deleteChatRoom(chatRoomId);
      navigate("/chat")
    } catch (err: any) {
      alert(err.message);
    }
  }

  // 웹소켓 연결
  useEffect(() => {
    if (!chatRoomId) return;

    connectWebSocket((messageFrame) => {
      const receivedMessage = JSON.parse(messageFrame.body) as Message;
      setMessages((prev) => [...prev, receivedMessage]);
    }, chatRoomId);

    return () => {
      disconnectWebSocket();
    };
  }, [chatRoomId]);

  const handleSendMessage = () => {
    if (!messageInput || !chatRoomId || !id) return;

    const newMessage = {
      chatRoomId: chatRoomId,
      senderId: id,
      content: messageInput,
    };
    console.log("전송할 메시지:", newMessage);

    sendMessageWebSocket("/app/chat/send", newMessage);
    setMessageInput("");
  };

  useEffect(() => {
    // 스크롤 항상 맨 아래로
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
    <div className="flex flex-col w-full h-screen bg-sky-100">
      <div className="flex w-full h-[80px] p-5 bg-sky-300">
        {/* 상단 바 */}
        <button className="bg-sky-200 rounded-full p-2 mr-5" onClick={() => navigate(-1)}>
          ←
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
        {(id == chatRoom?.ownerId) &&
          <button
            className="bg-red-300 rounded-xl w-[100px]"
            onClick={handleDeleteChatRoom}
          >
            방지우기
          </button>
        }
      </div>

      {/* 채팅 메시지 영역 */}
      <div className="flex flex-col p-3 gap-5 h-full overflow-auto">
        {messages.map((message) =>
          Number(message.senderId) === id ? (
            <ChatRoomMyChat message={message} key={message.id} />
          ) : (
            <ChatRoomOtherChat message={message} key={message.id} />
          )
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* 메시지 입력 */}
      <div className="bg-gray-100 h-[150px] pl-5 pr-5">
        <div className="h-[100px] flex items-center">
          <input
            className="bg-gray-200 h-[50px] w-full rounded-2xl p-5"
            placeholder="메시지를 입력해주세용"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button className="bg-sky-500 w-[100px] h-[50px] rounded-md text-white ml-3" onClick={handleSendMessage}>
            전송
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;