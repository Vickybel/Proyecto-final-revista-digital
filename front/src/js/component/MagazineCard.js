import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const MagazineCard = props => {
	const { actions } = useContext(Context);

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src="https://animalesmascotas.com/wp-content/uploads/2009/02/delfin.jpg"
						alt="Mike Anamendolla"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<Link to={`/edit/${props.id}`}>
							<button className="btn">
								<i className="fas fa-pencil-alt mr-3" />
							</button>
						</Link>
						<button className="btn" onClick={e => actions.deleteMagazine(e)}>
							<i id={props.id} className="fas fa-trash-alt" />
						</button>
					</div>
					<Link to={`info/${props.id}`}>
						<label className="name lead">{props.name}</label>
					</Link>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.date}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.body}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.glance}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
MagazineCard.propTypes = {
	history: PropTypes.object,
	deleteMagazine: PropTypes.func,
	name: PropTypes.string,
	date: PropTypes.string,
	glance: PropTypes.string,
	body: PropTypes.string,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
MagazineCard.defaultProps = {
	deleteMagazine: null
};
