import FooterButton from "../FooterButton";

function Footer() {
    return (
        <div className="flex items-center justify-center w-full h-[100px] bg-gray-200 rounded-b-2xl gap-5">
            <FooterButton text="친구" page="friend" />
            <FooterButton text="채팅" page="chat" />
            <FooterButton text="내 정보" page="my-info" />
        </div>
    )
}

export default Footer;