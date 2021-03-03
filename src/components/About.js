import {Link} from 'react-router-dom'
import chajabig from '../assets/img/chajabig.png';
function About () {
    
    
    return (
        <div className="popup">
            <Link className="absolute top-1 right-2 text-4xl bolder" to='/'>X</Link>
           
           <main className="font-semibold tracking-wider">
            <p className="py-4 lg:pr-8 text-3xl">CHAJÁ! es una red social para compartir mensajes (o chajás) de hasta 82 caracteres y donde sólo se pueden ver los últimos 30 mensajes enviados por los usuarios.</p>

            <p className="py-4 lg:pl-8 text-3xl text-right">El nombre se inspira en el pájaro Sudamericano "Chaja" o Chauna Torqua que, cuando quiere salir corriendo y avisar a otros que está escapando, hace un sonido muy particular.</p>
            
            <img className="mx-auto w-1/2" src={chajabig} alt="chaja-img"></img>

            <p className="pb-4 text-3xl text-center">chajá! chajá!</p>
            </main>

            <p className="text-base text-center">Sitio desarrollado por <a className="underline" href="https://github.com/guillermokatz/">Guillermo Katz</a></p>
                       
            
        </div>
    )
}

export default About;