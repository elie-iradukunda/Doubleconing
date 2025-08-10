import React from 'react'
import music from '../assets/images/music.svg'
import sun from '../assets/images/sun.svg'
import moon from '../assets/images/moon.svg'
import tv from '../assets/images/tv.svg'
import star from '../assets/images/star.svg'
import allow from '../assets/images/allow.svg'

const Header = () => {
  return (
    <header className="bg-gray-600 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        
        <div className="flex items-center space-x-4">
          <img src={music} alt="Music Icon" className="w-10 h-7" />
          <span className="font-bold text-2xl text-white">MiniMax</span>
          <span className="text-blue-500 cursor-pointer pl-4 text-2xl">Audio</span>
        </div>

      
        <div className="flex items-center space-x-4 bg-gray-400 rounded-2xl p-2">
          <img src={sun} alt="Sun Icon" className="w-6 h-6 cursor-pointer text-red-500" />
          <img src={moon} alt="Moon Icon" className="w-6 h-6 cursor-pointer hover:text-gray-700" />
          <img src={tv} alt="TV Icon" className="w-6 h-6 cursor-pointer bg-gray-500 rounded" />
        </div>

       
        <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-2 py-1 max-w-xs flex-grow mx-4">
          <img src={star} alt="Star Icon" className="w-5 h-5" />
          <input 
            type="text" 
            placeholder="Log in to receive points for free" 
            className="flex-grow outline-none text-white text-sm" 
          />
          <img src={allow} alt="Allow Icon" className="w-5 h-5 cursor-pointer" />
        </div>

       
        <div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-400 transition">
            Sign In
          </button>
        </div>

      </div>
    </header>

   
  )
}

export default Header
