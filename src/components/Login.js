
function Login () {
    
    function logUser() {
        fetch('/api/users/login', {
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
                    window.location.pathname = '/user'
                }             
                
            })
              .catch(error => console.log(error));
      };

    return (
        <div className="flex flex-col w-min items-center mx-auto">
            <p>USUARIO</p>
            <input id="username" name="username" type="text">
            </input>
            <p>CONTRASEÑA</p>
            <input id="password" name="password" type="text">
            </input>
            <button onClick={logUser} type="button">LOGIN</button>
            <small id="info"></small>
        </div>
    )
}

export default Login;