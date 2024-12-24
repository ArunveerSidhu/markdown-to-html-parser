import React from 'react'

function Convert() {
  return (
    <div className='flex h-[calc(100vh-5rem)] p-8 gap-8'>
      <div className='w-1/2 rounded-xl overflow-hidden shadow-2xl shadow-black/20'>
        <div className='bg-slate-800/50 backdrop-blur-sm px-4 py-2 border-b border-gray-700/30'>
          <span className='text-gray-400 font-mono text-sm'>Markdown</span>
        </div>
        <textarea 
          placeholder='Enter markdown here...' 
          className='w-full h-[calc(100%-40px)] font-mono text-wrap text-left p-4 bg-slate-900/50 text-gray-200 resize-none focus:outline-none'
        ></textarea>
      </div>
      
      <div className='w-1/2 rounded-xl overflow-hidden shadow-2xl shadow-black/20'>
        <div className='bg-slate-800/50 backdrop-blur-sm px-4 py-2 border-b border-gray-700/30'>
          <span className='text-gray-400 font-mono text-sm'>HTML</span>
        </div>
        <textarea 
          placeholder='HTML code will appear here...' 
          className='w-full h-[calc(100%-40px)] font-mono text-wrap text-left p-4 bg-slate-900/50 text-gray-200 resize-none focus:outline-none' 
          readOnly
        ></textarea>
      </div>
    </div>
  )
}

export default Convert