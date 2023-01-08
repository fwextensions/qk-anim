import { AbsoluteFill, Sequence } from "remotion";
import styled from "styled-components";
import Popup from "./Popup";
import Logo from "./Logo";

const AnimContainer = styled.div`
	width: var(--anim-size);
	height: var(--anim-size);
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	background: rgb(36,72,155);
	background: linear-gradient(135deg, rgba(36,72,155,1) 0%, rgba(45,96,205,1) 50%, rgba(48,103,219,1) 100%);
`;
const Center = styled.div`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

const blueBackground = {
	background: "linear-gradient(135deg, rgba(36,72,155,1) 0%, rgba(45,96,205,1) 50%, rgba(48,103,219,1) 100%)"
};
const center = {
	alignItems: "center",
	justifyContent: "center",
};

export default function QuicKey()
{
	return (
		<AbsoluteFill style={blueBackground}>
			<Sequence from={0} style={center}>
				<Popup />
			</Sequence>
			<Sequence from={15} durationInFrames={45} >
				<Logo />
			</Sequence>
		</AbsoluteFill>
	);
};
