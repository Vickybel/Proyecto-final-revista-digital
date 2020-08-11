import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const UpdateMagazine = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.GetMagazineToUpdate(props);
	}, []);

	return (
		<div className="container">
			<div style={{ marginTop: "40px" }}>
				{!!store.alertUpdateMagazine && (
					<div className="row">
						<div className="col-12">
							<div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Done!</strong> The magazine information have change
								<button
									type="button"
									onClick={actions.clearNotifications}
									className="close"
									data-dismiss="alert"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						</div>
					</div>
				)}
				<h1 className="text-center mt-5">Modify magazine</h1>
				<form onSubmit={e => actions.updateMagazine(e)} id={store.magazine.id}>
					<div className="form-group">
						<label>New - Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full name"
							name="full_name"
							onChange={e => actions.handleChange(e)}
							value={store.contact.full_name || ""}
						/>
					</div>
					<div className="form-group">
						<label>New - Date</label>
						<input
							type="date"
							className="form-control"
							placeholder="date"
							name="date"
							onChange={e => actions.handleChange(e)}
							value={store.magazine.date || ""}
						/>
					</div>
					<div className="form-group">
						<label>New - Glance</label>
						<input
							type="file"
						    className="form-control"
					    	placeholder="file"
						    name="Glance"
						    onChange={e => actions.handleChange(e)}
							value={store.magazine.glance || ""}
						/>
					</div>
					<div className="form-group">
						<label>New - body</label>
						<input
							type="file"
						    className="form-control"
						    placeholder="file"
						    name="Body"
							onChange={e => actions.handleChange(e)}
							value={store.magazine.body || ""}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						Apply Changes
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						Back to magazine
					</Link>
				</form>
			</div>
		</div>
	);
};
