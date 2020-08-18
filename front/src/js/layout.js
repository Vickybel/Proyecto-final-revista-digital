import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Editions } from "./views/editions";
import { Mediaplans } from "./views/mediaplans";
import { Suscriptions } from "./views/suscriptions";
import { Login } from "./views/login";
import { Single } from "./views/single";
import { Profile } from "./views/profile";

import injectContext from "./store/appContext";

import { Admin_banner } from "./views/admin_banner";
import { Admin_magazine } from "./views/admin_magazine";
import { Admin_carousel } from "./views/admin_carousel";
import { Admin } from "./views/admin";
import { Login_admin } from "./views/login_admin";

import { Navba } from "./component/navbar";
import { Footer } from "./component/footer";
import { The_View } from "./views/the_view";

import history from "./history";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename} history={history}>
				<ScrollToTop>
					<Navba />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/editions" component={Editions} />
						<Route path="/profile" component={Profile} />
						<Route path="/mediaplans" component={Mediaplans} />
						<Route path="/theview" component={The_View} />
						<Route path="/suscriptions" component={Suscriptions} />
						<Route path="/admin_magazine" component={Admin_magazine} />
						<Route path="/admin_carousel" component={Admin_carousel} />
						<Route path="/admin_banner" component={Admin_banner} />
						<Route path="/admin" component={Admin} />
						<Route path="/login" component={Login} />
						<Route path="/login_admin" component={Login_admin} />
						<Route path="/single/:theid" component={Single} />

						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
