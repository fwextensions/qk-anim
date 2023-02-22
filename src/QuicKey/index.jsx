import { AbsoluteFill, Sequence } from "remotion";
import Popup from "./Popup";
import { BlurOutLogo, FadeInLogo } from "./Logo";

const blueBackground = {
	background: "linear-gradient(135deg, rgba(36,72,155,1) 0%, rgba(45,96,205,1) 50%, rgba(48,103,219,1) 100%)"
};
const center = {
	alignItems: "center",
	justifyContent: "center",
};

export default function QuicKey()
{
		// set a property on the container so that the contents will use the dark
		// versions of the colors
	return (
		<AbsoluteFill style={blueBackground} {...{ "data-theme": "dark" }}>
			<Sequence from={20} style={center}>
				<Popup />
			</Sequence>
			<Sequence from={0} durationInFrames={30} >
				<BlurOutLogo />
			</Sequence>
			<Sequence from={80} durationInFrames={30} >
				<FadeInLogo />
			</Sequence>
		</AbsoluteFill>
	);
};
