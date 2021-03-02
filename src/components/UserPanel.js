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
                                console.log(data2.data)
                                setUser(data2.data)
                            })
                            .catch( error => console.log(error));

                    } else {
                        document.getElementById("data").innerHTML = data
                    }
                })
                    .catch( error => console.log(error));
    
}, []);


    return(
        <div id="data">
            {user === "" ? <p>Cargando usuario...</p> : <p>{user.username}</p> }

        </div>
    )

}

export default UserPanel