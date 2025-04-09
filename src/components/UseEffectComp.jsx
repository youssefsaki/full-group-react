import { useEffect, useState } from "react"

const UseEffectComp = () => {
  // Store current window width in state
  const [windowWitdth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // This function updates the width when window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    // ✅ Add the event listener when component mounts
    window.addEventListener('resize', handleResize)

    // 🧹 This cleanup function removes the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }); // ⚠️ No dependency array => runs on every render, not just once

  return (
    <div>
        Width - {windowWitdth}
    </div>
  )
}

export default UseEffectComp
