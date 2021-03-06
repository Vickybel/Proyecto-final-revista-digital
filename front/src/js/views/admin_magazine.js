import { Link } from "react-router-dom";
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
		<div className="container">
			<div style={{ marginTop: "40px" }}>
				{!!store.alertCreateNewCarousel && (
					<div className="row">
						<div className="col-12">
							<div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Done!</strong> New magazine
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
			<h1 className="text-center mt-5">Add a new magazine</h1>
			<form id="createContact" onSubmit={e => actions.createNewCarousel(e)}>
				<div className="form-group">
					<label>Full Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="magazine_name"
						name="magazine_name"
						required
						onChange={e => actions.handleChange(e)}
					/>
				</div>
				<div className="form-group">
					<label>Magazine edition</label>
					<input
						type="number"
						className="form-control"
						placeholder="magazine_num_edition"
						name="magazine_num_edition"
						required
						onChange={e => actions.handleChange(e)}
					/>
				</div>

				<div className="form-group">
					<label>Date</label>
					<input
						type="date"
						className="form-control"
						placeholder="magazine_size"
						name="magazine_size"
						required
						onChange={e => actions.handleChange(e)}
					/>
				</div>

				<div className="form-group">
					<label>Body</label>
					<input
						type="file"
						className="form-control"
						placeholder="magazine_body"
						name="magazine_body"
						required
						onChange={e => actions.handleFile(e)}
					/>
				</div>
				<div className="form-group">
					<label>Glance</label>
					<input
						type="file"
						className="form-control"
						placeholder="magazine_glance"
						name="magazine_glance"
						required
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
Admin_magazine.propTypes = {
	history: PropTypes.object
};
