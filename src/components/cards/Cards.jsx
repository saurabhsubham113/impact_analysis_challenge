import React from 'react'
import './card.style.css'

export default function Cards({img,name,id}) {
    return (
        <div className="cards">
            <div className="card">
                <div className="card-head">
                    <img src={img} alt={name}/>
                </div>
                <div className="card-body">
                    <div className="profile">
                    <p className="name">{name}</p>
                    <p className="id">{id}</p>
                    </div>
                    
                    <div className="card-foot">
                    <button className="btn shortlist">shortlist</button>
                    <button className="btn rejected">Reject</button>
                </div>

                </div>
                
            </div>
        </div>
    )
}
