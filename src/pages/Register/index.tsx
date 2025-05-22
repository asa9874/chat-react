import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerMember } from "../../apis/member";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerMember(formData);
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
      console.error("회원가입 실패:", err);
    }
  }

  return (
    <div className="flex items-center w-full h-full  flex-col p-3 justify-center bg-sky-300 rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full h-full "
      >
        <h1 className="text-5xl font-bold mb-10">회원가입</h1>
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
          type="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="이름"
          className="w-[80%] h-[40px] p-2 m-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          placeholder="비밀번호"
          className="w-[80%] h-[40px] p-2 m-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-[80%] h-[40px] p-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          회원가입
        </button>
      </form>
    </div >
  );
}
export default Register;