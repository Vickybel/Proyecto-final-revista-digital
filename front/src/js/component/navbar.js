import React from "react";
import { Link } from "react-router-dom";
import fill_murray_300x300 from "../../img/fill_murray_300x300.jpg";
import logo_brutal from "../../img/logo-brutal.jpg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export const Navba = () => {
	return (
		// <nav className="navbar navbar-dark bg-dark mb-3">
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
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
				<Link to="/profile">
					<img src={fill_murray_300x300} className="perfil_navbar" />
				</Link>
			</Form>
		</Navbar>
	);
};
