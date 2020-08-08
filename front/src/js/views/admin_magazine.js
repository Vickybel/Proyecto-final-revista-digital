import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Admin_magazine = () => {
	const { store, actions } = useContext(Context);

	return (
		<form onSubmit={actions.handleUpdateMagazine}>
			<label>Name</label>
			<input type="text" name="name" onChange={actions.handleChange} />
			<br />
			<label>Date</label>
			<input type="date" name="date" onChange={actions.handleChange} />
			<br />
			<label>Glance</label>
			<input type="file" name="glance" onChange={actions.handleFile} />
			<input type="submit" value="Submit" onChange={actions.handleFile} />
		</form>
	);
};
