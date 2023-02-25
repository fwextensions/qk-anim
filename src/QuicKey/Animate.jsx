import { useInterpolate, useTime } from "../utils/timeline";

const AttributeStyles = {
	blur: (value) => ({ filter: `blur(${value}px)` }),
	scale: (value) => ({ transform: `scale(${value})` }),
	opacity: (value) => ({ opacity: value }),
};
const DefaultOptions = {
	extrapolateLeft: "clamp",
	extrapolateRight: "clamp",
};

export default function Animate({
	from = 0,
	duration,
	attributes,
	options = DefaultOptions,
	style,
	children,
	...props })
{
	const t = useTime();
	const frameFrom = t(from);
	const frameRange = [frameFrom, frameFrom + t(duration)];
	const values = useInterpolate(frameRange, attributes, options);
	const animatedStyles = Object.entries(values).reduce((result, [key, value]) => {
		const handler = AttributeStyles[key];

		if (handler) {
			return {
				...result,
				...handler(value)
			};
		}

		throw new Error(`Unknown attribute: ${key}`)
	}, {});

	return (
		<div
			style={{
					// it's not really clear why we need this to be flex, but without it,
					// the children don't always get sized correctly
				display: "flex",
				...style,
				...animatedStyles
			}}
			{...props}
		>
			{children}
		</div>
	);
}
