import chajalogo from '../assets/img/chaja.png';
import chajaopen from '../assets/img/chajaopen.png';

function Navbar() {

    function changeLogoOpen() {
        document.getElementById("chajalogo").setAttribute("src", `${chajaopen}`);
      }
      
      function changeLogoClosed() {
        document.getElementById("chajalogo").setAttribute("src", `${chajalogo}`);
      }
      
      function chajaWrite() {
        if(window.innerWidth < 640) { 
        document.getElementById("chajainput").classList.toggle("hidden")
        document.getElementById("navbuttons").classList.toggle("hidden")
        }
      }

    return(
        <nav className="p-0 flex justify-between border-t-2 border-gray-300 fixed -bottom-0 w-screen bg-white">
        
            <img onClick={chajaWrite} onMouseOver={changeLogoOpen} onMouseOut={changeLogoClosed} id="chajalogo" src={chajalogo} className="w-10 sm:w-20 self-center" alt="Chaja Logo"></img>
        

            <form className="self-center flex-grow flex mx-2 sm:mx-10 ">
                <input id="chajainput" className=" rounded tracking-wide border-2 outline-none border-gray-400 focus:ring-2 focus:ring-purple-600 hover:border-purple-800 font-semibold text-2xl p-2 flex-grow hidden sm:block" type="text" placeholder="CHAJÁ!!" /> 
            </form>
        
            <article id="navbuttons" className="flex text-purple-700 font-bold text-right items-center nowrap mr-10 ">
                <p className="pl-4 sm:px-4 pt-2"><a href="/">LOGIN</a></p>
                <p className="pl-4 sm:px-4 pt-2"><a href="/">CHAJÁ??</a></p>
            </article>
        </nav>
    )
    
}

export default  Navbar;