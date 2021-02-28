import Navbar from './components/Navbar'

function App() {

let chaja = () => {
return ( <article className=" shadow-lg font-semibold m-2 bg-white rounded border-4 b-gray-900 py-2 px-4 text-xl text-gray-700 transition  hover:bg-purple-800 hover:text-white">
<p className="inline-block  ">82 caracteres el número máximo que puede tener un chajá! CHAJÁ!</p>
<p className="pt-1 text-right text-sm">@Gkatz - 28-02-21</p>
</article>
)
}

  return (
    <div >
      <section className="grid sm:grid-cols-3 grid-cols-1 gap-3 m-2  ">
      {Array.apply(null, Array(20)).map((i)=>
        chaja()
      )}
        
        
        
        
               
        
      </section>
      <Navbar/>
      
      
      
    </div>
  );
}

export default App;
