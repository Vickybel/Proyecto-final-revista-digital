import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

export const Home = () => {
	return (
		<>
			<Carousel className="carrusel">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="http://placeimg.com/1000/300/animals?t=1596140387818"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="http://placeimg.com/1000/300/animals?t=1596140440545"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="http://placeimg.com/1000/300/animals?t=1596140457250"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Jumbotron className="jumbotron">
				<h1>¡Suscríbete!</h1>
				<p>
					Disfruta de la lectura completa de todas nuestras revistas y guarda tus favorias en un espacio solo
					dedicado para ti.
				</p>
				<Table striped bordered hover variant="dark" className="table">
					<tbody>
						<tr>
							<td>
								<Link to="/theview">
									<Card.Img
										variant="top"
										src="https://s7cdn.joomag.com/res_mag/1/1275/1275807/2050475/thumbs/49684033.jpg?1572336469"
									/>
								</Link>
							</td>
							<td>
								<Link to="/theview">
									<Card.Img
										variant="top"
										src="https://s7cdn.joomag.com/res_mag/1/1275/1275807/2050475/thumbs/49684033.jpg?1572336469"
									/>
								</Link>
							</td>
							<td>
								<Link to="/theview">
									<Card.Img
										variant="top"
										src="https://s7cdn.joomag.com/res_mag/1/1275/1275807/2050475/thumbs/49684033.jpg?1572336469"
									/>
								</Link>
							</td>
							<td>
								<Link to="/theview">
									<Card.Img
										variant="top"
										src="https://s7cdn.joomag.com/res_mag/1/1275/1275807/2050475/thumbs/49684033.jpg?1572336469"
									/>
								</Link>
							</td>
							<td>
								<Link to="/theview">
									<Card.Img
										variant="top"
										src="https://s7cdn.joomag.com/res_mag/1/1275/1275807/2050475/thumbs/49684033.jpg?1572336469"
									/>
								</Link>
							</td>
						</tr>
					</tbody>
				</Table>
				<p>
					<Link to="/suscriptions">
						<Button variant="primary">Suscribirse</Button>
					</Link>
				</p>
			</Jumbotron>
			<CardGroup className="cardgroup">
				<Card>
					<Card.Img variant="top" src="http://placeimg.com/800/800/people" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Link to="/theview">
							<Button variant="primary">Leer más</Button>
						</Link>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="http://placeimg.com/800/800/people?t=1596140904594" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Link to="/theview">
							<Button variant="primary">Leer más</Button>
						</Link>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="http://placeimg.com/800/800/people?t=1596140923122" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This card has even longer content than the first to show that equal height action.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Link to="/theview">
							<Button variant="primary">Leer más</Button>
						</Link>
					</Card.Footer>
				</Card>
			</CardGroup>
			<Table striped bordered hover variant="dark" className="table">
				<tbody>
					<tr>
						<td>
							<Link to="/theview">
								<Card.Img variant="top" src="http://placeimg.com/400/400/arch" />
							</Link>
						</td>
						<td>
							<Link to="/theview">
								<Card.Img variant="top" src="http://placeimg.com/400/400/arch?t=1596141050162" />
							</Link>
						</td>
						<td>
							<Link to="/theview">
								<Card.Img variant="top" src="http://placeimg.com/400/400/arch?t=1596141065145" />
							</Link>
						</td>
						<td>
							<Link to="/theview">
								<Card.Img variant="top" src="http://placeimg.com/400/400/arch?t=1596141076338" />
							</Link>
						</td>
						<td>
							<Link to="/theview">
								<Card.Img variant="top" src="http://placeimg.com/400/400/arch?t=1596141087658" />
							</Link>
						</td>
					</tr>
				</tbody>
			</Table>
			<Table className="table">
				<tbody>
					<tr>
						<td>
							<Jumbotron className="jumbotron">
								<h1>Revista brutal</h1>
								<Card.Img
									variant="top"
									src="https://www.itca.edu.sv/wp-content/uploads/2018/11/Portada-RevistaTecnologica2018.jpg"
								/>
								<p>
									This is a simple hero unit, a simple jumbotron-style component for calling extra
									attention to featured content or information.
								</p>
								<p>
									<Link to="/theview">
										<Button variant="primary">Leer más</Button>
									</Link>
								</p>
							</Jumbotron>
						</td>
						<td>
							<Jumbotron className="jumbotron">
								<h1>Revista brutal</h1>
								<Card.Img
									variant="top"
									src="https://www.itca.edu.sv/wp-content/uploads/2018/11/Portada-RevistaTecnologica2018.jpg"
								/>
								<p>
									This is a simple hero unit, a simple jumbotron-style component for calling extra
									attention to featured content or information.
								</p>
								<p>
									<Link to="/theview">
										<Button variant="primary">Leer más</Button>
									</Link>
								</p>
							</Jumbotron>
						</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
};
