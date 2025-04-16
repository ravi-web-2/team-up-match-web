
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { messages as allMessages, users } from "@/data/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { format } from "date-fns";

// Context user ID (in a real app this would come from auth context)
const CURRENT_USER_ID = "u1";

export function Conversation() {
  const { userId } = useParams<{ userId: string }>();
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  const partner = users.find(u => u.id === userId);
  
  // Load messages for the conversation
  useEffect(() => {
    if (!userId) return;
    
    // Filter messages for this conversation
    const conversationMessages = allMessages.filter(
      msg => (msg.senderId === CURRENT_USER_ID && msg.receiverId === userId) || 
             (msg.senderId === userId && msg.receiverId === CURRENT_USER_ID)
    );
    
    // Sort by timestamp (oldest first)
    conversationMessages.sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
    
    setMessages(conversationMessages);
  }, [userId]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Format message timestamp
  const formatMessageTime = (timestamp: string) => {
    return format(new Date(timestamp), "h:mm a");
  };
  
  // Handle sending a new message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !userId) return;
    
    // Create a new message
    const newMsg = {
      id: `m${Date.now()}`,
      senderId: CURRENT_USER_ID,
      receiverId: userId,
      content: newMessage,
      timestamp: new Date().toISOString(),
      isRead: false
    };
    
    // Add to the messages
    setMessages(prev => [...prev, newMsg]);
    
    // Clear input
    setNewMessage("");
  };
  
  // If no partner exists, show an error
  if (!partner) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Conversation not found</p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b p-4 flex items-center gap-3">
        <Avatar>
          <AvatarImage src={partner.avatar} alt={partner.name} />
          <AvatarFallback>
            {partner.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-medium">{partner.name}</h2>
          {partner.location.isRemote ? (
            <p className="text-xs text-gray-500">Remote</p>
          ) : (
            <p className="text-xs text-gray-500">
              {partner.location.city}, {partner.location.country}
            </p>
          )}
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No messages yet. Say hello!</p>
          </div>
        ) : (
          messages.map(message => {
            const isSentByMe = message.senderId === CURRENT_USER_ID;
            
            return (
              <div 
                key={message.id} 
                className={`flex ${isSentByMe ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`
                  max-w-[70%] break-words rounded-lg p-3
                  ${isSentByMe 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'}
                `}>
                  <p className="text-sm">{message.content}</p>
                  <p className={`
                    text-[10px] mt-1 text-right
                    ${isSentByMe 
                      ? 'text-primary-foreground/70' 
                      : 'text-gray-500'}
                  `}>
                    {formatMessageTime(message.timestamp)}
                  </p>
                </div>
              </div>
            );
          })
        )}
        <div ref={endOfMessagesRef} />
      </div>
      
      {/* Message input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
