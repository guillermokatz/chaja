import chajalogo from '../assets/img/chaja.png';
import chajaopen from '../assets/img/chajaopen.png';
// import swirlL from '../assets/img/swirlleft.png';
// import swirlR from '../assets/img/swirlright.png';
import {Link} from 'react-router-dom';

function Navbar() {

  function newChaja() {
    fetch('/api/chajas/new', {
      method: 'POST',
      body: new URLSearchParams({
        'user_id': 1,
        'chaja': document.getElementById("chajainput").value
      })
    })
      .then(response => response.json)
        .then(data => console.log(data))
          .catch(error => console.log(error));
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
      document.getElementById("navbuttons").classList.toggle("hidden")
    } else if (document.getElementById("chajainput").classList.value.includes("hidden")) {
      document.getElementById("chajainput").classList.remove("hidden")
    }
    
  };

  return(
    
    <nav style={{height: '107px'}} id="navBar" className="p-0 flex justify-between border-t-2 border-gray-300 fixed -bottom-0 w-screen bg-white">

          {window.addEventListener("resize", function(e) {
            if(window.innerWidth > 640) {
              document.getElementById("navbuttons").classList.remove("hidden")
              document.getElementById("chajainput").classList.remove("hidden")
            } else {
              document.getElementById("navbuttons").classList.remove("hidden")
              document.getElementById("chajainput").classList.add("hidden")
            }            
        })}

        {window.addEventListener("load", function(e) {
            if(window.innerWidth > 640) {
              document.getElementById("navbuttons").classList.remove("hidden")
              document.getElementById("chajainput").classList.remove("hidden")
            } else {
              document.getElementById("navbuttons").classList.remove("hidden")
              document.getElementById("chajainput").classList.add("hidden")
            }
        })}
    
            
      <p><Link to='/'><img width="68" onClick={chajaWrite} onMouseOver={changeLogoOpen} onMouseOut={changeLogoClosed} id="chajalogo" src={chajalogo} className="cursor-pointer  self-center" alt="Chaja Logo"></img></Link></p>
    
      <form onSubmit={newChaja} className="self-center flex-shrink flex mx-2 sm:mx-10 pr-4">
        <input id="chajainput" className="inputNavBar rounded tracking-wide border-2 outline-none border-gray-400 focus:ring-2 focus:ring-purple-600 hover:border-purple-800 font-semibold text-2xl p-2 flex-shrink" type="text" placeholder="CHAJÁ!!" /> 
      </form>
        
      <article id="navbuttons" className="flex text-purple-700 font-bold text-right items-center nowrap mr-10 ">
        <p className="pl-4 md:px-4 pt-2 hover:transform hover:-rotate-12 duration-75"><Link className="flex flex-col items-center" to='/login'>LOGIN</Link></p>
        <p className="pl-4 md:px-4 pt-2 hover:transform hover:rotate-12 duration-75"><a href="/">CHAJÁ??</a></p>
      </article>
    </nav>
  )
    
}

export default Navbar;