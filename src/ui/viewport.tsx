import { FC, useEffect, useState } from "preact/compat";

export const Viewport: FC = () => {
	const [viewport, setViewport] = useState<string>();

	useEffect(() => {
		function setData() {
			const { clientWidth, clientHeight } = document.documentElement;
			setViewport(`${clientWidth} x ${clientHeight}`);
		}

		setData();
		window.addEventListener("resize", setData);
		return () => {
			window.removeEventListener("resize", setData);
		};
	}, []);

	return (
		<div class="big" aria-label="Your current viewport size">
			{viewport}
		</div>
	);
};
