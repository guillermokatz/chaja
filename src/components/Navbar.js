import chajalogo from '../assets/img/chaja.png';
import chajaopen from '../assets/img/chajaopen.png';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'

function Navbar() {

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
          } 
        })
          .catch( error => console.log(error));
  }, []);


  let validateChaja = e => {
    e.preventDefault()
    if(document.getElementById("chajainput").value.length === 0 || document.getElementById("chajainput").value.length > 82) {
      alert("Un CHAJÁ tiene entre 1 y 82 caracteres!")
    } else {
      newChaja()
    }
  }

  let newChaja = () => {
    fetch('/api/users/getsession')
      .then( responseA => responseA.json())
        .then( dataA => {
          
          if (dataA !== "No access") {
              

                fetch('/api/chajas/new', {
                  method: 'POST',
                  body: new URLSearchParams({
                    'user_id': dataA.id,
                    'chaja': document.getElementById("chajainput").value
                  })
                })
                  .then(responseB => responseB.json)
                    .then(dataB => {
                      window.location.reload()
                      // console.log(dataB)
                    })
                      .catch(error => console.log(error));
          } else {
            
            alert("Debe loggearse!")
            window.location.pathname = '/login'
          }
        
        });
  };

  function changeLogoOpen() {
    document.getElementById("chajalogo").setAttribute("src", `${chajaopen}`);
  };
      
  function changeLogoClosed() {
    document.getElementById("chajalogo").setAttribute("src", `${chajalogo}`);
  };
      
  function chajaWrite() {
    if(window.innerWidth < 640) {
      document.getElementById("chajainput").classList.toggle("hidden")
    } else if (document.getElementById("chajainput").classList.value.includes("hidden")) {
      document.getElementById("chajainput").classList.remove("hidden")
    }
    
  };

  return(
    
    <nav style={{height: '107px'}} id="navBar" className="p-0 flex justify-left border-t-2 border-gray-300 fixed -bottom-0 w-screen bg-white">

      {window.addEventListener("resize", function(e) {
        if(window.innerWidth > 640) {
          document.getElementById("chajainput").classList.remove("hidden")
        }           
      })}

      {window.addEventListener("load", function(e) {
        if(window.innerWidth > 640) {
          document.getElementById("chajainput").classList.remove("hidden")
        } else {
          document.getElementById("chajainput").classList.add("hidden")
        }
      })}
      
              
      <p className="static z-20 flex-shrink-0" style={{width: "68px"}}><Link to='/'><img width="68" onClick={chajaWrite} onMouseOver={changeLogoOpen} onMouseOut={changeLogoClosed} id="chajalogo" src={chajalogo} className="cursor-pointer  self-center" alt="Chaja Logo"></img></Link></p>
      
      <form onSubmit={validateChaja} id="inputContainer" className="static z-20 self-center flex mx-2 sm:mx-10 pr-4">
        <input id="chajainput" className="inputNavBar rounded tracking-wide border-2 outline-none border-gray-400 focus:ring-2 focus:ring-purple-600 hover:border-purple-800 font-semibold text-2xl p-2 flex-shrink" type="text" placeholder="CHAJÁ!!" autoFocus /> 
      </form>
          
      <article id="navbuttons" className="absolute -right-0 bottom-8 z-0 flex text-purple-700 font-bold text-right items-center nowrap mr-10 ">
        <p className="pl-4 md:px-4 pt-2 hover:transform hover:-rotate-12 duration-75">
          <Link to={user ? '/user' : '/login'}>{user ? '@' + user.username.toUpperCase() : "LOGIN"}</Link>
        </p>
        <p className="pl-4 md:px-4 pt-2 hover:transform hover:rotate-12 duration-75">
          <Link to='/about'>CHAJÁ???</Link>
        </p>
      </article>
    
    </nav>
  )
    
}

export default Navbar;