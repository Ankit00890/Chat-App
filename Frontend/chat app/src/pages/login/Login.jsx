import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import toast from 'react-hot-toast'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
  }
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-md mx-auto h-screen px-4'>
      <div className="w-full p-6 rounded-lg shadow-md bg-slate-800/50 bg-clip-padding backdrop-filter backdrop-blur-lg border border-slate-700">
        <h1 className="text-3xl font-semibold text-center text-gray-100">
          Login
          <span className='text-blue-300'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Username</span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10 bg-gray-700/50 text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:border-blue-500'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text text-gray-200'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10 bg-gray-700/50 text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:border-blue-500'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to='/signup' className='text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-gray-300'>
            {"Don't"} have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2 bg-blue-600 hover:bg-blue-700 text-white border-none'
              disabled={loading}
            >
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}