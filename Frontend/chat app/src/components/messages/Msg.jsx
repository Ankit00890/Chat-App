import React from 'react'

const Msg = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full border border-slate-600 bg-white p-0.5'>
          <img alt='user avatar'
            src={
              "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            }
          />
        </div>
      </div>
      <div className={'chat-bubble text-white bg-blue-600 shadow-sm'}>Hii What is upp?</div>
      <div className='chat-footer opacity-70 text-xs flex gap-1 items-center mt-1 text-slate-400'>12:42</div>
    </div>
  )
}

export default Msg