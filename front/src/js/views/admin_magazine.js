import React, { useEffect, useContext } from "react";
import { Context } from "./../store/appContext";
import { Card, Form, Button, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

export const Admin_magazine = props => {
	const { history } = props;
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (!store.isAuth) history.push("/login_admin");
	}, []);

	return (
		<Card className="card_login">
			<Form onSubmit={e => actions.getLogin(e, history)}>
				<Form.Group controlId="formBasicEmail">
					{!!store.error && <Alert variant="danger">Hey!, aquí hay un problema, {store.error}</Alert>}

					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						name="username"
						onChange={actions.handleChange}
					/>
					<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						name="password"
						onChange={actions.handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit" className="button_login">
					Submit
				</Button>
			</Form>
		</Card>
	);
};

Admin_magazine.propTypes = {
	history: PropTypes.object
};
