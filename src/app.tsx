import { useState, useEffect } from "preact/hooks";
import "./app.css";


export function App() {
	const [viewport, setViewport] = useState<string>();
	const [resolution, setResolution] = useState<string>();

	useEffect(() => {
		const isSafari = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')

		function setData() {
			const { clientWidth, clientHeight } = document.documentElement;
			setViewport(`${clientWidth} x ${clientHeight}`);
		}
		setResolution(
			`${screen.width * (isSafari ? 1 : window.devicePixelRatio)} x ${
				screen.height * (isSafari ? 1 : window.devicePixelRatio)
			}`
		);

		setData();

		window.addEventListener("resize", setData);
		return () => {
			window.removeEventListener("resize", setData);
		};
	}, []);

	return (
		<>
			<div class="big" aria-label="Your current viewport size">
				{viewport}
			</div>
			<div aria-label="Your current screen resolution">
				Screen resolution: {resolution}
			</div>
		</>
	);
}
