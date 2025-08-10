import React from 'react'
import volume from '../assets/images/volume.svg'
import upallow from '../assets/images/upallow.svg'
import home from '../assets/images/home.svg'
import voice from '../assets/images/voice.svg'
import voicemusic from '../assets/images/voicedes.svg'
import book from '../assets/images/book.svg'
import text from '../assets/images/textT.svg'
const MainContent = () => {
  return (
  <>
  <main className='flex'>
    <div className='bg-gray-700 flex flex-col  w-1/4'>
        <div className="flex items-center space-x-2 text-center">
<img src={volume} alt="Volume Icon" className='w-6 h-9'  />
<span className='text-center'>Audio</span>
<img src={upallow} alt=""  className='w-6 h-9'/>
        </div>


        <div>
            <div className="flex items-center space-x-2 text-center">
                <img src={home} alt=""   className='w-6 h-9'  />
                <span>Home</span>
            </div>
            <div className="flex items-center space-x-2 text-center">
                <img src={text} alt=""  className='w-6 h-9'   />
                <span>Txet To speach</span>
            </div>
            <div className="flex items-center space-x-2 text-center">
                <img src={book} alt=""  className='w-6 h-9'   />
                <span>Voice Design</span>
            </div>
            <div className="flex items-center space-x-2 text-center">
                <img src={voice} alt=""  className='w-6 h-9'   />
                <span>Voice Clone</span>
            </div>
            <div className="flex items-center space-x-2 text-center">
                <img src={voicemusic} alt=""  className='w-6 h-9'   />
                <span>Voice Isolator</span>
            </div>

        </div>
    </div>



    <div className='flex-1 bg-gray-800 p-4'>

        <div>
        <div>
            <h2 className='text-2xl text-white'>Voice Library</h2>
        </div>
        <div className='bg-purple-600 rounded-2xl p-3 flex justify-between text-white items-center'>
            <div>
            <span className='text-2xl text-white'>Voice Design</span>
            <button className='bg-purple-400 rounded-md p-1 ml-3'>New</button>
            <p>Create custom voices from text descriptions</p>
            </div>

            <div>
                <button className='bg-purple-500  rounded-md p-2 items-center'>Try Now</button>
            </div>
        </div>


  <div className='bg-purple-600 rounded-2xl p-3 flex justify-between text-white items-center space-y-3 mt-4'>
            <div>
            <span className='text-2xl text-white'>Instant Clone</span>
        
            <p>Clone any voice instantly with just a few seconds of audio</p>
            <p>Voice slots remaining: 5/5</p>
            </div>

            <div>
                <button className='bg-purple-500  rounded-md p-2 items-center'>Upload Audio</button>
            </div>
        </div>

        <div className='bg-gray-600 mt-3 rounded-md p-3 items-center flex space-x-7 text-white'>
            <span className='bg-gray-700 p-1 rounded-xl cursor-pointer'>Library</span>
            <span className='cursor-pointer'>My voice</span>
            <span className='cursor-pointer'>Collected Voice</span>
        </div>


       <div className="bg-blue-500 flex gap-4 p-1 rounded-lg mt-4">

  <div className="flex flex-col bg-blue-500 p-2 rounded-md w-40">
    <label className="font-semibold text-white mb-1">Languages</label>
    <select className="p-1 rounded-md border border-gray-300">
      <option>All</option>
      <option>Kinyarwanda</option>
      <option>English</option>
      <option>French</option>
      <option>India</option>
    </select>
  </div>

 
  <div className="flex flex-col p-2 rounded-md  w-40">
    <label className="font-semibold mb-1">Accent</label>
    <select className="p-1 rounded-md border border-gray-300">
      <option>All</option>
      <option>En</option>
      <option>British</option>
      <option>Au</option>
      <option>India</option>
    </select>
  </div>


  <div className="flex flex-col p-2 rounded-md  w-40">
    <label className="font-semibold mb-1">Gender</label>
    <select className="p-1 rounded-md border border-gray-300">
      <option>All</option>
      <option>Male</option>
      <option>Female</option>
      <option>Robot</option>
      <option>Other</option>
    </select>
  </div>

  
  <div className="flex flex-col p-2 rounded-md  w-40">
    <label className="font-semibold mb-1">Age</label>
    <select className="p-1 rounded-md border border-gray-300">
      <option>All</option>
      <option>Young Adult</option>
      <option>Middle</option>
      <option>Youth</option>
      <option>Adult</option>
    </select>
  </div>
</div>


        </div>
    </div>
  </main>




  </>
  )
}

export default MainContent
