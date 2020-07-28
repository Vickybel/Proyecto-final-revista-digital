import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/index.scss";

export const Mediaplans = () => {
	return (
		<>
			<Form.Row className="formulario">
				<Form.Group>
					<Form.Label className="mediaplans_title display-3">Contáctanos</Form.Label>
				</Form.Group>
				<Form>
					<Form.Group>
						<Form.Control placeholder="Nombre" />
					</Form.Group>

					<Form.Group>
						<Form.Control placeholder="Apellido" />
					</Form.Group>

					<Form.Group controlId="exampleForm.ControlInput1">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
					</Form.Group>

					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Label>Asunto</Form.Label>
						<Form.Control as="select">
							<option>Publicación página aleatoria</option>
							<option>Publicación página impar revista</option>
							<option>Publicación página par revista</option>
							<option>Publicidad páginas centrales revista</option>
							<option>Otro</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Comentarios</Form.Label>
						<Form.Control as="textarea" rows="3" />
					</Form.Group>
				</Form>
				<Button variant="primary" type="submit">
					Enviar
				</Button>
			</Form.Row>
		</>
	);
};
