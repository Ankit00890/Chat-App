import React from 'react'
import Conversations from './Conversations'
import useGetConversations from '../hooks/useGetConversations'
import { getRandomEmoji } from '../utils/emojis';

const convo = ({ onSelectConversation, selectedConversation }) => {
  const { loading, conversations } = useGetConversations();
  console.log("Conversations:", conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversations
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
          onSelectConversation={onSelectConversation}
          selectedConversation={selectedConversation}
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default convo