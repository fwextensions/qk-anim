import { spring } from "remotion";
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";
import Popup from "./Popup";
import styled from "styled-components";

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

export default function QuicKey()
{
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -150]
	);

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{ backgroundColor: "white" }}>
			<AbsoluteFill style={{ opacity }}>
				<AnimContainer>
					<Popup />
				</AnimContainer>
{/*
				<AbsoluteFill style={{ transform: `translateY(${logoTranslation}px)` }}>
					<Logo />
				</AbsoluteFill>
*/}
				{/* Sequences can shift the time for its children! */}
				<Sequence from={0}>
					<Title titleText={"derp"} titleColor={"red"} />
				</Sequence>
				{/* The subtitle will only enter on the 75th frame. */}
				<Sequence from={75}>
					<Subtitle />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
