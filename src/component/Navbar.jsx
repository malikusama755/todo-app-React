import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
            <div className="logo">
                <span className='text-lg font-bold mx-8'>Todo App</span>
            </div>
        <ul className="flex gap-8">
            <li className='hover:text-gray-400 cursor-pointer'>Home</li>
            <li className='hover:text-gray-400 cursor-pointer'>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
