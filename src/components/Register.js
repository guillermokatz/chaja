import {Link} from 'react-router-dom'
import Alerts from '../assets/js/Alerts'

function Register () {

  let validateRegister = e => {
    e.preventDefault()
    if(document.getElementById("username").value.length < 4 || document.getElementById("username").value.length > 14) {
      Alerts.pop("Tu usuario debe tener entre 4 y 14 caracteres")
    }else if (document.getElementById("password").value.length < 6 || document.getElementById("password").value.length > 14) {
      Alerts.pop("Tu contraseña debe tener entre 6 y 14 caracteres")    
    } else {
      registerUser()
    }
  }
    
  let registerUser = () => {

        fetch('https://chaja-api.herokuapp.com/api/users/new', {
          method: 'POST',
          body: new URLSearchParams({
            'username': document.getElementById("username").value,
            'password': document.getElementById("password").value
          })
        })
          .then(response => response.json() )
            .then(data => {
              if (data === "Usuario no disponible") {
                document.getElementById("info").innerText = data
              } else {
                localStorage.setItem("user_id", data);
                Alerts.pop("Usuario registrado!", "/")
                
              }
            })
              .catch(error => console.log(error));
      };

    return (
        <div className="popup">
          <Link className="absolute top-1 right-2 text-4xl font-extrabold" to='/'>X</Link>

            <h1 className="text-center">Registro CHAJÁ!</h1>

            <form onSubmit={validateRegister} className="flex flex-col items-center ">
            <p className="mt-6">NUEVO USUARIO</p>
            <input id="username" name="username" type="text" className="text-black w-8/12 mx-auto p-1" autoFocus>
            </input>
            <p className="mt-6">CONTRASEÑA</p>
            <input id="password" name="password" type="password" className="text-black w-8/12 mx-auto p-1">
            </input>
            <p className="mt-6 text-center">
              <button className="btn-left" type="submit">REGISTRARSE</button>
            </p>
            </form>
            
            <small className="mt-4 text-center font-bold" id="info"></small>
            
            
        </div>
    )
}

export default Register;