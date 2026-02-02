import React from 'react'
import Msg from './Msg'
const Messages = () => {
    return (
        <div className='px-4 flex-1 overflow-auto'>
            <Msg />
            <Msg />
        </div>
    )
}

export default Messages