import { useNavigate } from "react-router-dom";
import type { ChatRoom } from "../types/ChatRoom";

interface ChatContainerProps {
  chatRoom: ChatRoom
}


function ChatContainer({ chatRoom }: ChatContainerProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chatroom");
  };
  return (
    <div
      className="flex items-center w-full h-[100px] bg-slate-200 p-5"
      onClick={handleClick}
    >
      <div className="flex">
        <img
          alt="썸네일"
          src={chatRoom.roomImage}
          className="w-[80px] h-[80px] rounded-full bg-black mr-10"
        />
        <div>
          <h3 className="text-3xl font-semibold">
            {chatRoom.roomName}
            <a className="text-sm p-3 text-gray-500">{chatRoom.memberCount}</a>
          </h3>
          <p className="text-xl text-gray-500">{chatRoom.lastMessageSender}:{chatRoom.lastMessage}</p>
          <p className="text-sm text-gray-400">{chatRoom.lastMessageTime}</p>

        </div>
      </div>
    </div>
  );
}
export default ChatContainer;