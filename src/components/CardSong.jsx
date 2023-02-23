const CardSong = ( {titulo, genero, banda, album, fecha} ) => {
    return(
        <div className='card-song'>
            <h2>{ titulo }</h2>
            <h3><span>Genero:</span> { genero } </h3>
            <h3><span>Banda:</span> { banda } </h3>
            <h3><span>Album:</span> { album }</h3>
            <h3><span>Fecha:</span> { fecha } </h3>
        </div>
      
       
        

    )
}

export default CardSong;