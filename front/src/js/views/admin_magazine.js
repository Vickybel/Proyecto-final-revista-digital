import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext } from "react";
import { Alert } from "react-bootstrap";

export const Admin_magazine = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div style={{ marginTop: "40px" }}>
				{!!store.alertCreateNewMagazine && (
					<div className="row">
						<div className="col-12">
							<div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Done!</strong> New magazine created
								<button
									onClick={actions.clearNotifications}
									type="button"
									className="close"
									data-dismiss="alert"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
			{!!store.error && <Alert variant="danger">Hey!, aquí hay un problema, {store.error}</Alert>}
			<h1 className="text-center mt-5">Add a new magazine</h1>
			<form id="createContact" onSubmit={e => actions.createNewMagazine(e)}>
				<div className="form-group">
					<label>Full Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Full Name"
						name="magazine_name"
						onChange={e => actions.handleChange(e)}
					/>
				</div>

				<div className="form-group">
					<label>Date</label>
					<input
						type="date"
						className="form-control"
						placeholder="date"
						name="magazine_date"
						onChange={e => actions.handleChange(e)}
					/>
				</div>

				<div className="form-group">
					<label>Glance</label>
					<input
						type="file"
						className="form-control"
						placeholder="file"
						name="magazine_glance"
						onChange={e => actions.handleFile(e)}
					/>
				</div>
				<div className="form-group">
					<label>Body</label>
					<input
						type="file"
						className="form-control"
						placeholder="file"
						name="magazine_body"
						onChange={e => actions.handleFile(e)}
					/>
				</div>

				<button type="submit" className="btn btn-primary form-control">
					save
				</button>

				<Link className="mt-3 w-100 text-center" to="/admin">
					get back to principal menu
				</Link>
			</form>
		</div>
	);
};
