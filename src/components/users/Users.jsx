import Cards from '../cards/Cards.jsx';
import {Link} from 'react-router-dom'
import './user.style.css'

export default function Users({users}) {

    return (

        <div className="user">
           
            <div className="user-cards">
            
                {users.map((user,index) => (
                    <div key={user.id}>
                    <Link to={`/${user.id}`} className="links">
                        <Cards img={user.Image} name={user.name} id={user.id} />
                    </Link>
                    </div>
                ))}
            
            </div>
           
            
        </div>
    )
}
