import React from "react";

import "./LiftSidebar.css";
import HistoryPopUp from "../HistoryPopUp/HistoryPopUp";

class LeftSidebar extends React.Component {
	render() {
		return (
			<div className="left-sidebar">
				<div className="sidebar-items">
					<a href="/" className="item">
						<button className="ui basic button custom-button">
							<i className="icon home"></i>
							<span className="text">Home</span>
						</button>
					</a>
					<div className="item">
						<HistoryPopUp />
					</div>
					{/* <h3>-- Server 1 -- </h3> */}
				</div>
			</div>
		);
	}
}

export default LeftSidebar;
