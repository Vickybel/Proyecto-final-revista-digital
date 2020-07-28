import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo_brutal from "../../img/logo-brutal.jpg";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="container row">
			<div className="col col-md-4">
				<Link to="/">
					<img src={logo_brutal} className="logo_footer" />
				</Link>
			</div>
			<div className="col col-md-4" />
			<div className="col col-md-4">
				<p className="footer_contact_title">Nuestras redes:</p>
				<p className="footer_contact">ig: @revista_brutal</p>
				<p className="footer_contact">fb: revista brutal</p>
				<p className="footer_contact">Whatsapp: +56919041311</p>
			</div>
		</div>
	</footer>
);
