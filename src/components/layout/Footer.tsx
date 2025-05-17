import FooterButton from "../FooterButton";

function SideBar() {
    return (
        <div className="flex items-center bg-sky-200 rounded-b-2xl gap-10 flex-col justify-center">
            <FooterButton text="친구" page="friend" />
            <FooterButton text="채팅" page="chat" />
            <FooterButton text="내 정보" page="my-info" />
        </div>
    )
}

export default SideBar;