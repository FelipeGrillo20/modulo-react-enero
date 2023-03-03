
const AutorCookie = ( {userData} ) => {


    return(
   
        <div className="parrafo__autor">
                <ul>
                    <li><b>
                    { userData.author }</b>
                    </li>
                </ul>   
        </div>
    )
}

export default AutorCookie