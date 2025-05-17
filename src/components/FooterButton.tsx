
interface FooterButtonProps {
    text: string;
    page?: string;
}


function FooterButton({ text,page }: FooterButtonProps) {
    function handleClick() {
        if (page) {
            window.location.href = `/${page}`;
        }
    }

    return (
        <button 
        className="px-10 py-5 text-white bg-sky-500 rounded-full hover:bg-sky-600"
        onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default FooterButton;