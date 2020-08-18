import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Worker } from "@phuocng/react-pdf-viewer";
import Viewer from "@phuocng/react-pdf-viewer";
// import SimpleToolbar from "../component/simpletoolbar";
import PropTypes from "prop-types";

export const The_View = props => {
	const { history } = props;
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (!store.isAuth) history.push("/login");
	}, []);

	return (
		<>
			<div className="container">
				<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
					<Viewer fileUrl="/brutal_ejemplo.pdf" />
				</Worker>
			</div>
		</>
	);
};
The_View.propTypes = {
	history: PropTypes.object
};
