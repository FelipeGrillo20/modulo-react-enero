import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import CardSong from './components/CardSong'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button 
      propiedad="Este es el valor de la propiedad"
      texto="Cancelar"
      />
      <Button 
      texto="Aceptar"
      />
      <Button 
      texto="Iniciar sesión"
      />
      <CardSong 
      titulo="StoryTime"
      genero="Rock"
      banda="Blink"
      album="California"
      fecha="2016"
      />
      <CardSong 
      titulo="Hotel California"
      genero="Metalica"
      banda="Metallica"
      album="One"
      fecha="2001"
      />
    </div>
  )
}

export default App
