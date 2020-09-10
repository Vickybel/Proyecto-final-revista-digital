import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Register = props => {
	const { history } = props;
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container perfil">
				<h1 className="display-1 perfil_title ">Registrate</h1>
				<div className="input-group mb-3">
					<div className="custom-file" />
				</div>
				<div className="datos_perfil">
					<label className="nombre_dato">Correo Electrónico:</label>
					<input className="input_datos" type="email" name="email" placeholder="Correo" />
					<label className="nombre_dato">Contraseña:</label>
					<input className="input_datos" type="password" name="password" placeholder="Contraseña" />
					<label className="nombre_dato">Nombre:</label>
					<input className="input_datos" type="text" name="nombre" placeholder="Nombre" />
					<label className="nombre_dato">Apellido:</label>
					<input className="input_datos" type="text" name="last_name" placeholder="Apellido" />
					<label className="nombre_dato">Fecha nacimiento:</label>
					<input className="input_datos" type="date" name="fecha_nacimiento" />
					<button className="btn btn-outline-primary">Crear Usuario</button>
				</div>
			</div>
		</>
	);
};
Register.propTypes = {
	history: PropTypes.object
};
