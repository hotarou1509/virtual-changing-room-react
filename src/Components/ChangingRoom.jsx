import React from 'react';
import ClothesShop from './ClothesShop/ClothesShop';
import Model from './Model/Model';

export default function ChangingRoom() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-8">
					<ClothesShop />
				</div>
				<div className="col-4">
					<Model />
				</div>
			</div>
		</div>
	);
}
