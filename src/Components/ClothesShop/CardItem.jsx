import React, { useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Card } from './ClothesShopStyles';
import { useDispatch } from 'react-redux';
import { tryOutAction } from '../../Redux/Actions/ChangingRoomAction';

const transCard = (x, y) => `rotateX(${y}deg) rotateY(${x * 3}deg)`;
const transCloth = (x, y) => `translate3d(${x - 44}px, ${y}px, 200px)`;
const transTitle = (x, y) => `translate3d(${x}px, ${y}px, 150px)`;
const transDesc = (x, y) => `translate3d(${x}px, ${y}px, 125px)`;
const transBtn = (x, y) => `translate3d(${x}px, ${y}px, 75px)`;

export default function CardItem(props) {
	let { type, name, desc, imgSrc_png, imgSrc_card } = props.cardData;
	const dispatch = useDispatch();

	/* BUTTON ANIMATION HANDLE */
	const [state, toggle] = useState(true);
	const { x } = useSpring({
		from: { x: 0 },
		x: state ? 1 : 0,
		config: { duration: 600 },
	});

	/* CARD HOVER ANIMATION HANDLE */

	// Coordinate and size of the card which is hovering
	const [currentCoordinate, setCoordinate] = useState({
		currentX: 0,
		currentY: 0,
		currentW: 0,
		currentH: 0,
	});

	// Parameters of tilt animation
	const [propsXY, setXY] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 550, friction: 140 },
	}));

	const measureRef = useCallback((node) => {
		if (node !== null) {
			setCoordinate({
				currentX: node.getBoundingClientRect().left,
				currentY: node.getBoundingClientRect().top,
				currentW: node.getBoundingClientRect().width,
				currentH: node.getBoundingClientRect().height,
			});
		}
	}, []);

	const mouseMove = (e) => {
		let parentWidth = currentCoordinate.currentW;
		let parentHeight = currentCoordinate.currentH;
		let offsetLeft = currentCoordinate.currentX;
		let offsetTop = currentCoordinate.currentY;
		let mouseX = e.clientX - offsetLeft;
		let mouseY = e.clientY - offsetTop;
		let x = (parentWidth / 2 - mouseX) / 20;
		let y = -(parentHeight / 2 - mouseY) / 20;
		setXY({ xy: [x, y] });
	};

	/* RENDERING */
	return (
		<Card className="mt-5" ref={measureRef}>
			<animated.div
				className="container"
				onMouseMove={(e) => {
					mouseMove(e);
				}}
				onMouseLeave={() => {
					setXY({ xy: [0, 0] });
				}}
				style={{ transform: propsXY.xy.interpolate(transCard) }}
			>
				<div className="card">
					<div className="cloth">
						<div className="circle">
							<animated.img
								src={imgSrc_card}
								alt=""
								style={{
									transform: propsXY.xy.interpolate(
										transCloth,
									),
								}}
							/>
						</div>
					</div>
					<div className="info">
						<animated.h3
							className="title"
							style={{
								transform: propsXY.xy.interpolate(transTitle),
							}}
						>
							{name}
						</animated.h3>
						<animated.p
							style={{
								transform: propsXY.xy.interpolate(transDesc),
							}}
						>
							{desc}
						</animated.p>
					</div>
					<animated.div
						className="try-it"
						style={{ transform: propsXY.xy.interpolate(transBtn) }}
					>
						<animated.button
							onClick={() => {
								toggle(!state);
								dispatch(tryOutAction(type, imgSrc_png));
							}}
							style={{
								transform: x
									.interpolate({
										range: [
											0,
											0.25,
											0.35,
											0.45,
											0.55,
											0.65,
											0.75,
											1,
										],
										output: [
											1,
											0.97,
											0.9,
											1.1,
											0.9,
											1.1,
											1.03,
											1,
										],
									})
									.interpolate((x) => `scale(${x})`),
							}}
						>
							Try it out!
						</animated.button>
					</animated.div>
				</div>
			</animated.div>
		</Card>
	);
}
