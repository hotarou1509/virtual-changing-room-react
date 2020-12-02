import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTabAction } from '../../Redux/Actions/ChangingRoomAction';
import { Nav, Active } from './ClothesShopStyles';

export default function NavPills(props) {
	let navPills = props.navPills;
	const dispatch = useDispatch();

	const renderNavPillsItem = () => {
		return navPills.map((item, index) => {
			return (
				<a
					key={index}
					className="list-group-item"
					data-toggle="pill"
					href={'#' + item.tabName}
					onClick={() => {
						dispatch(changeTabAction(item.tabName));
					}}
				>
					{item.showName}
				</a>
			);
		});
	};

	return (
		<Nav className="list-group">
			{renderNavPillsItem()}
			<Active className="animation" />
		</Nav>
	);
}
