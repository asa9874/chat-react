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
    throw error;
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

export async function sendImageMessage(
  message:{
    chatRoomId: number;
    senderId: number;
  },
  file: File
): Promise<Message> {
  try {
    const formData = new FormData();
    formData.append('message', new Blob([JSON.stringify(message)], { type: 'application/json' }));
    formData.append('file', file);

    const response = await apiClient.post<Message>('/messages/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error sending image message:', error);
    throw error;
  }
}