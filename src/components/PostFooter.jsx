import React, { useState } from 'react'
import comment from '../../public/assets/icons/ChatCentered.png'
import heart from '../../public/assets/icons/Heart.png'
import heartFill from '../../public/assets/icons/Group 219.png'
import handpoint from '../../public/assets/icons/HandPointing.png'
import improve from '../../public/assets/icons/TrendUp (1).png'

const PostFooter = ({post}) => {
        const [liked, setLiked] = useState(false)
    
  return (
    <div className="flex items-center justify-between mt-2">
    <div className="flex items-center gap-6">
        <button
            className='flex items-center gap-1'
            onClick={() => setLiked(!liked)}
        >
            { liked ? <img src={heart} alt="" /> : <img src={heartFill} alt="" /> }
            {post.likes > 0 && <span className="text-sm">{post.likes}</span>}
        </button>

        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
            <img src={comment} alt="" />
            {post.comments > 0 && <span className="text-sm">{post.comments}</span>}
        </button>

        <button className="flex items-center gap-1 text-gray-500 hover:text-green-500">
            <img src={handpoint} alt="" />
            {post.shares > 0 && <span className="text-sm">{post.shares}</span>}
        </button>
        <button className="flex items-center gap-1 text-gray-500 hover:text-green-500">
            <img src={improve} alt="" />
            {post.improve > 0 && <span className="text-sm">{post.improve}</span>}
        </button>
    </div>

    {post.type === "article" && (
        <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
            </svg>
            Article
        </div>
    )}
</div>
  )
}

export default PostFooter
