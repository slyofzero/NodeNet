'use client'

import React, { useState, useEffect } from 'react'

interface TypewriterProps {
  text: string
  typingSpeed?: number
}

const Typewriter: React.FC<TypewriterProps> = ({ text, typingSpeed = 120 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      } else {
        clearInterval(interval) // Stop the interval when typing is complete
      }
    }, typingSpeed) // Adjust typing speed by changing this value (milliseconds)

    return () => clearInterval(interval) // Cleanup function to clear the interval on unmount
  }, [text, currentIndex, typingSpeed])

  return (
    <span className='text-[48px] font-extrabold gradient-text text-center'>
      {displayText}
    </span>
  )
}

export default Typewriter
