import React from "react";
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
						src="https://dam.ngenespanol.com/wp-content/uploads/2020/05/pinguino-rey.jpg"
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
						src="https://i.ytimg.com/vi/n8TXpXWaINk/maxresdefault.jpg"
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
						src="https://i.pinimg.com/originals/8a/99/cb/8a99cb60425b9b286d43dfc310b1a664.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Jumbotron className="jumbotron">
				<h1>Hello, world!</h1>
				<p>
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<p>
					<Link to="/suscriptions">
						<Button variant="primary">Learn more</Button>
					</Link>
				</p>
			</Jumbotron>
			<CardGroup className="cardgroup">
				<Card>
					<Card.Img
						variant="top"
						src="https://metamorfosisforzada.files.wordpress.com/2019/01/Chiguire-5.jpg?w=640"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Link to="/theview">
							<Button variant="primary">Learn more</Button>
						</Link>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://metamorfosisforzada.files.wordpress.com/2019/01/Chiguire-5.jpg?w=640"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Link to="/theview">
							<Button variant="primary">Learn more</Button>
						</Link>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://metamorfosisforzada.files.wordpress.com/2019/01/Chiguire-5.jpg?w=640"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This card has even longer content than the first to show that equal height action.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Link to="/theview">
							<Button variant="primary">Learn more</Button>
						</Link>
					</Card.Footer>
				</Card>
			</CardGroup>
			<Table striped bordered hover variant="dark" className="table">
				<tbody>
					<tr>
						<td>
							<Link to="/theview">
								<Card.Img
									variant="top"
									src="https://metamorfosisforzada.files.wordpress.com/2019/01/Chiguire-5.jpg?w=640"
								/>
							</Link>
						</td>
						<td>
							<Link to="/theview">
								<Card.Img
									variant="top"
									src="https://metamorfosisforzada.files.wordpress.com/2019/01/Chiguire-5.jpg?w=640"
								/>
							</Link>
						</td>
						<td>
							<Link to="/theview">
								<Card.Img
									variant="top"
									src="https://metamorfosisforzada.files.wordpress.com/2019/01/Chiguire-5.jpg?w=640"
								/>
							</Link>
						</td>
						<td>
							<Link to="/theview">
								<Card.Img
									variant="top"
									src="https://metamorfosisforzada.files.wordpress.com/2019/01/Chiguire-5.jpg?w=640"
								/>
							</Link>
						</td>
						<td>
							<Link to="/theview">
								<Card.Img
									variant="top"
									src="https://metamorfosisforzada.files.wordpress.com/2019/01/Chiguire-5.jpg?w=640"
								/>
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
								<h1>Hello, world!</h1>
								<p>
									This is a simple hero unit, a simple jumbotron-style component for calling extra
									attention to featured content or information.
								</p>
								<p>
									<Link to="/theview">
										<Button variant="primary">Learn more</Button>
									</Link>
								</p>
							</Jumbotron>
						</td>
						<td>
							<Jumbotron className="jumbotron">
								<h1>Hello, world!</h1>
								<p>
									This is a simple hero unit, a simple jumbotron-style component for calling extra
									attention to featured content or information.
								</p>
								<p>
									<Link to="/theview">
										<Button variant="primary">Learn more</Button>
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
