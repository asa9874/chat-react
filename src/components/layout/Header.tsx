function Header() {
    return (
        <div className="flex items-center p-5 w-full h-16 bg-white rounded-t-2xl ">
            <div className="flex items-center justify-center w-full h-full">
                <h1 className="text-3xl font-bold text-gray-800">그냥 헤더 ㅇㅇ</h1>
            </div>
            <button className="px-4 py-2 text-white bg-sky-500 rounded-full hover:bg-sky-600">
                설정
            </button>
        </div>
    )
}

export default Header;