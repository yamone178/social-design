import React from 'react'
import jondoe from '../assets/images/JohnDoe.png'
import pic from '../assets/icons/ImageSquare.png'
import gif from '../assets/icons/Gif.png'
import poll from '../assets/icons/Poll.png'
import location from '../assets/icons/MapPin.png'
import bag from '../assets/icons/Handbag.png'
import note from '../assets/icons/Note.png'
import blueMark from '../assets/icons/Group 22.png'


const CreatePost = () => {

  return (
    <div className="p-4 border-b border-gray-200">
    <div className="flex items-start gap-3">
      <div className="relative flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full">
        <img src={jondoe} alt="John Doe" className="relative object-cover w-full h-full " />
        <div className="absolute w-[12px] h-[12px] bg-[#00BA00] z-20 rounded-full left-auto right-0 bottom-0">
            
          </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl font-bold text-primary">John Doe</span>
          <img src={blueMark} alt=""  />
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Share your thoughts"
            className="w-full bg-white text-gray-900 outline-none text-[18px]"
            // value={thought}
            // onChange={(e) => setThought(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button >
              <img src={pic} alt="" />
            
            </button>
            
            <button >
              <img src={gif} alt="" />
             
            </button>
            <button >
              <img src={poll} alt="" />
             
            </button>
            <button >
              <img src={location} alt="" />
             
            </button>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
              <img src={bag} alt="" />
              <span className="text-base font-normal">Product/Service</span>
            </button>
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
             <img src={note} alt="" />
              <span className="text-base font-normal">Create article</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreatePost
