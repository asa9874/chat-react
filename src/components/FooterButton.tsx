
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
        className="px-10 py-5 text-white bg-slate-400 rounded hover:bg-slate-600"
        onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default FooterButton;