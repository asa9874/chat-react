function ChatContainer() {
  return (
    <div className="flex items-center w-full h-[100px] bg-slate-200 p-5">
      <div className="flex">
        <img
          alt="썸네일"
          src="https://i.namu.wiki/i/xYyTBeEJDkq1-rj2273k8lasr9oLaXZmYDUMuU23VKYteYXuIrI0F16e0gTRLIi9GWbVniuNUZ9-taIao3QNJw.svg"
          className="w-[80px] h-[80px] rounded-full bg-black mr-10"
        />
        <div>
          <h3 className="text-3xl font-semibold">
            채팅방이름
            <a className="text-sm p-3 text-gray-500">4명</a>
          </h3>
          <p className="text-xl text-gray-500">사람1: 마지막 메시지asadasdas</p>
          <p className="text-sm text-gray-400">2023.10.10 12:00</p>

        </div>
      </div>
    </div>
  );
}
export default ChatContainer;