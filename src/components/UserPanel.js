import {Link} from 'react-router-dom'

import {useState, useEffect} from 'react'

function UserPanel () {

    const [user, setUser] = useState("")

    useEffect(()=>{

        fetch('/api/users/getsession')
            .then( response => response.json())
                .then( data => {
                    if (data !== "No access") {

                        fetch("/api/users/" + data)
                            .then( response2 => response2.json())
                            .then( data2 => {
                                // console.log(data2.data)
                                setUser(data2.data)
                            })
                            .catch( error => console.log(error));

                    } else {
                        document.getElementById("data").innerHTML = data
                    }
                })
                    .catch( error => console.log(error));
    
}, []);

    function logoutUser() {
        fetch('/api/users/logout')
            .then( response => window.location.pathname = "/")
                // .then( data => )
                    .catch( error => console.log(error));
    }


    return(
        <div id="data" className="popup">
            <Link className="absolute top-1 right-2 text-4xl bolder" to='/'>X</Link>

            <section className="text-center">
                {user === "" ? <p>CARGANDO USUARI@...</p> : <p className="text-4xl font-semibold">Hola {user.username}!</p> }
                <p className="py-4">Aquí podés ver tooodos tus CHAJÁ! o hacer</p>
                <p><button className="btn-left" onClick={logoutUser} type="button">LOGOUT</button></p>
            </section>

            <section className=" grid lg:grid-cols-3 grid-cols-1 gap-2 p-2 w-full">

            {user === "" ? <p>CARGANDO CHAJAS...</p> : user.Chaja.map ( chaja => {
            return <article key={chaja.id} className=" shadow-lg font-semibold m-2 bg-white rounded border-4 b-gray-900 py-2 px-4 text-xl text-gray-700 transition  hover:bg-purple-800 hover:text-white">
                    <p className="inline-block break-all">{chaja.chaja}</p>
                    <p className="pt-1 text-right text-sm">{new Date(chaja.createdAt).toLocaleString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute:'2-digit'})}</p>
                </article>
            })}

            </section>

            
        </div>
    )

}

export default UserPanel