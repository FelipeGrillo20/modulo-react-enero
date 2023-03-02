
const FortuneCookie = ( {userData} ) => {


    return(
   
        <div>
            <h1 className="titulo__principal"> GALLETAS DE LA FORTUNA </h1>
            <div className="user-cookie">
                <ul>
                    <li>
                    { userData.phrase }
                    </li>
                </ul>
                <p className="parrafo__autor"> { userData.author } </p>
            </div>
        </div>




    )
}

export default FortuneCookie 