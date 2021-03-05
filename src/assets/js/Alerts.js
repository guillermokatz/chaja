import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Alerts = {

pop: (msg, action) => {
        
    MySwal.fire({
        
        icon: 'warning',
        title: msg,
        confirmButtonColor: "#8B5CF6",
        iconColor: "#8B5CF6",
        
    }).then(function(result){
        // console.log(action)
        if(result.isConfirmed && action) {
            window.location.pathname = action
        }
    })
    
},

}

export default Alerts