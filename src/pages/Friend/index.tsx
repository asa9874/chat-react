import { useEffect, useState } from "react";
import { getMyFriends } from "../../apis/member";
import FriendContainer from "../../components/FriendContainer";
import type { Friend } from "../../types/Friend";

function Friend() {
  const [friendList, setFriendList] = useState<Friend[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFriendList = async () => {
      setLoading(true);
      try {
        const response = await getMyFriends();
        setFriendList(response);
      } catch (err: any) {
        setError(err.message);
        console.error("친구 목록 가져오기 실패:", err);
      }
      setLoading(false);
    };
    fetchFriendList();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center w-full h-full">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }


  return (
    <div className="flex items-center w-full h-full flex-col ">
      {friendList.map((friend) => (
        <FriendContainer
          key={friend.id}
          friend={friend}
        />
      ))}
    </div>
  );
}

export default Friend;