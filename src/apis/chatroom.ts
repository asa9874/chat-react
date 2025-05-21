import type { ChatRoom } from "../types/ChatRoom";
import type { Message } from "../types/Message";
import apiClient from "./apiClient";

export async function getChatRooms(): Promise<ChatRoom[]> {
    try {
        const response = await apiClient.get(`/chatrooms`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getChatRoomById(chatRoomid: string): Promise<ChatRoom> {
    try {
        const response = await apiClient.get(`/chatrooms/${chatRoomid}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getMessagesByChatRoomId(chatRoomid: string): Promise<Message[]> {
    try {
        const response = await apiClient.get(`/chatrooms/${chatRoomid}/messages`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createChatRoom(chatRoom: {
    roomName: string;
    roomDescription: string;
    ownerId: number;
    mebmerIds: number[];
}): Promise<ChatRoom> {
    try {
        const response = await apiClient.post(`/chatrooms`, chatRoom);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
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
}): Promise<ChatRoom> {
    try {
        const response = await apiClient.put(`/chatrooms`, chatRoom);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error
    }
}
