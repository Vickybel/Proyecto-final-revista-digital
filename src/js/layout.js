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

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { The_View } from "./views/the_view";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/editions" component={Editions} />
						<Route path="/profile" component={Profile} />
						<Route path="/mediaplans" component={Mediaplans} />
						<Route path="/theview" component={The_View} />
						<Route path="/suscriptions" component={Suscriptions} />
						<Route path="/login" component={Login} />
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
