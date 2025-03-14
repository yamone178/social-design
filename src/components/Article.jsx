import React from 'react'
import Janedoe from '../assets/images/JaneDoe.png'
import note from '../assets/icons/Note.png'
import PostFooter from './PostFooter'


const Article = ({ post }) => {
    

    return (
        <div className="p-4 border-b border-gray-200">

            <div className="flex items-start gap-3">
                <div className="">
                    <p>hello</p>
                </div>
                <div className="relative flex-shrink-0 w-10 h-10 overflow-hidden bg-gray-200 rounded-full">
                    <img
                        src={Janedoe}
                        alt={post.user.name}
                        className="relative object-cover w-full h-full"
                    />
                    <div className="absolute w-[12px] h-[12px] bg-[#00BA00] rounded-full left-auto right-0 bottom-0">
            
            </div>
                </div>
                <div className="flex-1">
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

                    <div className='flex justify-between mt-3 border rounded-2xl border-border_light'>
                        <div className=" flex flex-col gap-1 py-[16px] px-[12px] w-[55%]">
                            <h3 className='flex gap-1 '>
                                <img src={note} alt="" />
                                Article</h3>
                            <h2 className='text-xl font-medium '>{post.article.title}</h2>
                            <p className='text-lg font-normal text-extra_light'>{post.article.content.substring(0,120)}...</p>
                        </div>
                        <div className=" w-[274px] h-[192px]">                          
                             <img src={post.thumbnail} alt="" className=''/>
                        </div>
                    </div>

                    <PostFooter  post={post}/>
                </div>
            </div>
        </div>

    )
}

export default Article
