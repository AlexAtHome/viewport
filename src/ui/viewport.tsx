import clsx from "clsx";
import { FC, useEffect, useState } from "preact/compat";

export const Viewport: FC<{ className?: string }> = ({ className }) => {
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
		<div
			class={clsx([className, "text-9xl font-bold flex justify-center items-center"])}
			aria-label="Your current viewport size"
		>
			{viewport}
		</div>
	);
};
