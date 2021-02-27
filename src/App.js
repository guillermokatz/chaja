import chajalogo from './assets/img/chaja.png';

function App() {
  return (
    <div>
      
      
      <p className="text-white px-4 py-4"></p>
      

      <nav className="p-0 flex justify-between border-t-2 fixed -bottom-0 w-screen bg-white">
        
        <img src={chajalogo} className="w-10 sm:w-20 self-center" alt="Chaja Logo"></img>
        
        <form className="self-center flex-grow flex mx-2 sm:mx-10 ">
        <input className="rounded tracking-wide border-2 outline-none border-gray-400 focus:border-purple-400 font-semibold text-2xl p-2 flex-grow " type="text" placeholder="CHAJÁ!!"></input>
        </form>
        
        <article className="flex text-purple-700 font-bold text-right items-center nowrap mr-6 ">
          <p className="px-2 sm:px-4 pt-2"><a href="/">LOGIN</a></p>
          <p className="px-2 sm:px-4 pt-2"><a href="/">CHAJÁ??</a></p>
        </article>
      </nav>
      
      
    </div>
  );
}

export default App;
