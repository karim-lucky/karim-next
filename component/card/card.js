

import "./card.css"

export default function Card({ abc }) {
  return <div>
      {/* <input type="text"></input> */}
    <div>


      <div className="card mb-4 border-dark">
        <img
          className="card-img-top" src={abc.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title"><b>{abc.name}</b></h5>
          <p className="card-text">
            <h1>
              
               {abc.price}   
              </h1>
          </p>
          <div><h4>{abc.location}</h4></div>
          <button id="delBtn">Delete</button>

        </div>
      </div>

    </div>
  </div>

}