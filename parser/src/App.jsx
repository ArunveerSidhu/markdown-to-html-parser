import React, { useState, useEffect } from 'react'
import Convert from './components/Convert'
import ThemeToggle from './components/ThemeToggle'
import { marked } from 'marked'

function App() {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');
  const [isDark, setIsDark] = useState(true);

  const handleConvert = () => {
    const convertedHtml = marked(markdown);
    setHtml(convertedHtml);
  }

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`h-screen w-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-100 to-white'
    } overflow-hidden`}>
      <div className={`flex justify-between w-full h-16 ${
        isDark 
          ? 'bg-slate-950/50' 
          : 'bg-white/50'
        } backdrop-blur-sm items-center px-8 border-b ${
          isDark 
            ? 'border-gray-700/30' 
            : 'border-gray-200'
        }`}>
        <div className={`text-xl font-mono font-bold ${
          isDark 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400' 
            : 'text-gray-800'
        }`}>
          Markdown to HTML Parser
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            className={`${
              isDark 
                ? 'bg-blue-600 hover:bg-blue-500 text-gray-100 shadow-blue-500/20' 
                : 'bg-blue-500 hover:bg-blue-400 text-white shadow-blue-300/20'
            } transition-colors font-mono h-8 px-5 rounded-lg shadow-lg text-sm`} 
            onClick={handleConvert}
          >
            Convert
          </button>
          <div className={`h-8 w-px ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
      <Convert 
        markdown={markdown}
        setMarkdown={setMarkdown}
        html={html}
        isDark={isDark}
      />
    </div>
  )
}

export default App
