import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

export const Admin_carousel = props => {
	const { store, actions } = useContext(Context);
	const { history } = props;

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
								<strong>Done!</strong> New magazine image to carousel
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
			<h1 className="text-center mt-5">Add a new carousel</h1>
			<form id="createContact" onSubmit={e => actions.createNewCarousel(e)}>
				<div className="form-group">
					<label>Full Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="carousel_name"
						name="carousel_name"
						onChange={e => actions.handleChange(e)}
					/>
				</div>

				<div className="form-group">
					<label>Size</label>
					<input
						type="text"
						className="form-control"
						placeholder="carousel_size"
						name="carousel_size"
						onChange={e => actions.handleChange(e)}
					/>
				</div>

				<div className="form-group">
					<label>Carrusel</label>
					<input
						type="file"
						className="form-control"
						placeholder="carousel_body"
						name="carousel_body"
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
Admin_carousel.propTypes = {
	history: PropTypes.object
};
