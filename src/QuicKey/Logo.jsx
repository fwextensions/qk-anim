import {
	Easing,
	Img,
	staticFile,
} from "remotion";
import { useInterpolate } from "../utils/timeline";

const options = {
	extrapolateLeft: "clamp",
	extrapolateRight: "clamp",
	easing: Easing.in(Easing.cubic)
};

function LogoImage({
	style })
{
	return (
		<Img
			src={staticFile("icon-300.png")}
			style={style}
		/>
	);
}

export function BlurOutLogo()
{
	const { opacity, blur, scale } = useInterpolate(
		["middle"],
		{
			opacity: [1, 0],
			blur: [0, 40],
			scale: [1, 4],
		},
		options
	);

	return (
		<LogoImage
			style={{
				filter: `blur(${blur}px)`,
				transform: `scale(${scale})`,
				opacity,
			}}
		/>
	);
}

export function FadeInLogo()
{
	const opacity = useInterpolate([0, "middle"], [0, 1], options);

	return (
		<LogoImage style={{ opacity }} />
	);
}
