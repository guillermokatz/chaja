import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Alerts from '../assets/js/Alerts'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

function UserPanel () {

    const [user, setUser] = useState("")

    useEffect(()=>{

            if (localStorage.getItem("user_id")) {
                        fetch("https://chaja-api.herokuapp.com/api/users/" + localStorage.getItem("user_id"))
                            .then( response2 => response2.json())
                            .then( data2 => {
                                // console.log(data2.data)
                                setUser(data2.data)
                            })
                            .catch( error => console.log(error));

            } else {
                        document.getElementById("data").innerHTML = "No access"
            }
    }, []);

    function logoutUser() {
        // console.log("Logged out as user " + localStorage.getItem("user_id"))
        localStorage.removeItem("user_id");
        window.location.pathname = "/"
    }

    function deleteUser() {
        
        MySwal.fire({
        
            icon: 'error',
            title: '¿Confirma borrar a ' + user.username.toUpperCase() + '? Sus chajas NO desaparecerán pero su nombre SÍ.',
            confirmButtonColor: "#991B1B",
            confirmButtonText: "CONFIRMAR",
            showCancelButton: 'true',
            cancelButtonText: 'CANCELAR',
            cancelButtonColor: '#8B5CF6',
            iconColor: "#991B1B",
            
        }).then((result)=>{        
            if(result.isConfirmed) {        
            // let confirmPass = window.prompt('Reingrese su contraseña para eliminar usuario')

                    MySwal.fire({
                        icon: 'warning',
                        title: 'Reingrese su contraseña para eliminar usuario',
                        input: "text", 
                        confirmButtonColor: "#991B1B",
                        iconColor: "#991B1B",
                        showCancelButton: 'true',
                        cancelButtonText: 'CANCELAR',
                        cancelButtonColor: '#8B5CF6',
                    }).then(result => {

                            fetch('https://chaja-api.herokuapp.com/api/users/login', {
                                method: 'POST',
                                body: new URLSearchParams({
                                'username': user.username,
                                'password': result.value
                                })
                            })
                                .then(response => response.json() )
                                .then(data => {
                                    
                                    if (data === "Contraseña incorrecta") {
                                    Alerts.pop(data)
                                    } else {
                                        
                                        fetch('https://chaja-api.herokuapp.com/api/users/' + user.id + '/delete', {method: 'DELETE'})
                                        .then( response => {
                                            localStorage.removeItem("user_id");
                                            window.location.pathname = "/"
                                        })
                                        // .then( data => )
                                        .catch( error => console.log(error));
                                    }             
                                    
                                })
                                .catch(error => console.log(error));
                        })
            }
        })
            
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

            {user === "" ? <p className="font-bold">CARGANDO CHAJAS...</p> : user.Chaja.map ( chaja => {
            return <article key={chaja.id} className=" shadow-lg font-semibold m-2 bg-white rounded border-4 b-gray-900 py-2 px-4 text-xl text-gray-700 transition  hover:bg-purple-800 hover:text-white overflow-hidden">
                    <p className="inline-block">{chaja.chaja}</p>
                    <p className="pt-1 text-right text-sm">{new Date(chaja.createdAt).toLocaleString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute:'2-digit'})}</p>
                </article>
            })}

            </section>
            <p className="self-end	"><button className="btn-del-user " onClick={deleteUser} type="button">BORRAR USUARIO</button></p>

            
        </div>
    )

}

export default UserPanel