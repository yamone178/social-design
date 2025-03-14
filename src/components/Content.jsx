import React, { useRef, useState } from 'react'
import Janedoe from '../assets/images/JaneDoe.png'
import PostFooter from './postFooter'
import chat from '../assets/images/ChatCircleDots.png'
import imggp from '../assets/icons/Group 216.png'


const Content = ({post}) => {

    const [liked, setLiked] = useState(false)

    const scrollRef = useRef(null);
    const handlePointerMove = (e) => {
      if (e.buttons === 1) { // Only move when pointer is pressed
          scrollRef.current.scrollLeft -= e.movementX; // Reverse direction for natural scrolling
      }
  };

  return (
    <div className="p-4 border-b border-gray-200">
     { post.flicked && <div className="flex gap-3 mb-4 ">
        <img src={imggp} alt="" />
        <p className='text-lg'><span className='font-bold text-primary'>Charlie Robert</span> and 5 others flicked this post</p>
      </div>}
    <div className="flex items-start gap-3">
        
        <div className="relative w-10 h-10 bg-gray-200 rounded-full">
          {/* Replace Janedoe with profileImage */}
          <img
            key="profile-image"
            src={Janedoe}
            alt={post.user.name}
            className="relative object-cover w-full h-full"
            // Prioritize loading this image
          />

          <div className="absolute w-[12px] h-[12px] bg-[#00BA00] rounded-full left-auto right-0 bottom-0">
            
          </div>
        </div>
      <div className="flex-1 w-[90%]">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-primary">{post.user.name}</span>
            {post.user.verified && (
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            )}
            <span className="text-sm text-gray-500">· {post.time}</span>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>

        {post.content && (
          <div className="my-2 text-gray-900">
            <p>{post.content}</p>
          </div>
        )}

        {post.hasMedia && (
          <div className="relative mt-2 mb-3 rounded-xl">

        <div className="w-full ">
            <div 
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto cursor-pointer select-none whitespace-nowrap hide-scrollbar active:cursor-grabbing"
            onPointerMove={handlePointerMove}
            onPointerDown={(e) => e.target.setPointerCapture(e.pointerId)} // Captures pointer for smooth scrolling
            onPointerUp={(e) => e.target.releasePointerCapture(e.pointerId)}
            >
                {post.images.length > 0 &&
                    post.images.map((img, index) => (
                        <div key={index} className="flex-shrink-0 ">
                            <img src={img} alt="Post media" className="object-cover w-full h-full" />
                        </div>
                    ))}
            </div>

           { post.type == "ads" && <div className="">
              <p className=' text-[20px] my-3 text-primary'>{post.ads.content}</p>
              <p>
                <h3 className='text-lg text-extra_light'>Price</h3>
                <h2 className='text-2xl font-semibold text-green-700'>{post.ads.price}</h2>
              </p>
              <div className="flex px-[16px] py-[10px] bg-[#ECF1F4] w-[147px] rounded-md mx-auto mt-2 gap-2">
                <img src={chat} alt="" />
                <h3 className=' text-[#2C3E50] text-xl font-medium'>Message</h3>
              </div>
            </div>}
        </div>

            {post.mediaCaption && (
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">{post.mediaCaption}</h2>
              </div>
            )}
            {post.mediaType === "video" && (
              <div className="absolute flex items-center gap-2 text-xs text-white bottom-3 right-3">
                <div className="flex items-center">
                  <button className="p-1 rounded-full bg-black/50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <span>0:24 / 1:04</span>
                <button className="p-1 rounded-full bg-black/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}

        <PostFooter post={post} />
      </div>
    </div>
  </div>
  )
}

export default Content
