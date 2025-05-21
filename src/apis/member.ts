import type { ChatRoom } from "../types/ChatRoom";
import type { Friend } from "../types/Friend";
import type { Member } from "../types/Member";
import apiClient from "./apiClient";

export async function getMembers(): Promise<Member[]> {
    try {
        const response = await apiClient.get(`/members`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export async function getMemberById(id: string): Promise<Member> {
    try {
        const response = await apiClient.get(`/members/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getMyInfo(): Promise<Member> {
    try {
        const response = await apiClient.get(`/members/me`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getMyFriends(): Promise<Friend[]> {
    try {
        const response = await apiClient.get(`/members/me/friends`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getMyChatRooms(): Promise<ChatRoom[]> {
    try {
        const response = await apiClient.get(`/members/me/chatrooms`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getChatRoomsByMemberId(id: string): Promise<ChatRoom[]> {
    try {
        const response = await apiClient.get(`/members/${id}/chatrooms`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getFriendsByMemberId(id: string): Promise<Friend[]> {
    try {
        const response = await apiClient.get(`/members/${id}/friends`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function addFriend(friendId: string): Promise<Friend> {
    try {
        const response = await apiClient.post(`/members/me/friends/${friendId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function removeFriend(friendId: string) {
    try {
        const response = await apiClient.delete(`/members/me/friends/${friendId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function registerMember(member: {
    name: string;
    email: string;
    password: string;
}) {
    try {
        const response = await apiClient.post(`/members`, member);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function updateMember(memberId: number, member: {
    name?: string;
}) {
    try {
        const response = await apiClient.put(`/members/${memberId}`, member);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}