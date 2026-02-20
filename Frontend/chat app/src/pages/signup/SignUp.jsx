import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const { loading, signup } = useSignup()
  const handlesubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }

  return (
    <div className='flex flex-col items-center justify-center w-full max-w-md mx-auto h-screen px-4'>
      <div className="w-full p-6 rounded-lg shadow-md bg-slate-800/50 bg-clip-padding backdrop-filter backdrop-blur-lg border border-slate-700">
        <h1 className="text-3xl font-semibold text-center text-gray-100">
          Sign Up <span className='text-blue-300'> ChatApp</span>
        </h1>

        <form onSubmit={handlesubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='John Doe'
              className='w-full input input-bordered h-10 bg-gray-700/50 text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:border-blue-500'
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Username</span>
            </label>
            <input
              type='text'
              placeholder='johndoe'
              className='w-full input input-bordered h-10 bg-gray-700/50 text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:border-blue-500'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-gray-200'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10 bg-gray-700/50 text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:border-blue-500'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to='/login' className='text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-gray-300'>
            Already have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 bg-blue-600 hover:bg-blue-700 text-white border-none'
            disabled={loading}
            >
            {loading ? <span className='loading loading-spinner'></span>:"Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp