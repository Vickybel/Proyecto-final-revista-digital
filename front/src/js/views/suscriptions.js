import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Suscriptions = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				<div className="suscribete_title">
					<h1 className="display-3">Tenemos el plan</h1>
					<h1 className="display-3">que necesitas</h1>
				</div>
				<div className="planes">
					<div className="card_suscripcion">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Plan Principal</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Caracteristica uno</li>
								<li className="list-group-item">Caracteristica dos</li>
								<li className="list-group-item">Caracteristica tres</li>
							</ul>
							<div className="card-body">
								<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
									<input type="hidden" name="cmd" value="_s-xclick" />
									<input type="hidden" name="hosted_button_id" value="QF8CEXHYYSYXG" />
									<table>
										<tr>
											<td>
												<input type="hidden" name="on0" value="" />
											</td>
										</tr>
										<tr>
											<td className="form_center">
												<select name="os0">
													<option value="Gold">Gold : $14,99 USD - mensual</option>
													<option value="Gold XL">Gold XL : $143,88 USD - anual</option>
												</select>{" "}
											</td>
										</tr>
									</table>
									<input type="hidden" name="currency_code" value="USD" />
									<input
										type="image"
										src="https://www.paypalobjects.com/es_XC/i/btn/btn_subscribeCC_LG.gif"
										border="0"
										name="submit"
										alt="PayPal, la forma más segura y rápida de pagar en línea."
									/>
									<img
										alt=""
										border="0"
										src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
										width="1"
										height="1"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
