import type { ChatRoom } from "../types/ChatRoom";
import type { Friend } from "../types/Friend";
import type { Member } from "../types/Member";
import type { MemberProfile } from "../types/MemberProfile";
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

export async function getMemberProfileById(id: string): Promise<MemberProfile> {
    try {
        const response = await apiClient.get(`/members/${id}/profile`);
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

export async function addFriend(memberId: string ,friendId: string): Promise<Friend> {
    try {
        const response = await apiClient.post(`/members/${memberId}/friends/${friendId}`);
        return response.data;
    } catch (error) {   
        console.error(error);
        throw error;
    }
}

export async function removeFriend(memberId: string ,friendId: string) {
    try {
        const response = await apiClient.delete(`/members/${memberId}/friends/${friendId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function registerMember(member: {
    name: string;
    email: string;
    password: string;
}) {
    try {
        const response = await apiClient.post(`/members/register`, member);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
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
        throw error;
    }
}