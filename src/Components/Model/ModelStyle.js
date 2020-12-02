import styled from 'styled-components';

export const Contain = styled.div`
	width: 460px;
	height: 590px;
	margin: 35px auto;
	position: relative;
`;

export const ModelFace = styled.div`
	width: 45px;
	height: 65px;
	background: url('./images/model/1000new.png');
	position: absolute;
	top: 4.8%;
	left: 45.5%;
	z-index: 1;
`;

export const Body = styled.div`
	width: 250px;
	height: 500px;
	background: url('./images/allbody/bodynew.png');
	position: absolute;
	top: 12%;
	left: 22%;
`;

export const BikiniTop = styled.div`
	width: 250px;
	height: 500px;
	background: url('./images/allbody/bikini_branew.png');
	position: absolute;
	top: 12%;
	left: 22%;
	z-index: 1;
`;

export const BikiniBottom = styled.div`
	width: 250px;
	height: 500px;
	background: url('./images/allbody/bikini_pantsnew.png');
	position: absolute;
	top: 12%;
	left: 22%;
	z-index: 1;
`;

export const ClothTop = styled.div`
	width: 500px;
	height: 500px;
	position: absolute;
	top: -9%;
	left: -5%;
	z-index: 3;
	transform: scale(0.5);
`;

export const ClothBottom = styled.div`
	width: 500px;
	height: 1000px;
	position: absolute;
	top: -30%;
	left: -5%;
	z-index: 2;
	transform: scale(0.5);
`;

export const HairStyle = styled.div`
	width: 1000px;
	height: 998px;
	position: absolute;
	top: -75%;
	right: -57%;
	transform: scale(0.15);
	z-index: 4;
`;

export const Necklace = styled.div`
	width: 500px;
	height: 1000px;
	position: absolute;
	bottom: -40%;
	right: -3.5%;
	transform: scale(0.5);
	z-index: 4;
`;

export const Handbag = styled.div`
	width: 500px;
	height: 1000px;
	position: absolute;
	bottom: -40.5%;
	right: -3.5%;
	transform: scale(0.5);
	z-index: 4;
`;

export const Feet = styled.div`
	width: 500px;
	height: 1000px;
	position: absolute;
	bottom: -37%;
	right: -3.5%;
	transform: scale(0.5);
	z-index: 1;
`;

export const Background = styled.img`
	width: 900px;
	height: 1350px;
	position: absolute;
	bottom: -70%;
	right: -50%;
	transform: scale(0.5);
	z-index: -1;
	border-radius: 30px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
`;
