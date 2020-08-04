import React, { useState } from "react";
import { Table } from "./Table";
export const App = () => {
	//const [limit, setLimit] = useState(0);
	const [data, setData] = useState([]);
	const clicked = (value) => {
		return fetch(`/api/${value}`, {
			method: "GET",
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => setData(res))
			.catch((err) => console.log(err));
	};

	return (
		<div className="container" style={{ position: "relative" }}>
			<br />
			<p
				className="text"
				style={{
					textAlign: "center",
					backgroundColor: "yellow",
					position: "sticky",
					top: "0px",
					zIndex: "1",
					fontSize: "5vh",
					fontFamily: "sans-serif",
				}}>
				Words Counter
			</p>
			<br />
			<br />
			{/* <h1>{document.getElementById("limit").value}</h1> */}
			<div className="container">
				<div className="row">
					<div className="col-6 offset-3">
						<form
							onSubmit={(event) => {
								event.preventDefault();
								// setLimit(document.getElementById("limit").value);
								clicked(document.getElementById("limit").value);
							}}>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="Enter any number"
									id="limit"
									required
								/>
								<button className="btn-success form-control mt-2" type="submit">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="container">
				<Table data={data} />
			</div>
		</div>
	);
};
export default App;
