import React from "react";
import firebase, { firestore, auth } from "../../firebase/firebase.utils";

import "./HistoryPopUpTable.css";

import { Icon, Label, Menu, Table } from "semantic-ui-react";

class HistoryPopUpTable extends React.Component {
	state = { renderedList: null };

	getData = async () => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user) {
				const dataRef = await firestore
					.collection("history")
					.doc(user.uid)
					.get();
				let data = dataRef.data();

				if (data) {
					const renderedList = data.videos.map((video, iter) => {
						return (
							<Table.Row key={iter}>
								<Table.Cell>{video.title}</Table.Cell>
								<Table.Cell>{video.description}</Table.Cell>
								<Table.Cell>
									<img src={video.thumbnail} alt={video.description} />
								</Table.Cell>
							</Table.Row>
						);
					});
					this.setState({ renderedList: renderedList });
				}
			}
		});
	};
	componentDidMount = async () => {
		await this.getData();
	};

	render() {
		return (
			<div className="history-popup-table">
				<h2>History</h2>
				<Table celled color="blue" size="large">
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Title</Table.HeaderCell>
							<Table.HeaderCell>Description</Table.HeaderCell>
							<Table.HeaderCell>Thumbmail</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>{this.state.renderedList}</Table.Body>
				</Table>
			</div>
		);
	}
}

export default HistoryPopUpTable;
