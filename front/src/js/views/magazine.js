import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { MagazineCard } from "../component/MagazineCard.js";
import { Modal } from "../component/Modal";

export const Magazine = () => {
	const { store } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new magazine
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.AllMagazine.length > 0 &&
							store.AllMagazine.map((item, i) => {
								return (
									<MagazineCard
										key={i}
										id={item.id}
										name={item.full_name}
										glance={item.glance}
										body={item.body}
									/>
								);
							})}
					</ul>
				</div>
			</div>
			{/*<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />*/}
		</div>
	);
};
