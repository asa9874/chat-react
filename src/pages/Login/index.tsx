function Login() {
  return (
    <div className="flex items-center w-full h-full  flex-col p-3 justify-center bg-sky-300 rounded-2xl">
        <form className="flex flex-col items-center justify-center w-full h-full ">
          <h1 className="text-5xl font-bold mb-10">로그인</h1>
          <input
            type="text"
            placeholder="아이디"
            className="w-[80%] h-[40px] p-2 m-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-[80%] h-[40px] p-2 m-2 border border-gray-300 rounded"
          />
          <button className="w-[80%] h-[40px] p-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            로그인
          </button>
          <button className="w-[80%] h-[40px] p-2 m-2 bg-green-500 text-white rounded hover:bg-green-600">
            회원가입
          </button>
        </form>
    </div>
  );
}
export default Login;