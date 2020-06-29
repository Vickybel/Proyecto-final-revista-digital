import React from "react";
import { Link } from "react-router-dom";
import fill_murray_300x300 from "../../img/fill_murray_300x300.jpg";
import logo_brutal from "../../img/logo-brutal-1.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={logo_brutal} className="logo_navbar" />
			</Link>
			<Link to="/editions">
				<span className="navbar-brand mb-0 h1">Ediciones</span>
			</Link>
			<Link to="/suscriptions">
				<span className="navbar-brand mb-0 h1">Suscríbete</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
				<Link to="/mediaplans">
					<span className="navbar-brand mb-0 h1">mediaplans</span>
				</Link>
				<Link to="/profile">
					<img src={fill_murray_300x300} className="perfil_navbar" />
				</Link>
			</div>
		</nav>
	);
};
