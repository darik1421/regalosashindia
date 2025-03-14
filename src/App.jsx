import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleBack = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className={`welcome-screen ${isOpen ? 'fade-out' : ''}`}>
        <div className="welcome-content">
          <h1>¡Un regalo especial para ti!</h1>
          <button onClick={handleOpen} className="open-button">Abrir Regalo</button>
        </div>
      </div>

      <div className={`gift-card ${isOpen ? 'show fade-in' : 'hidden'}`}>
        <button onClick={handleBack} className="back-button">
          ← Volver
        </button>
        
        <div className="gift-content">
          <div className="character-image-top">
            {/* Aquí irá la imagen superior */}
          </div>
          
          <h1 className="gift-title">¡Para alguien muy especial!</h1>
          
          <div className="gift-message">
            <h2>Querida Amiga</h2>
            <p className="message-text slide-in">
              Aquí puedes escribir tu mensaje personalizado...
            </p>
          </div>

          <div className="character-image-bottom">
            {/* Aquí irá la imagen inferior */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
