import type { Message } from "../types/Message";
import apiClient from "./apiClient";

export async function getMessages(): Promise<Message[]> {
    try {
        const response = await apiClient.get(`/messages`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getMessageById(messageId: string): Promise<Message> {
    try {
        const response = await apiClient.get(`/messages/${messageId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createMessage(message: {
    content: string;
    senderId: number;
    chatRoomId: number;
}): Promise<Message> {
    try {
        const response = await apiClient.post(`/messages`, message);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function deleteMessage(messageId: string) {
    try {
        const response = await apiClient.delete(`/messages/${messageId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function updateMessage(message: {
    content: string;
}): Promise<Message> {
    try {
        const response = await apiClient.put(`/messages`, message);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}