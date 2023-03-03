import './App.css'
import FortuneCookie from './components/FortuneCookie'
import AutorCookie from './components/AutorCookie'
import phrases from './data/phrases.json'
import { useState } from 'react'
import Imagen1 from './assets/backgrounds/fondo1.png' 
import Imagen2 from './assets/backgrounds/fondo2.png' 
import Imagen3 from './assets/backgrounds/fondo3.png' 
import Imagen4 from './assets/backgrounds/fondo4.png' 


function App() {
  
  
  const [ index, setIndex ] = useState ( 0 )
  const [ indexFondo, setFondo ] = useState ( 0 )

  const imagenes = [Imagen1,Imagen2,Imagen3,Imagen4]

  const changeUser = () => {
    console.log("Cambio de usuario")
    setIndex(Math.floor(Math.random() * phrases.length))
    setFondo(Math.floor(Math.random() * imagenes.length))
  }



  return (
    <div className="App" style={ {backgroundImage:'url('+imagenes[indexFondo]+')' }} >

      <FortuneCookie
      userData= { phrases[index] }

      />

      <AutorCookie
      userData= { phrases[index] }

      />

      <button onClick= { changeUser }>
        <p>Ver Otro</p>
      </button>
     
    </div>

  )
}

export default App
