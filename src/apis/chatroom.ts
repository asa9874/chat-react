import apiClient from "./apiClient";

export async function getChatRooms() {
    try {
        const response = await apiClient.get(`/chatrooms`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getChatRoomById(chatRoomid: string) {
    try {
        const response = await apiClient.get(`/chatrooms/${chatRoomid}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getMessagesByChatRoomId(chatRoomid: string) {
    try {
        const response = await apiClient.get(`/chatrooms/${chatRoomid}/messages`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function createChatRoom(chatRoom: {
    roomName: string;
    roomDescription: string;
    ownerId: number;
    mebmerIds: number[];
}) {
    try {
        const response = await apiClient.post(`/chatrooms`, chatRoom);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteChatRoom(chatRoomid: string) {
    try {
        const response = await apiClient.delete(`/chatrooms/${chatRoomid}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export async function updateChatRoom(chatRoom: {
    roomName: string;
    roomDescription: string;
    mebmerIds: number[];
}) {
    try {
        const response = await apiClient.put(`/chatrooms`, chatRoom);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
