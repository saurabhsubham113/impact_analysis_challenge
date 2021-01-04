import Cards from '../cards/Cards.jsx';
import './user.style.css'

export default function Users({users}) {

    return (

        <div className="user">
           
            <div className="user-cards">
            {users.map((user,index) => (
                <Cards key={user.id} img={user.Image} name={user.name} id={user.id} />
            ))}
            </div>
           
            
        </div>
    )
}
