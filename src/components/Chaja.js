import {useState, useEffect} from 'react';

function Chaja () {

const [chajas, setChajas] = useState([]);

useEffect(()=>{

  fetch('https://chaja-api.herokuapp.com/api/chajas')
    .then(response => response.json())
      .then(data => {
        setChajas(data.data)
      })
        .catch(error => console.log(error));
}, []);

// let testChaja = () => <article className=" shadow-lg font-semibold m-2 bg-white rounded border-4 b-gray-900 py-2 px-4 text-xl text-gray-700 transition  hover:bg-purple-800 hover:text-white">
// <p className="inline-block  ">82 caracteres el número máximo que puede tener un chajá! CHAJÁ!</p>
// <p className="pt-1 text-right text-sm">@Gkatz - 28-02-21</p>
// </article>

return (
    <section className="absolute z-0 grid sm:grid-cols-3 grid-cols-1 gap-3 p-4 w-full">
        {chajas.map ( chaja => {
            return <article key={chaja.id} className=" shadow-lg font-semibold m-2 bg-white rounded border-4 b-gray-900 py-2 px-4 text-xl text-gray-700 transition  hover:bg-purple-800 hover:text-white">
                    <p className="inline-block break-all ">{chaja.chaja}</p>
                    <p className="pt-1 text-right text-sm">@{chaja.User.username} - {new Date(chaja.createdAt).toLocaleString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute:'2-digit'})}</p>
                </article>
        })}
        {/* {Array.apply(null, Array(20)).map((i)=>
          testChaja()
        )} */}
    </section>
    )

};

export default Chaja;