import apiClient from "./apiClient";

export async function getMembers() {
    try {
        const response = await apiClient.get(`/members`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export async function getMemberById(id: string) {
    try {
        const response = await apiClient.get(`/members/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getMyInfo() {
    try {
        const response = await apiClient.get(`/members/me`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getMyFriends() {
    try {
        const response = await apiClient.get(`/members/me/friends`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getMyChatRooms() {
    try {
        const response = await apiClient.get(`/members/me/chatrooms`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getChatRoomsByMemberId(id: string) {
    try {
        const response = await apiClient.get(`/members/${id}/chatrooms`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getFriendsByMemberId(id: string) {
    try {
        const response = await apiClient.get(`/members/${id}/friends`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function addFriend(friendId: string) {
    try {
        const response = await apiClient.post(`/members/me/friends/${friendId}`);
        return response.data;
    } catch (error) {
        console.error(error);
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