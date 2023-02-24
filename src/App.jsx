import './App.css'
import { useState } from 'react'

function App() {

  //Cual es la diferencia entre propiedades y estado
  //Props --> Informacion que viene desde el padre
  //Estado --> Informacion / logica interna del componente, y prpia del componente

  //useState --> Hook de estado 

  //hooks son funciones, tienen valor de retorno. Se ejecutan
  //Crear variable(s)  y almacernar valor de retorno del hook

  //useState devuelve un state y una funcion seteadora del state
  
  //const [ state, setState] = useState( valorInicial)
  //setState (nuevoValor)

  //contador
  const [ counter, setCounter ] = useState ( 0 )

  const incrementLike = () => {
    console.log("Click")
    setCounter( counter + 1)
  }

  const decrementLike = () => {
    if(counter !=0){
      setCounter(counter - 1)
      if(counter === 0){
        setCounter
      }
    }
  }

  return (
    <div className="App">
      <h1>Total de likes { counter } </h1>

      <button onClick={incrementLike}>Like</button>
      <button onClick={decrementLike}>Like</button>
    </div>
  )
}

export default App
