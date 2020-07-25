import React, { useContext } from "react";
import Context from "../store/appContext";
import pinguinos2 from "../../img/pinguinos2.jpg";
import { Link } from "react-router-dom";

const Adwords = () => (
	<>
		<div className="col mb-4">
			<div className="card card_ediciones h-100">
				<img src={pinguinos2} className="card-img-top" alt="..." />
				<Link to="/theview">
					<button className="btn btn-outline-dark">Leer más</button>
				</Link>
			</div>
		</div>
	</>
);

export default Adwords;
