import "./Table.css";
import React from "react";
export const Table = ({ data }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xl-8 offset-xl-2 col-sm">
					<div className="table-responsive">
						<table className="table table-dark ">
							<thead style={{ textAlign: "center", fontSize: "4vh" }}>
								<tr>
									<td className="text-info">#</td>
									<td colSpan="2" className="text-info">
										Word
									</td>
									<td className="text-info">Count</td>
								</tr>
							</thead>
							<tbody style={{ textAlign: "center", fontSize: "3vh" }}>
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
		</div>
	);
};
