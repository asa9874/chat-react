import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderButton from "../HeaderButton";

function Header() {
    const location = useLocation();
    const [pageTitle, setPageTitle] = useState<string>("");
    useEffect(() => {
        console.log(location.pathname);
        switch (location.pathname) {
            case "/friend":
                setPageTitle("친구");
                break;
            case "/chat":
                setPageTitle("채팅");
                break;
            case "/my-info":
                setPageTitle("내 정보");
                break;
        }
    }, [location])
    return (
        <div className="flex items-center p-5 w-full h-16 bg-white rounded-t-2xl ">
            <div className="flex items-center  w-full h-full">
                <h1 className="text-3xl font-bold text-gray-800">{pageTitle}</h1>
                {pageTitle === "친구" &&
                    <div className="flex items-center ml-auto">
                        <HeaderButton
                            text="친구추가"
                            page="friendadd" //임시
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                                </svg>
                            }
                        />
                        <HeaderButton
                            text="친구검색"
                            page="friendSearch" //임시
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-user-search">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" />
                                </svg>
                            }
                        />
                    </div>
                }
                {pageTitle === "채팅" &&
                    <div className="flex items-center ml-auto">
                        <HeaderButton
                            text="채팅방추가"
                            page="chatAdd" //임시
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-message-circle-plus">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12.007 19.98a9.869 9.869 0 0 1 -4.307 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.992 1.7 2.93 4.04 2.747 6.34" />
                                    <path d="M16 19h6" /><path d="M19 16v6" />
                                </svg>
                            }
                        />
                        <HeaderButton
                            text="채팅방검색"
                            page="chatSearch" //임시
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-message-circle-search">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M11.303 19.955a9.818 9.818 0 0 1 -3.603 -.955l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.73 1.476 2.665 3.435 2.76 5.433" />
                                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" />
                                </svg>
                            }
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default Header;