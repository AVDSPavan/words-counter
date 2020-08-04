import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={App} />
				{/* <Route path="/:id" exact component={} /> */}
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
