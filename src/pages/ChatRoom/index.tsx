import { useNavigate } from "react-router-dom";
import ChatRoomMyChat from "../../components/ChatRoomMyChat";
import ChatRoomOtherChat from "../../components/ChatRoomOtherChat";

function ChatRoom() {
  const navigate = useNavigate();
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
          채팅방이름
          <a className="text-sm p-3 text-gray-500">4명</a>
        </h3>
      </div>
      <div className="flex flex-col p-3 gap-5 h-full overflow-auto">
        <ChatRoomOtherChat />
        <ChatRoomOtherChat />
        <ChatRoomOtherChat />
        <ChatRoomMyChat />
        <ChatRoomMyChat />
        <ChatRoomMyChat />
        <ChatRoomMyChat />
        <ChatRoomMyChat />
        <ChatRoomMyChat />
        <ChatRoomMyChat />
        <ChatRoomMyChat />
        <ChatRoomMyChat />
        <ChatRoomMyChat />
        <ChatRoomMyChat />
        <ChatRoomOtherChat />
      </div>
      <div className="bg-gray-100 h-[150px] ">
        <div className="h-[100px] flex">
          <input
            className="bg-gray-200 h-full w-full rounded-2xl"
            placeholder="메시지를 입력해주세용"
          />
          <button className="bg-sky-500 w-[100px]">
            전송
          </button>

        </div>
        <div className="bg-gray-300 h-[50px]">
          버튼같은거??
        </div>
      </div>
    </div >
  );
}
export default ChatRoom;