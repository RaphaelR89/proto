import React from "react";
import "../CardProduct/style.css";
import tenis from "../../assets/Image/tenis.jpg";
function CardProduct() {
  return (
    <div className="p-container">
      <div className="card-content">
        <div className="img-card">
          <img src={tenis} alt=""></img>
        </div>
        <p className="title">titulo</p>
        <p
          className="description-card
        "
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          error, architecto exercitationem aut perferendis totam aperiam!
          Provident repellendus suscipit odio dolorum similique nulla earum, in
          voluptatibus. Nesciunt culpa dolor necessitatibus?
          <button className="btn-card">Ver Mais</button>
        </p>
      </div>

      <div className="card-content">
        <div className="img-card">
          <img src={tenis} alt=""></img>
        </div>
        <p className="title">titulo</p>
        <p
          className="description-card
        "
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          error, architecto exercitationem aut perferendis totam aperiam!
          Provident repellendus suscipit odio dolorum similique nulla earum, in
          voluptatibus. Nesciunt culpa dolor necessitatibus?
          <button className="btn-card">Ver Mais</button>
        </p>
      </div>
    </div>
  );
}

export default CardProduct;
