
import { useState } from "react";
import { useParams } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import { MessagesList } from "@/components/messages/MessagesList";
import { Conversation } from "@/components/messages/Conversation";

const MessagesPage = () => {
  const { userId } = useParams<{ userId?: string }>();
  
  return (
    <RootLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Messages</h1>
        
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-3 h-[600px]">
            {/* Conversations list */}
            <div className="border-r">
              <div className="p-4 border-b">
                <h2 className="font-medium">Conversations</h2>
              </div>
              <div className="overflow-y-auto h-[calc(600px-57px)]">
                <MessagesList />
              </div>
            </div>
            
            {/* Conversation area */}
            <div className="md:col-span-2">
              {userId ? (
                <Conversation />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Select a conversation to start messaging</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default MessagesPage;
