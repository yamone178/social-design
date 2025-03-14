import React from 'react'
import Feed from './pages/Feed'

const App = () => {
  return (
    <div className="flex justify-center min-h-screen bg-white py-[30px]">
    <div className="w-full max-w-[744px] bg-white text-gray-900">
      <Feed />
    </div>
  </div>
  )
}

export default App
