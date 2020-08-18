import React, { useState, useEffect, useContext } from "react";
import { Context } from "./../store/appContext";
import { Link, withRouter } from "react-router-dom";
import fill_murray_300x300 from "../../img/fill_murray_300x300.jpg";
import logo_brutal from "../../img/logo-brutal.jpg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import PropTypes from "prop-types";

const Navba = props => {
	const { store, actions } = useContext(Context);
	const { history } = props;

	useEffect(() => {
		if (!store.isAuth) history.push("/login");
	}, []);

	return (
		<Navbar bg="dark" variant="dark" className="navbar_dark">
			<Link to="/">
				<img src={logo_brutal} className="logo_navbar" />
			</Link>
			<Nav className="mr-auto">
				<Link to="/editions">
					<span className="navbar-brand mb-0 h1 playfair">Ediciones</span>
				</Link>
				<Link to="/suscriptions">
					<span className="navbar-brand mb-0 h1 playfair">Suscríbete</span>
				</Link>
				<Link to="/mediaplans">
					<span className="navbar-brand mb-0 h1 playfair">Plan de Medios</span>
				</Link>
			</Nav>
			<Form inline>
				{store.currentUser !== null ? (
					<a
						className="dropdown-item"
						href="/#"
						onClick={e => {
							e.preventDefault();
							actions.logout(history);
						}}>
						Logout
					</a>
				) : (
					<Link className="dropdown-item" to="/suscriptions">
						Suscríbete
					</Link>
				)}
				<Link to="/profile">{store.currentUser !== null ? store.currentUser.data.user.name : "username"}</Link>
			</Form>
		</Navbar>
	);
};
Navba.propTypes = {
	history: PropTypes.object
};
export default withRouter(Navba);
