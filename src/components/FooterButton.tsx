
interface FooterButtonProps {
    text: string;
    page?: string;
    icon?: React.ReactNode;
}


function FooterButton({ text, page, icon }: FooterButtonProps) {
    function handleClick() {
        if (page) {
            window.location.href = `/${page}`;
        }
    }

    return (
        <button
            className="flex flex-col items-center justify-center w-20 h-16 bg-sky-100 rounded-full shadow-lg hover:bg-sky-300 transition duration-300 ease-in-out"
            type="button"
            title={text}
            aria-label={text}
            role="button"
            onClick={handleClick}
        >
            {icon}
        </button>
    )
}

export default FooterButton;