import React from "react";

import "./LiftSidebar.css";

class LeftSidebar extends React.Component {
	render() {
		return (
			<div class="left-sidebar">
				<div class="sidebar-items">
					<a href="/" class="item">
						<button class="ui basic button custom-button">
							<i class="icon home"></i>
							<span class="text">Home</span>
						</button>
					</a>
					{/*
					<div class="item">
						<button class="ui basic button custom-button">
							<i class="icon history"></i>
							<span class="text">History</span>
						</button>
					</div>
					*/}
				</div>
			</div>
		);
	}
}

export default LeftSidebar;
