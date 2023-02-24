import { AbsoluteFill, Sequence } from "remotion";
import Popup from "./Popup";
import Browser from "./Browser";
import { BlurOutLogo, FadeInLogo } from "./Logo";
import { useTime } from "../utils/timeline";

const blueBackground = {
	background: "linear-gradient(135deg, rgba(36,72,155,1) 0%, rgba(45,96,205,1) 50%, rgba(48,103,219,1) 100%)"
};
const center = {
	alignItems: "center",
	justifyContent: "center",
};

export default function QuicKey()
{
	const t = useTime();

		// set a property on the container so that the contents will use the dark
		// versions of the colors
	return (
		<AbsoluteFill style={blueBackground} {...{ "data-theme": "dark" }}>
			<Sequence from={t`.5s`} durationInFrames={t`1.5s`} style={center}>
				<Browser />
			</Sequence>
			<Sequence from={t`2s`} style={center}>
				<Popup />
			</Sequence>
			<Sequence from={0} durationInFrames={t`1s`} >
				<BlurOutLogo />
			</Sequence>
			<Sequence from={t`end - 1s`} durationInFrames={t`1s`} >
				<FadeInLogo />
			</Sequence>
		</AbsoluteFill>
	);
};
