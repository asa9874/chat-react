import type { Message } from "../types/Message";

interface ChatRoomMyChatProps {
  message: Message;
}

function ChatRoomMyChat({ message }: ChatRoomMyChatProps) {
  return (
    <div className="flex flex-col gap-2 ml-auto">
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          {message.type === "IMAGE" && (
            <img
              style={{ maxWidth: "150px", maxHeight: "150px" }}
              src={message.content}
              alt="Chat Image"
              className="max-w-xs rounded-lg"
            />
          )}

          {message.type === "TEXT" && (
            <div className="bg-yellow-200 p-2 rounded-lg">
              <p className="text-xl">{message.content}</p>
            </div>
          )}
          <span className="text-sm text-gray-500 text-right">
            {new Date(message.timestamp).toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatRoomMyChat;
