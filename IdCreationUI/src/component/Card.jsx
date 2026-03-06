import React from 'react'

const Card = (props) => {
    return(
            <div key={props.idx} className="card">
              <div className="background">
                <img className="profilepic" src={props.elem.profileUrl} alt="" />
              </div>
              <div className="info">
                <h2>Name: {props.elem.firstName} {props.elem.lastName}</h2> 
                <p>Address: {props.elem.address}</p>
                <p>E-mail: {props.elem.email}</p>
                <p>Tel-Phone: {props.elem.number}</p>
              </div>
              <button onClick={()=>{
                props.deleteHandler(props.idx)
              }} className="remove">Remove</button>
            </div>   
          )
}

export default Card
