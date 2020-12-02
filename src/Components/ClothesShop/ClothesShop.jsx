import React from 'react';
import { Panel } from './ClothesShopStyles';
import DataJSON from '../../Assets/Data/Data.json';
import NavPills from './NavPills';
import TabPanes from './TabPanes';
import { Scrollbars } from 'react-custom-scrollbars';

let { navPills, tabPanes } = DataJSON;

export default function ClothesShop() {
	return (
		<Panel>
			<NavPills navPills={navPills} />
			<Scrollbars style={{ width: '100%', height: 620 }}>
				<TabPanes navPills={navPills} tabPanes={tabPanes} />
			</Scrollbars>
		</Panel>
	);
}
