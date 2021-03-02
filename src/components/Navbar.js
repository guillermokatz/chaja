import chajalogo from '../assets/img/chaja.png';
import chajaopen from '../assets/img/chajaopen.png';
// import swirlL from '../assets/img/swirlleft.png';
// import swirlR from '../assets/img/swirlright.png';

function Navbar() {


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
    }
  };

  return(
    
    <nav id="navBar" className="p-0 flex justify-between border-t-2 border-gray-300 fixed -bottom-0 w-screen bg-white">

      {window.addEventListener("scroll", function(e) {
              if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                document.getElementById("navBar").classList.add("hidden");
                document.getElementById("navBar").classList.remove("block");
              } else {
                document.getElementById("navBar").classList.add("block");
                document.getElementById("navBar").classList.remove("hidden");
              }
        })
        }
            
      <p><img onClick={chajaWrite} onMouseOver={changeLogoOpen} onMouseOut={changeLogoClosed} id="chajalogo" src={chajalogo} className="cursor-pointer w-20 md:w-20 self-center" alt="Chaja Logo"></img></p>
    
      <form className="self-center flex-grow flex mx-2 sm:mx-10 pr-4">
        <input id="chajainput" className=" rounded tracking-wide border-2 outline-none border-gray-400 focus:ring-2 focus:ring-purple-600 hover:border-purple-800 font-semibold text-2xl p-2 flex-grow hidden sm:block" type="text" placeholder="CHAJÁ!!" /> 
      </form>
        
      <article id="navbuttons" className="flex text-purple-700 font-bold text-right items-center nowrap mr-10 ">
        <p className="pl-4 md:px-4 pt-2 hover:transform hover:-rotate-12 duration-75"><a className="flex flex-col items-center" href="/">LOGIN</a></p>
        <p className="pl-4 md:px-4 pt-2 hover:transform hover:rotate-12 duration-75"><a href="/">CHAJÁ??</a></p>
      </article>
    </nav>
  )
    
}

export default Navbar;