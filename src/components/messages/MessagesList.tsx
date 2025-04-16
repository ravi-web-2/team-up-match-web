
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { messages, users } from "@/data/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";

// Context user ID (in a real app this would come from auth context)
const CURRENT_USER_ID = "u1";

export interface MessagePreview {
  id: string;
  partnerId: string;
  partnerName: string;
  partnerAvatar: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

export function MessagesList() {
  const [conversations, setConversations] = useState<MessagePreview[]>([]);

  useEffect(() => {
    // Group messages by conversation partner
    const messagesByPartner: Record<string, any[]> = {};
    
    messages.forEach(msg => {
      // Determine the conversation partner
      const partnerId = msg.senderId === CURRENT_USER_ID ? msg.receiverId : msg.senderId;
      
      if (!messagesByPartner[partnerId]) {
        messagesByPartner[partnerId] = [];
      }
      
      messagesByPartner[partnerId].push(msg);
    });
    
    // Create conversation previews
    const conversationPreviews: MessagePreview[] = Object.entries(messagesByPartner).map(
      ([partnerId, msgs]) => {
        // Sort messages by timestamp (newest first)
        msgs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        
        const lastMsg = msgs[0];
        const partner = users.find(u => u.id === partnerId);
        
        if (!partner) {
          throw new Error(`Partner user with ID ${partnerId} not found`);
        }
        
        return {
          id: partnerId, // Using partner ID as conversation ID for simplicity
          partnerId,
          partnerName: partner.name,
          partnerAvatar: partner.avatar,
          lastMessage: lastMsg.content,
          timestamp: lastMsg.timestamp,
          unread: msgs.some(m => !m.isRead && m.senderId !== CURRENT_USER_ID)
        };
      }
    );
    
    // Sort by timestamp (newest first)
    conversationPreviews.sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    
    setConversations(conversationPreviews);
  }, []);
  
  // Function to format the timestamp
  const formatMessageTime = (timestamp: string) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };
  
  return (
    <div className="space-y-1">
      {conversations.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No conversations yet</p>
        </div>
      ) : (
        conversations.map(conversation => (
          <Link
            to={`/messages/${conversation.partnerId}`}
            key={conversation.id}
            className={`
              flex items-center gap-4 p-4 rounded-lg transition-colors
              ${conversation.unread ? 'bg-blue-50 font-medium' : 'hover:bg-gray-50'}
            `}
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src={conversation.partnerAvatar} alt={conversation.partnerName} />
              <AvatarFallback>
                {conversation.partnerName.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h4 className="truncate text-sm font-medium">
                  {conversation.partnerName}
                </h4>
                <span className="text-xs text-gray-500">
                  {formatMessageTime(conversation.timestamp)}
                </span>
              </div>
              <p className="text-sm truncate text-gray-600">
                {conversation.lastMessage}
              </p>
            </div>
            
            {conversation.unread && (
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
            )}
          </Link>
        ))
      )}
    </div>
  );
}
