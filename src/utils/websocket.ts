import { Client, type Message } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const SOCKET_URL = "http://localhost:8080/ws"; 

let stompClient: Client | null = null;

export function connectWebSocket(onMessage: (message: Message) => void, chatRoomId: string) {
  const jwtToken = localStorage.getItem("token");
  if (!jwtToken) {
    console.error(" JWT 토큰이 없습니다. ");
    return;
  }
  stompClient = new Client({
    brokerURL: undefined, 
    webSocketFactory: () => new SockJS(SOCKET_URL),
    reconnectDelay: 5000,
    connectHeaders: {
      Authorization: `Bearer ${jwtToken}`,
    },
    onConnect: () => {
      console.log(" 웹소켓 연결됨");
      stompClient?.subscribe(`/topic/chat/${chatRoomId}`, onMessage);
    },
    onStompError: (frame) => {
      console.error(" STOMP 에러", frame);
    },
  });

  stompClient.activate();
}

export function sendMessageWebSocket(destination: string, payload: any) {
  if (stompClient && stompClient.connected) {
    stompClient.publish({
      destination,
      body: JSON.stringify(payload),
    });
  }
}

export function disconnectWebSocket() {
  if (stompClient) {
    stompClient.deactivate();
    console.log(" 웹소켓 연결 해제");
  }
}
