import { interpolate, useCurrentFrame } from "remotion";

const OptionsKeys = ["easing", "extrapolateLeft", "extrapolateRight"];

function isOptions(
	value)
{
	const isObject = typeof value == "object";
	const firstKey = isObject && value && Object.keys(value)[0];

		// allow null to count as an options object, so that explicitly passing null
		// will override any default options
	return isObject && (!firstKey || OptionsKeys.includes(firstKey));
}

export function useInterpolate(
	defaultInputRange,
	defaultOptions)
{
	const frame = useCurrentFrame();

	return (...args) => {
		let [input, output, options] = args;

		if (args.length == 1) {
			output = input;
			input = defaultInputRange;
			options = defaultOptions;
		} else if (args.length == 2) {
			if (isOptions(output)) {
				options = output;
				output = input;
				input = defaultInputRange;
			} else {
				options = defaultOptions;
			}
		}

		if (Array.isArray(output)) {
			return interpolate(frame, input, output, options);
		} else {
				// multiple output ranges were supplied by an object, so call interpolate
				// on each one and return the results as an object with the same keys
			return Object.entries(output).reduce((result, [key, outputRange]) => ({
				...result,
				[key]: interpolate(frame, input, outputRange, options)
			}), {});
		}
	};
}
