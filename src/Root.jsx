import { Composition } from "remotion";
import QuicKey from "./QuicKey";
import GlobalStyles, { AnimSize } from "./GlobalStyles";
import { useConfig } from "remotion-time";

export default function Root()
{
	const config = useConfig("6s @ 30fps");

	return (
		<>
			<GlobalStyles />
			<Composition
				id="QuicKey"
				component={QuicKey}
				{...config}
				width={AnimSize}
				height={AnimSize}
			/>
		</>
	);
};
