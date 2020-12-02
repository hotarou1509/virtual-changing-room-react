import styled from 'styled-components';

export const Panel = styled.div``;

export const Nav = styled.div`
	flex-direction: row;
	position: relative;
	margin: 0px auto;
	margin-bottom: 25px;
	width: 730px;
	height: 50px;
	background: #fff;
	border-radius: 8px;
	font-size: 0;
	box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
	a {
		font-size: 15px;
		color: #585858;
		text-align: center;
		text-transform: uppercase;
		text-decoration: none;
		line-height: 50px;
		position: relative;
		display: inline-block;
		z-index: 1;
		padding: 0;
		margin: 0;
		background-color: transparent;
		border: none;
		&:nth-child(1) {
			width: 90px;
		}
		&:nth-child(2) {
			width: 100px;
		}
		&:nth-child(3) {
			width: 110px;
		}
		&:nth-child(4) {
			width: 110px;
		}
		&:nth-child(5) {
			width: 120px;
		}
		&:nth-child(6) {
			width: 110px;
		}
		&:nth-child(7) {
			width: 90px;
		}
	}
	.active {
		background-color: transparent;
		border-color: transparent;
	}
	a:nth-child(1).active ~ .animation {
		width: 90px;
		transform: translateX(0);
	}
	a:nth-child(2).active ~ .animation {
		width: 100px;
		transform: translateX(90px);
	}
	a:nth-child(3).active ~ .animation {
		width: 110px;
		transform: translateX(190px);
	}
	a:nth-child(4).active ~ .animation {
		width: 110px;
		transform: translateX(300px);
	}
	a:nth-child(5).active ~ .animation {
		width: 120px;
		transform: translateX(410px);
	}
	a:nth-child(6).active ~ .animation {
		width: 110px;
		transform: translateX(530px);
	}
	a:nth-child(7).active ~ .animation {
		width: 90px;
		transform: translateX(640px);
	}
`;

export const Active = styled.div`
	position: absolute;
	height: 100%;
	top: 0;
	z-index: 0;
	background: linear-gradient(
		to right,
		rgba(245, 70, 66, 0.75),
		rgba(8, 83, 156, 0.75)
	);
	width: 90px;
	border-radius: 8px;
	transition: all 0.5s ease 0s;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`;

export const Card = styled.div`
	perspective: 1000px;
	.container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card {
		transform-style: preserve-3d;
		min-height: 370px;
		width: 250px;
		border-radius: 10px;
		padding: 15px 25px;
		box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2),
			0px 0px 50px rgba(0, 0, 0, 0.2);
	}

	.cloth {
		min-height: 150px;
	}
	.circle img {
		width: 70px;
		z-index: 2;
		transition: all 0.75s ease-out;
		position: absolute;
		left: 75px;
	}
	.circle {
		width: 130px;
		height: 130px;
		background: linear-gradient(
			to right,
			rgba(245, 70, 66, 0.75),
			rgba(8, 83, 156, 0.75)
		);
		border-radius: 50%;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.info h3 {
		font-size: 20px;
		transition: all 0.75s ease-out;
	}
	.info p {
		font-size: 14px;
		padding: 8px 0;
		margin-bottom: 0;
		color: #585858;
		font-weight: lighter;
		transition: all 0.75s ease-out;
	}
	.try-it {
		margin-top: 20px;
		transition: all 0.75s ease-out;
	}
	.try-it button {
		width: 100%;
		padding: 10px 0;
		background: #f54642;
		border: none;
		color: white;
		cursor: pointer;
		border-radius: 30px;
		font-weight: bolder;
		outline: none;
		&:hover {
			background: linear-gradient(
				to right,
				rgba(245, 70, 66, 0.75),
				rgba(8, 83, 156, 0.75)
			);
		}
	}
`;
