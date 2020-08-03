import React from "react";
// import Context from "../store/appContext";
import { Link } from "react-router-dom";
import fill_murray_640x360 from "../../img/fill_murray_640x360.jpg";
import fill_murray_240x360 from "../../img/fill_murray_240x360.jpg";
import Opcion from "../component/opcion_ediciones";
import Card_ediciones from "../component/card_ediciones";
import { Banner } from "../component/banner";
import { Card, Col, Row, Button } from "react-bootstrap";

export const Editions = () => {
	// const { store } = useContext(Context);
	return (
		<>
			<Card>
				<Card.Body>
					<Row>
						<Col md={2}>
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
							<Card.Img className="banner_grande" src={fill_murray_240x360} alt="..." />
							<Banner />
						</Col>
						<Col xl={7}>
							<Card.Title className="titulo">
								<h1 className="display-3">Ediciones</h1>
							</Card.Title>
							<div className="row row-cols-1 row-cols-md-2">
								<Card_ediciones className="card_ediciones" />
							</div>
						</Col>
						<Col sm={3}>
							<Card.Img className="banner_pequeño" src={fill_murray_640x360} />
							<Banner />
						</Col>
					</Row>
				</Card.Body>
				<Card.Footer className="paginacion">
					<Button variant="outline-dark" name="pagina_anterior">
						Anterior
					</Button>
					<Button variant="outline-dark" name="pagina_siguiente">
						Siguiente
					</Button>
				</Card.Footer>
			</Card>
		</>
	);
};
