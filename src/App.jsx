import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Work from "./components/Work"
import { useRef, useState } from "react"

function App() {
  // define setup for spotlight effect
  const divRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='card-spotlight-effect'
    >
      <div
        className='spotlight'
        style={{
          opacity,
          background: `radial-gradient(700px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.04), transparent 40%)`,
        }}
      />
      <Navbar />
      <Home
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        opacity={opacity}
        position={position}
      />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
