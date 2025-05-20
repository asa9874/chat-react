import { useNavigate } from "react-router-dom";
import FriendContainer from "../../components/FriendContainer";

function Friend() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center w-full h-full flex-col "
      onClick={() => {
        navigate("/profile");
      }}
    >
      <FriendContainer />
      <FriendContainer />
      <FriendContainer />
      <FriendContainer />
      <FriendContainer />
      <FriendContainer />
      <FriendContainer />
      <FriendContainer />
      <FriendContainer />
    </div>
  );
}

export default Friend;