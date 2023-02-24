import { Composition } from "remotion";
import QuicKey from "./QuicKey";
import GlobalStyles, { AnimSize } from "./GlobalStyles";
import { useConfig } from "./utils/timeline";

export default function Root()
{
	const config = useConfig("4s @ 30");

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
