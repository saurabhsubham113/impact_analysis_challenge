import React,{useState,useEffect} from 'react'
import Cards from '../cards/Cards'
import {useParams} from 'react-router-dom'
import ApiHandle from '../Axios/ApiHandle'
import './candidate.style.css'

export default function Candidate() {

   const [user, setUser] = useState([])
   const id = useParams().id
   useEffect(() => {
    
       const fetchData = async () => {
        const res = await ApiHandle.getUser();
        let obj = res.find(o => o.id === id );
            setUser(obj);
       }

       fetchData()

   },[id])

    return (
        <div className="candidate">
            <Cards img={user.Image} name={user.name} id={user.id} />
        </div>
    )
}
