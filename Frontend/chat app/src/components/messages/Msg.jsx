import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Msg = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt)
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-600' : 'bg-slate-600';
  return (
    <div className={`chat ${chatClassName} ${message.isNew ? 'shake' : ''}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full border border-slate-600 bg-white p-0.5'>
          <img alt='user avatar'
            src={
              profilePic || "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            }
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} shadow-sm pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-70 text-xs flex gap-1 items-center mt-1 text-slate-400'>{formattedTime}</div>
    </div>
  )
}

export default Msg