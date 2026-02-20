import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearch] = useState("")
  const {setSelectedConversation}= useConversation()
  const {conversations} = useGetConversations()
  const handleSubmit =(e) =>{
    e.preventDefault()
    if (!search) return
    if (search.length <3) {
     return toast.error('Search term must be at least 3 characters long')
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found");
    }

  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input type='text' placeholder='Search...' className='input input-bordered rounded-full bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-blue-600 border-none text-white hover:bg-blue-500'>
        <IoSearchSharp className='w-5 h-5 outline-none' />
      </button>
    </form>
  )
}

export default SearchInput