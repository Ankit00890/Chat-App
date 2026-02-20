import React, { useState } from 'react'
import { BsSend } from "react-icons/bs"
import useSendMessage from '../../hooks/useSendMessage'
const MessageInput = () => {
  const [message, setMessage] = useState("")
  const {loading, sendMessage} = useSendMessage()
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(!message) return
    await sendMessage(message)
    setMessage("")
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input type="text"
          className='border border-slate-700 text-sm rounded-full block w-full p-3 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500'
          placeholder='Type a message...'
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
        />
       <button
  type="submit"
  className="absolute inset-y-0 end-0 flex items-center pe-4 text-blue-500 hover:text-white transition-colors"
>
  {loading ? (
    <div className="loading loading-spinner"></div>
  ) : (
    <BsSend size={18} />
  )}
</button>

      </div>
    </form>
  )
}

export default MessageInput