import React from 'react'
import Sidebar from '../../components/Sidebar'
import MessagesContainer from '../../components/messages/MessagesContainer'

const Home = () => {
  const [selectedConversation, setSelectedConversation] = React.useState(null);

  return (
    <div className='flex h-full w-full bg-transparent'>
      <Sidebar onSelectConversation={setSelectedConversation} selectedConversation={selectedConversation} />
      <MessagesContainer selectedConversation={selectedConversation} />
    </div>
  )
}

export default Home