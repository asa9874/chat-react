function ChatRoomOtherChat() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <img
          src="https://i.namu.wiki/i/xYyTBeEJDkq1-rj2273k8lasr9oLaXZmYDUMuU23VKYteYXuIrI0F16e0gTRLIi9GWbVniuNUZ9-taIao3QNJw.svg"
          className="w-[60px] h-[60px] rounded-full bg-black"
        />
        <div className="flex flex-col">
          <span className="text-xl font-semibold ">홍홍길</span>
          <div className="bg-gray-200 p-2 rounded-lg">
            <p className="text-xl">테테테테ㅔ테테테테스트1123123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatRoomOtherChat;