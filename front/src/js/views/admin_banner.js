import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Admin_banner = () => {
	const { store, actions } = useContext(Context);

	return (
		<Form.Row className="formulario">
			<Form onSubmit={actions.handleUpdateMagazine}>
				<Form.Group>
					<Form.Label className="mediaplans_title display-3">Revistas</Form.Label>
				</Form.Group>
				<Form.Group>
					<Form.Control placeholder="Nombre" onChange={actions.handleChange} />
				</Form.Group>

				<Form.Group>
					<Form.Control type="date" placeholder="Fecha" onChange={actions.handleChange} />
				</Form.Group>

				<Form>
					<Form.Group>
						<Form.File id="exampleFormControlFile1" label="Glance" onChange={actions.handleChange} />
					</Form.Group>
				</Form>
			</Form>
			<Button variant="primary" type="submit">
				Enviar
			</Button>
		</Form.Row>
	);
};
