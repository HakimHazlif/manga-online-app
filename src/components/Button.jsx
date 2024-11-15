import React from 'react'

const Button = () => {

  const handleClick = () => {
    window.location.href = '#app-download'
  }

  return (
    <button className='w-full px-8 py-3 rounded-full bg-light-green-100 text-base' onClick={handleClick}>
      حمل التطبيق
    </button>
  )
}

export default Button