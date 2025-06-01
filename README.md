# 리액트 채팅 웹

> SpringBoot와 웹소켓을 사용하여 제작한 리액트 채팅 웹입니다. 실시간 메시지 전송 기능을 구현하였습니다.

## 📂 프로젝트 구성
- **백엔드**: [SpringBoot 채팅 서버레포지](https://github.com/asa9874/chat-springboot)
- **프론트엔드**: React + TypeScript + Vite

<div>
    <table>
        <tr>
            <td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" title="React"/></code></td>
            <td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" alt="TypeScript" title="TypeScript"/></code></td>
            <td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png" alt="Vite" title="Vite"/></code></td>
        </tr>
    </table>
</div>

## 🌐 기능
- **실시간 채팅**: 웹소켓을 이용해 사용자가 메시지를 실시간으로 주고받을 수 있습니다.
- **유저 목록**: 현재 채팅에 접속한 유저들을 실시간으로 표시합니다.
- **기본적인 메시지 전송 기능**: 텍스트 메시지 전송 및 수신 기능이 구현되어 있습니다.
- **이미지 전송 기능**: 이미지 웹소켓 전송기능이 구현되어 있습니다.
- **채팅알림기능**: 채팅방에 들어가있지않아도 들어가있는 채팅방에 채팅이 새로오면 알수있습니다.

## 🔧 설치 방법

### 1. 클론 및 의존성 설치
```bash
git clone https://github.com/asa9874/chat-react
cd chat-react
npm install
