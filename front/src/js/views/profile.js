import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import fill_murray_300x300 from "../../img/fill_murray_300x300.jpg";
import PropTypes from "prop-types";

export const Profile = props => {
	const { history } = props;
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (!store.isAuth) history.push("/login");
	}, []);

	return (
		<>
			<div className="container perfil">
				<h1 className="display-1 perfil_title ">Mi perfil</h1>
				<div className="input-group mb-3">
					<div className="custom-file" />
				</div>
				<div className="datos_perfil">
					<label className="nombre_dato">Nombre:</label>
					<input className="input_datos" type="text" name="nombre" placeholder="Nombre" />
					<label className="nombre_dato">Correo Electrónico:</label>
					<input className="input_datos" type="email" name="email" placeholder="Correo" />
					<label className="nombre_dato">Fecha nacimiento:</label>
					<input className="input_datos" type="date" name="fecha_nacimiento" />
					<button className="btn btn-outline-primary">Guardar</button>
				</div>
			</div>
		</>
	);
};
Profile.propTypes = {
	history: PropTypes.object
};
