import React from 'react'

const Notification = ({message, success}) => {
    if (message === null){
        return null
    }

    if (success){
        return (
            <div className='success'>
                {message}
            </div>
        )
    }

    return (
        <div className="fail">
            {message}
        </div>
    )
}
export default Notification