import type { Message } from "../types/Message";

interface ChatRoomOtherChatProps {
  message: Message
}



function ChatRoomOtherChat({ message }: ChatRoomOtherChatProps) {
  console.log(message);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <img
          src={"https://i.namu.wiki/i/xYyTBeEJDkq1-rj2273k8lasr9oLaXZmYDUMuU23VKYteYXuIrI0F16e0gTRLIi9GWbVniuNUZ9-taIao3QNJw.svg"}
          className="w-[60px] h-[60px] rounded-full bg-black"
        />
        <div className="flex flex-col">
          <span className="text-xl font-semibold ">{message.senderName}</span>
          {message.type === "IMAGE" && (
              <img 
                style={{ maxWidth: "150px", maxHeight: "150px" }}
                src={message.content} alt="Chat Image" className="max-w-xs rounded-lg" 
              />
          )}
          {message.type === "TEXT" && (<div className="bg-gray-200 p-2 rounded-lg">
              <p className="text-xl">{message.content}</p>
          </div>)}
          <span className="text-sm text-gray-500 text-right">{new Date(message.timestamp).toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}
export default ChatRoomOtherChat;