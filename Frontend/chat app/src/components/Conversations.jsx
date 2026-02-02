
import React from 'react'

const Conversations = ({ onSelectConversation, selectedConversation }) => {
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer transition-colors ${selectedConversation ? 'bg-sky-500' : ''}`}
        onClick={() => onSelectConversation({ id: 1, fullName: 'John Doe', profilePic: "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" })}
      >
        <div className='avatar online'>
          <div className='w-12 rounded-full bg-white flex items-center justify-center p-1'>
            <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt='user avatar' />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>Jhon Doe</p>
            <span className='text-xl'>🎃</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  )
}

export default Conversations