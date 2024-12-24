import React from 'react'

function Convert({ markdown, setMarkdown, html, isDark }) {
  return (
    <div className='flex h-[calc(100vh-4rem)] p-6 gap-6'>
      <div className={`w-1/2 rounded-xl overflow-hidden shadow-2xl ${
        isDark ? 'shadow-black/20' : 'shadow-gray-300/20'
      }`}>
        <div className={`${
          isDark ? 'bg-slate-800/50' : 'bg-white/50'
        } backdrop-blur-sm px-4 py-2.5 border-b ${
          isDark ? 'border-gray-700/30' : 'border-gray-200'
        } flex items-center justify-between`}>
          <span className={`font-mono text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>Markdown</span>
          <span className={`text-xs ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          }`}>Input</span>
        </div>
        <textarea 
          placeholder='Enter markdown here...' 
          className={`w-full h-[calc(100%-40px)] font-mono text-wrap text-left p-4 ${
            isDark 
              ? 'bg-slate-900/50 text-gray-200 placeholder-gray-600' 
              : 'bg-gray-50/50 text-gray-800 placeholder-gray-400'
          } resize-none focus:outline-none`}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </div>
      
      <div className={`w-1/2 rounded-xl overflow-hidden shadow-2xl ${
        isDark ? 'shadow-black/20' : 'shadow-gray-300/20'
      }`}>
        <div className={`${
          isDark ? 'bg-slate-800/50' : 'bg-white/50'
        } backdrop-blur-sm px-4 py-2.5 border-b ${
          isDark ? 'border-gray-700/30' : 'border-gray-200'
        } flex items-center justify-between`}>
          <span className={`font-mono text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>HTML</span>
          <span className={`text-xs ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          }`}>Output</span>
        </div>
        <textarea 
          placeholder='HTML code will appear here...' 
          className={`w-full h-[calc(100%-40px)] font-mono text-wrap text-left p-4 ${
            isDark 
              ? 'bg-slate-900/50 text-gray-200 placeholder-gray-600' 
              : 'bg-gray-50/50 text-gray-800 placeholder-gray-400'
          } resize-none focus:outline-none`}
          value={html}
          readOnly
        ></textarea>
      </div>
    </div>
  )
}

export default Convert