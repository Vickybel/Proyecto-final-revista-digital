import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Suscriptions = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				<div className="titulo">
					<h1 className="display-3">Tenemos el plan</h1>
					<h1 className="display-3">que necesitas</h1>
				</div>
				<div className="planes">
					<div className="card_suscripcion">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Plan Principal</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Caracteristica uno</li>
								<li className="list-group-item">Caracteristica dos</li>
								<li className="list-group-item">Caracteristica tres</li>
							</ul>
							<div className="card-body">
								<button className="btn btn-outline-primary">
									<Link to="/suscriprtions" className="card-link">
										Comprar
									</Link>
								</button>
							</div>
						</div>
					</div>

					<div className="card_suscripcion">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Plan B</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Caracteristica uno</li>
								<li className="list-group-item">Caracteristica dos</li>
								<li className="list-group-item">Caracteristica tres</li>
							</ul>
							<div className="card-body">
								<button className="btn btn-outline-primary">
									<Link to="/suscriptions" className="card-link">
										Comprar
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
