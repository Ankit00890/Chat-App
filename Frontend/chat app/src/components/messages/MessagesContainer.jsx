import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected'
import useConversation from '../../zustand/useConversation'

const MessagesContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()

    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])
    return (
        <div className='md:min-w-[450px] flex flex-col w-full h-full'>
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Header */}
                    <div className='bg-slate-500/0 px-4 py-2 mb-2 border-b border-white/10'>
                        <span className='label-text text-slate-400'>To:</span> <span className='text-white font-bold ml-2 text-lg'>{selectedConversation.fullName}</span>
                    </div>
                    {/* <Msg/> */}
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessagesContainer