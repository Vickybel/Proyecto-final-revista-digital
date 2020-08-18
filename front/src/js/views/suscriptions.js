import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";

export const Suscriptions = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<Card className="text-center suscriptions">
				<div className="suscribete_title">
					<h1 className="display-3">Tenemos el plan</h1>
					<h1 className="display-3">que necesitas</h1>
				</div>
				<div className="planes">
					<Card className="card_suscripcion">
						<div className="card-body color_plan">
							<h5 className="card-title">Plan Principal</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
						</div>
						<Card.Text>
							<br />
							Caracteristica uno <br />
							<br />
							Caracteristica dos <br />
							<br />
							Caracteristica tres <br />
							<br />
						</Card.Text>
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

						<div className="card-body">
							<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
								<input type="hidden" name="cmd" value="_xclick-subscriptions" />
								<input type="hidden" name="business" value="sb-2tewy2918263@business.example.com" />
								<input type="hidden" name="lc" value="US" />
								<input type="hidden" name="item_name" value="Membresia Gold" />
								<input type="hidden" name="no_note" value="1" />
								<input type="hidden" name="src" value="1" />
								<input type="hidden" name="currency_code" value="USD" />
								<input
									type="hidden"
									name="bn"
									value="PP-SubscriptionsBF:btn_subscribeCC_LG.gif:NonHostedGuest"
								/>
								<table>
									<tr>
										<td>
											<input type="hidden" name="on0" value="" />
										</td>
									</tr>
									<tr>
										<td>
											<select name="os0">
												<option value="Gold">Gold : $14.99 USD - mensual</option>
												<option value="Gold XL">Gold XL : $143.88 USD - anual</option>
											</select>
										</td>
									</tr>
								</table>
								<input type="hidden" name="option_select0" value="Gold" />
								<input type="hidden" name="option_amount0" value="14.99" />
								<input type="hidden" name="option_period0" value="M" />
								<input type="hidden" name="option_frequency0" value="1" />
								<input type="hidden" name="option_select1" value="Gold XL" />
								<input type="hidden" name="option_amount1" value="143.88" />
								<input type="hidden" name="option_period1" value="Y" />
								<input type="hidden" name="option_frequency1" value="1" />
								<input type="hidden" name="option_index" value="0" />
								<input
									type="image"
									src="https://www.sandbox.paypal.com/es_XC/i/btn/btn_subscribeCC_LG.gif"
									border="0"
									name="submit"
									alt="PayPal, la forma más segura y rápida de pagar en línea."
								/>
								<img
									alt=""
									border="0"
									src="https://www.sandbox.paypal.com/es_XC/i/scr/pixel.gif"
									width="1"
									height="1"
								/>
							</form>
						</div>

						<div id="paypal-button-container" />
					</Card>
				</div>
			</Card>
		</>
	);
};
