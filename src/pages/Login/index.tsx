import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginMember } from "../../apis/auth";
import { useAuthStore } from "../../store/useAuthStore";
import { getMyInfo } from "../../apis/member";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id ,setUser, logout } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      logout(); 
      const responseData = await loginMember(formData);
      localStorage.setItem("token", responseData.token);
      const userData = await getMyInfo();
      setUser({
        id: userData.id,
        email: userData.email,
        name: userData.name,
        profileImageUrl: userData.profileImageUrl,
        profileMessage: userData.profileMessage,
      });
    } catch (err: any) {
      setError(err.message);
      console.error("로그인 실패:", err);
    }
  };

  useEffect(() => {
    if (id) {
      console.log("id", id);
      navigate("/friend");
    }
  }, [id, navigate]);


  return (
    <div className="flex items-center w-full h-full  flex-col p-3 justify-center bg-sky-300 rounded-2xl">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full h-full ">
        <h1 className="text-5xl font-bold mb-10">로그인</h1>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="이메일"
          className="w-[80%] h-[40px] p-2 m-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-[80%] h-[40px] p-2 m-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-[80%] h-[40px] p-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          로그인
        </button>
        <button className="w-[80%] h-[40px] p-2 m-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
export default Login;