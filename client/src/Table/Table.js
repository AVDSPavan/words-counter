import "./Table.css";
import React from "react";
export const Table = ({ data }) => {
	return (
		<div className="row">
			<div className="col-xl-6 offset-xl-3 col-sm">
				<div className="table-responsive rounded">
					<table className="table table-dark w-auto">
						<thead
							style={{
								textAlign: "center",
								fontSize: "150%",
								backgroundColor: "#00CCCD",
								color: "#E8290B",
								fontFamily: "sans-serif",
							}}>
							<tr>
								<td className="text">
									<b>Rank</b>
								</td>
								<td className="text">
									<b>Word</b>
								</td>
								<td className="text">
									<b>Count</b>
								</td>
							</tr>
						</thead>
						<tbody style={{ textAlign: "center", fontSize: "100%" }}>
							{data.map((word, index) => {
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td colSpan="2">{word[0]}</td>
										<td>{word[1]}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
