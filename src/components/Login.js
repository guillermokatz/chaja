import {Link} from 'react-router-dom'
import Alerts from '../assets/js/Alerts'
function Login () {




  let validateLogin = e => {
    e.preventDefault()
    if(document.getElementById("username").value.length < 4 || document.getElementById("username").value.length > 14) {
      Alerts.pop("Tu usuario debe tener entre 4 y 14 caracteres")
      
    }else if (document.getElementById("password").value.length < 6 || document.getElementById("password").value.length > 14) {
      Alerts.pop("Tu contraseña debe tener entre 6 y 14 caracteres")    
    } else {
      logUser()
    }
  }
    
    let logUser = () => {
        
        fetch('https://chaja-api.herokuapp.com/api/users/login', {
          method: 'POST',
          body: new URLSearchParams({
            'username': document.getElementById("username").value,
            'password': document.getElementById("password").value
          })
        })
          .then(response => response.json() )
            .then(data => {
                if (data === "Usuario no encontrado" || data === "Contraseña incorrecta") {
                    document.getElementById("info").innerText = data
                } else {
                    localStorage.setItem("user_id", data);
                    console.log("Logged as user " + localStorage.getItem("user_id"))
                    window.location.pathname = '/'
                }             
                
            })
              .catch(error => console.log(error));
      };

    return (
        <div className="popup">
            <Link className="absolute top-1 right-2 text-4xl font-extrabold" to='/'>X</Link>

            <p className="text-xl text-center">
              Sin usuario?
              <Link to='/register'>
                <button className="btn-right"> CLICK AQUÍ!</button>
              </Link>
            </p>

            <form onSubmit={validateLogin} className="flex flex-col items-center ">
            <p className="mt-6">USUARIO</p>
            <input id="username" name="username" type="text" className="text-black w-8/12 mx-auto p-1" autoFocus>
            </input>
            <p className="mt-6">CONTRASEÑA</p>
            <input id="password" name="password" type="password" className="text-black w-8/12 mx-auto p-1">
            </input>
            <p className="mt-6 text-center">
            <button className="btn-left" type="submit">LOGIN</button>
            </p>
            </form>

            <small className="mt-4 text-center font-bold" id="info"></small>
            
        </div>
    )
}

export default Login;