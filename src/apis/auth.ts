import apiClient from "./apiClient";

export async function loginMember(memberData: { email: string; password: string }) {
    try {
        const response = await apiClient.post(`/auth/login`, memberData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
