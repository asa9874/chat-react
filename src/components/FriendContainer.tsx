import { useNavigate } from "react-router-dom";
import type { Friend } from "../types/Friend";

interface FriendContainerProps {
  friend: Friend;
}

function FriendContainer({ friend }: FriendContainerProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center w-full h-[100px] bg-slate-200 p-5"
      onClick={() => {
        navigate(`/profile/${friend.id}`);
      }}>
      <div className="flex">
        <img
          alt="썸네일"
          src={friend.profileImageUrl}
          className="w-[80px] h-[80px] rounded-full bg-black mr-10"
        />
        <div>
          <h3 className="text-3xl font-semibold">{friend.name}</h3>
          <p className="text-xl text-gray-500">{friend.profileMessage}</p>
        </div>
      </div>
    </div>
  );
}
export default FriendContainer;