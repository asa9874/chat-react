export interface ChatRoom{
    id : number,
    roomName: string,
    roomDescription: string,
    memberCount : number,
    messageCount : number,
    lastMessage : string,
    lastMessageTime: string,
    lastMessageSender: string,
    ownerId: number,
    ownerName: string
}