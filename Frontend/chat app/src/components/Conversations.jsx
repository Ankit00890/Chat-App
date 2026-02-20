import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import { useSocketContext } from '../context/SocketContent';

const Conversations = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers, socket } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      // Shake only if the message is FROM this conversation's user
      if (newMessage.senderId === conversation._id && !isSelected) {
        setShaking(true);
        setTimeout(() => setShaking(false), 600); // remove class after animation
      }
    };

    socket.on("newMessage", handleNewMessage);
    return () => socket.off("newMessage", handleNewMessage);
  }, [socket, conversation._id, isSelected]);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer transition-colors ${isSelected ? 'bg-sky-500' : ''} ${shaking ? 'shake' : ''}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="relative">
          <div className='avatar'>
            <div className='w-12 rounded-full bg-white flex items-center justify-center p-1'>
              <img
                src={conversation.profilePic}
                alt='user avatar'
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://avatar.iran.liara.run/public/${conversation.gender?.toLowerCase() === 'female' ? 'girl' : 'boy'}?username=${conversation.username}`
                }}
              />
            </div>
          </div>
          {isOnline && (
            <span className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900'></span>
          )}
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>{conversation.fullName}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  )
}

export default Conversations