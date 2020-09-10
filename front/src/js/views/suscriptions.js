import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";

export const Suscriptions = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<Card className="text-center suscriptions">
				<div className="suscribete_title">
					<h1 className="display-3">Donaciones</h1>
				</div>
				<div className="planes">
					<Card className="card_suscripcion">
						<div className="card-body color_plan">
							<h5 className="card-title">Todas las donaciones son bienvenidas.</h5>
							<p className="card-text">El equipo lo agradecerá y notarás las mejoras</p>
						</div>
						<Card.Text>
							<br />
							Aporta para siempre tener contenido de calidad
							<br />
							<br />
							Colabora con un equipo dipuesto a ofrecerte el mejor entretenimiento
							<br />
							<br />
							Ayuda al desarrollo y mantenimiento de los mejores servicios web
							<br />
							<br />
						</Card.Text>

						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
							<input type="hidden" name="cmd" value="_s-xclick" />
							<input type="hidden" name="hosted_button_id" value="7XATQUTFYHUEC" />
							<input
								type="image"
								src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
								border="0"
								name="submit"
								title="PayPal - The safer, easier way to pay online!"
								alt="Donate with PayPal button"
							/>
							<img
								alt=""
								border="0"
								src="https://www.paypal.com/en_CL/i/scr/pixel.gif"
								width="1"
								height="1"
							/>
						</form>
					</Card>
				</div>
			</Card>
		</>
	);
};
