import React from 'react';
import { useSelector } from 'react-redux';
import { Spring, config } from 'react-spring/renderprops';

import CardItem from './CardItem';

export default function TabPanes(props) {
	let navPills = props.navPills;
	let tabPanes = props.tabPanes;
	const tabName = useSelector((state) => state.ChangingRoomReducer.tabName);
	const renderTabPanes = () => {
		const currentTab = navPills.find((item) => item.tabName === tabName);
		return (
			<div className={'tab-pane container active'}>
				<div className="container">
					<div className="row">
						{renderTabPaneItems(currentTab.type)}
					</div>
				</div>
			</div>
		);
	};
	const renderTabPaneItems = (type) => {
		return tabPanes.map((item, index) => {
			if (item.type === type) {
				return (
					<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
						{(props) => (
							<div style={props} config={config.slow} key={index} className="col-md-3 mb-5">
								<CardItem cardData={item} />
							</div>
						)}
					</Spring>
				);
			} else return null;
		});
	};
	return <div className="tab-content">{renderTabPanes()}</div>;
}
