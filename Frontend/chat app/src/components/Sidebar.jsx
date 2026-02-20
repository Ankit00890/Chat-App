import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './convo'
import LogoutButton from './LogoutButton'

const Sidebar = ({ onSelectConversation, selectedConversation }) => {
  return (
    <div className='border-r border-white/10 p-4 flex flex-col w-80 bg-black/20 backdrop-filter backdrop-blur-lg'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations onSelectConversation={onSelectConversation} selectedConversation={selectedConversation} />
      <LogoutButton />
    </div>
  )
}

export default Sidebar