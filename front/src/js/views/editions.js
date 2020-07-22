import React, { useContext } from "react";
import Context from "../store/appContext";
import { Link } from "react-router-dom";
import fill_murray_640x360 from "../../img/fill_murray_640x360.jpg";
import fill_murray_240x360 from "../../img/fill_murray_240x360.jpg";
import Opcion from "../component/opcion_ediciones";
import Card from "../component/card_ediciones";

export const Editions = () => {
	return (
		<>
			<div className="container row">
				<div className="col-md-2">
					<div className="input-group filtro_fechas mb-3">
						<div className="input-group-prepend">
							<label className="input-group-text" htmlFor="inputGroupSelect01">
								Fecha
							</label>
						</div>
						<select className="custom-select" id="inputGroupSelect01">
							<Opcion />
							<Opcion />
							<Opcion />
							<Opcion />
							<Opcion />
						</select>
					</div>
					<img className="banner_grande" src={fill_murray_240x360} alt="..." />
					<img className="banner_grande" src={fill_murray_240x360} alt="..." />
				</div>
				<div className="col-md-8">
					<div className="titulo">
						<h1 className="display-3">Ediciones</h1>
					</div>
					<div className="row row-cols-1 row-cols-md-3">
						<Card className="card_ediciones" />
						<Card className="card_ediciones" />
						<Card className="card_ediciones" />
						<Card className="card_ediciones" />
						<Card className="card_ediciones" />
						<Card className="card_ediciones" />
					</div>
				</div>
				<div className="col-md-2">
					<img className="banner_pequeño" src={fill_murray_640x360} alt="..." />
					<img className="banner_pequeño" src={fill_murray_640x360} alt="..." />
					<img className="banner_pequeño" src={fill_murray_640x360} alt="..." />
					<img className="banner_pequeño" src={fill_murray_640x360} alt="..." />
				</div>
				<div>
					<div className="paginacion">
						<button type="button" className="btn btn-outline-dark" name="pagina_anterior">
							Anterior
						</button>
						<button type="button" className="btn btn-outline-dark" namr="pagina_siguiente">
							Siguiente
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
