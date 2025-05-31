import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteChatRoom,
  getChatRoomById,
  getMessagesByChatRoomId,
} from "../../apis/chatroom";
import ChatRoomMyChat from "../../components/ChatRoomMyChat";
import ChatRoomOtherChat from "../../components/ChatRoomOtherChat";
import { useAuthStore } from "../../store/useAuthStore";
import type { ChatRoom } from "../../types/ChatRoom";
import type { Message } from "../../types/Message";
import {
  connectWebSocket,
  disconnectWebSocket,
  sendMessageWebSocket,
} from "../../utils/websocket";
import { sendImageMessage } from "../../apis/message"; 

function ChatRoom() {
  const navigate = useNavigate();
  const { id } = useAuthStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatRoom, setChatRoom] = useState<ChatRoom>();
  const [messageInput, setMessageInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null); 
  const { chatRoomId } = useParams<{ chatRoomId: string }>();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null); 

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
        const responseChatRoom = await getChatRoomById(chatRoomId);
        setChatRoom(responseChatRoom);
      } catch (err: any) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchChatRoomMessageList();
  }, [chatRoomId]); 

  const handleDeleteChatRoom = async () => {
    try {
      if (!chatRoomId) throw new Error("채팅방 ID가 없습니다.");
      await deleteChatRoom(chatRoomId);
      navigate("/chat");
    } catch (err: any) {
      alert(err.message);
    }
  };

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  const handleSendImage = async () => {
    if (!chatRoomId || !id) {
      alert("채팅방 ID 또는 사용자 ID가 없습니다.");
      return;
    }
    if (!imageFile) {
      alert("이미지 파일을 선택해주세요.");
      return;
    }

    const requestDto = {
      chatRoomId: Number(chatRoomId),
      senderId: id,
    };

    try {
      const response = await sendImageMessage(requestDto, imageFile);
      console.log("전송한 이미지 메시지:", response);
      setImageFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; 
      }
    } catch (error) {
      console.error("이미지 메시지 전송 실패:", error);
      alert("이미지 메시지 전송에 실패했습니다.");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-screen bg-sky-100">
      <div className="flex w-full h-[80px] p-5 bg-sky-300">
        <button
          className="bg-sky-200 rounded-full p-2 mr-5"
          onClick={() => navigate(-1)}
        >
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
        {id == chatRoom?.ownerId && (
          <button
            className="bg-red-300 rounded-xl w-[100px]"
            onClick={handleDeleteChatRoom}
          >
            방지우기
          </button>
        )}
      </div>

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

      <div className="bg-gray-100 h-[150px] pl-5 pr-5">
        <div className="h-[100px] flex items-center">
          <input
            className="bg-gray-200 h-[50px] w-full rounded-2xl p-5"
            placeholder="메시지를 입력해주세용"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button
            className="bg-sky-500 w-[100px] h-[50px] rounded-md text-white ml-3"
            onClick={handleSendMessage}
          >
            전송
          </button>
          <input
            type="file"
            accept="image/*" 
            onChange={handleFileChange}
            style={{ display: 'none' }} 
            ref={fileInputRef} 
          />
          <button
            className="bg-blue-500 text-white rounded-md p-3 m-5"
            onClick={() => fileInputRef.current?.click()} 
          >
            이미지 선택
          </button>
          <button
            className="bg-green-500 text-white rounded-md p-3"
            onClick={handleSendImage}
            disabled={!imageFile} 
          >
            이미지 전송
          </button>
        </div>
        {imageFile && (
          <div className="text-sm text-gray-600 mt-2">
            선택된 파일: {imageFile.name}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatRoom;