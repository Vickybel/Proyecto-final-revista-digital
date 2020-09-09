import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Admin = props => {
	const { history } = props;
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (!store.isAuth) history.push("/login_admin");
	}, []);

	return (
		<>
			<DropdownButton id="dropdown-basic-button" title="Menu Administrativo">
				<Link to="/admin_magazine">
					<Dropdown.Item href="#/action-1">Crea tu revista</Dropdown.Item>
				</Link>
				<Link to="/admin_carousel">
					<Dropdown.Item href="#/action-2">Personaliza tu carrusel</Dropdown.Item>
				</Link>
				<Link to="/admin_banner">
					<Dropdown.Item href="#/action-3">Personaliza tus publicidades</Dropdown.Item>
				</Link>
			</DropdownButton>
		</>
	);
};
Admin.propTypes = {
	history: PropTypes.object
};
