import { useNavigate } from "react-router-dom";

interface HeaderButtonProps {
    text: string;
    page?: string;
    icon?: React.ReactNode;
}


function HeaderButton({ text, page, icon }: HeaderButtonProps) {
    const navigate = useNavigate();

    function handleClick() {
        if (page) {
            navigate(`/${page}`);
        }
    }
    return (
        <button
            className=" text-black px-4 py-2 rounded-lg  transition duration-200"
            type="button"
            title={text}
            aria-label={text}
            role="button"
            onClick={handleClick}
        >
            {icon}
        </button>
    );
}
export default HeaderButton;