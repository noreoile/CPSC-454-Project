import React from "react";

import { Button, Header, Icon, Modal } from "semantic-ui-react";

import "./HistoryPopUp.css";
import HistoryPopUpTable from "../HistoryPopUpTable/HistoryPopUpTable";

class HistoryPopUp extends React.Component {
	state = { open: false };

	render() {
		return (
			<Modal
				basic
				onClose={() => this.setState({ open: false })}
				onOpen={() => this.setState({ open: true })}
				open={this.state.open}
				size="large"

				trigger={
					<button className="ui basic button custom-button">
						<i className="icon history"></i>
						<span className="text">History</span>
					</button>
				}
			>
				<Modal.Content>
					<div>
						<HistoryPopUpTable />
					</div>
				</Modal.Content>
				<Modal.Actions>
					<Button
						color="green"
						inverted
						onClick={() => this.setState({ open: false })}
					>
						<Icon name="checkmark" /> Done
					</Button>
				</Modal.Actions>
			</Modal>
		);
	}
}

export default HistoryPopUp;
