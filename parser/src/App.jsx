import React from 'react'
import Convert from './components/Convert'

function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden'>
      <div className='flex justify-between w-full h-20 bg-slate-950/50 backdrop-blur-sm items-center px-8 border-b border-gray-700/30'>
        <div className='text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400'>
          Markdown to HTML Parser
        </div>
        <button className='bg-blue-600 hover:bg-blue-500 transition-colors font-mono text-gray-100 h-10 px-6 rounded-lg shadow-lg shadow-blue-500/20'>
          Convert
        </button>
      </div>
      <Convert />
    </div>
  )
}

export default App
