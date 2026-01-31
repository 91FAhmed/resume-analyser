import React from 'react'
import Button from './Button'
const Navbar = () => {
  return (
  <nav className="max-w-3xl rounded-full mx-auto flex items-center justify-between px-8 py-4   bg-white shadow-md" >
    <div className="text-2xl font-bold mask-l-from-95% bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">Analyserz</div>
    <div>
        <Button children={"hello"} />
    </div>
   </nav>
  )
}

export default Navbar