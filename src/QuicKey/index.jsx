import { AbsoluteFill, Easing, Sequence } from "remotion";
import { useTime } from "../utils/timeline";
import { tabs } from "./tabs";
import Popup from "./Popup";
import Browser from "./Browser";
import Logo from "./Logo";
import Animate from "./Animate";

const blueBackground = {
	background: "linear-gradient(135deg, rgba(36,72,155,1) 0%, rgba(45,96,205,1) 50%, rgba(48,103,219,1) 100%)"
};
const center = {
	alignItems: "center",
	justifyContent: "center",
};
const animateLogoOptions = {
	extrapolateLeft: "clamp",
	extrapolateRight: "clamp",
	easing: Easing.in(Easing.cubic)
};

export default function QuicKey()
{
	const t = useTime();

		// set a property on the container so that the contents will use the dark
		// versions of the colors
	return (
		<AbsoluteFill style={blueBackground} data-theme="dark">
			<Sequence from={t`.5s`} durationInFrames={t`3s`} style={center}>
				<Animate duration=".5s" attributes={{ opacity: [0, 1] }} options={animateLogoOptions}>
					<Browser recents={tabs} activeTab={0} />
				</Animate>
			</Sequence>
			<Sequence from={t`1.5s`} durationInFrames={t`2s`} style={center}>
				<Animate from="1.75s" duration=".25s" attributes={{ opacity: [1, 0] }} options={animateLogoOptions}>
 					<Popup recents={tabs} maxIndex={2} />
				</Animate>
			</Sequence>
			<Sequence from={t`3.5s`} durationInFrames={t`1.5s`} style={center}>
				<Animate from=".5s" duration=".5s" attributes={{ opacity: [1, 0] }} options={animateLogoOptions}>
					<Browser recents={tabs} activeTab={3} />
				</Animate>
			</Sequence>
			<Sequence
				name="BlurOutLogo"
				from={0}
				durationInFrames={t`1s`}
				style={center}
			>
				<Animate
					from="middle"
					duration=".5s"
					attributes={{
						opacity: [1, 0],
						blur: [0, 40],
						scale: [1, 4],
					}}
					options={animateLogoOptions}
				>
					<Logo />
				</Animate>
			</Sequence>
			<Sequence
				name="BlurInLogo"
				from={t`end - 1s`}
				durationInFrames={t`1s`}
				style={center}
			>
				<Animate
					duration="middle"
					attributes={{
						opacity: [0, 1],
						blur: [40, 0],
						scale: [.1, 1],
					}}
					options={animateLogoOptions}
				>
					<Logo />
				</Animate>
			</Sequence>
		</AbsoluteFill>
	);
};
