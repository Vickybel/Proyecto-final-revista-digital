import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ediciones from "../../img/ediciones.jpg";

const Card = () => {
	const { store, actions } = useContext(Context);
	{
		!!store.magazines &&
			store.magazines.map(item => {
				const nombre = item.name;
				return (
					<>
						<div className="col mb-4">
							<div className="card card_ediciones h-100">
								<img src={ediciones} className="card-img-top" alt="glance" />
								<div className="card-body" />
								<p>{nombre}</p>
								<Link to="/theview">
									<button className="btn btn-outline-dark">Leer más</button>
								</Link>
							</div>
						</div>
					</>
				);
			});
	}
};

export default Card;
