import React from "react";
import "../../styles/home.scss";
import Card from "../component/card_home";
import Adwords from "../component/adwords";

export const Home = () => {
	return (
		<>
			<div className="row">
				<div className="col-12">
					<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									className="d-block w-100"
									src="https://www.visitcalifornia.com/sites/visitcalifornia.com/files/PandaCanyonSanDiegoZoo_1280x642.jpg"
									alt="First slide"
								/>
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src="..." alt="Second slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src="..." alt="Third slide" />
							</div>
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleControls"
							role="button"
							data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleControls"
							role="button"
							data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-2">
					<Adwords className="adwords" />
				</div>
				<div className="col-4">
					<Card className="card_home" />
				</div>
				<div className="col-4">
					<Card className="card_home" />
				</div>
				<div className="col-2">
					<Adwords className="adwords" />
				</div>
			</div>
			<div className="row">
				<div className="col-2">
					<Adwords />
				</div>
				<div className="col-4">
					<Card className="card_home" />
				</div>
				<div className="col-4">
					<Card className="card_home" />
				</div>
				<div className="col-2">
					<Adwords className="adwords" />
				</div>
			</div>
			<div className="row">
				<div className="col-2">
					<Adwords className="adwords" />
				</div>
				<div className="col-4">
					<Card className="card_home" />
				</div>
				<div className="col-4">
					<Card className="card_home" />
				</div>
				<div className="col-2">
					<Adwords className="adwords" />
				</div>
			</div>
		</>
	);
};
