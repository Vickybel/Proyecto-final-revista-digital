import React, { useContext } from "react";
import Context from "../store/appContext";
import ediciones from "../../img/ediciones.jpg";

const Card = () => (
	<>
		<div className="col mb-4">
			<div className="card card_ediciones h-100">
				<img src={ediciones} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Edic. 46 - TEK BOND, Saint Gobain / Especial COVID...</h5>
					<p className="card-text">Por Visión Ferretera: Revista</p>
				</div>
				<button className="btn btn-outline-dark">Leer más</button>
			</div>
		</div>
	</>
);

export default Card;
