import { ThemeColor } from "../styles/Theme";
import DonateBall from "../components/DonateBall";

type BallType = React.ComponentProps<typeof DonateBall> & {
	id: string;
	top: number;
	left: number;
};

function getRandColor(): ThemeColor {
	const colors: ThemeColor[] = [
		"treeBrown",
		"treeRed",
		"treeRedBright",
		"treeRedShade",
		"treeRedBright",
		"treeGreen",
		"treeGreenBright",
		"treeGreenShade",
		"treeOrange",
		"treeOrangeBright",
		"treeOrangeShade",
		"white",
	];
	const index = Math.ceil(Math.random() * colors.length - 1);
	return colors[index];
}

export const getDummyBallsMockup = (): BallType[] => {
	return [
		{
			id: "dummy0",
			top: 0.79,
			left: 181.9,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy1",
			top: 41.49,
			left: 195.7,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy2",
			top: 179.6,
			left: 218.01,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy3",
			top: 202.53,
			left: 248.78,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy4",
			top: 329.16,
			left: 191.19,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy5",
			top: 345.53,
			left: 67.67,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy6",
			top: 381.35,
			left: 92.58,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy7",
			top: 445.52,
			left: 226.69,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy8",
			top: 503.19,
			left: 112.72,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy9",
			top: 517.22,
			left: 34.11,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy10",
			top: 530.82,
			left: 329.14,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy11",
			top: 541,
			left: 0,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy12",
			top: 541.38,
			left: 90.64,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy13",
			top: 541.38,
			left: 245.06,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy14",
			top: 542.27,
			left: 363.02,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "dummy15",
			top: 499,
			left: 244,
			name: "dummy",
			phone: "dummy",
		},
	]
		.map((cur) => {
			const background = getRandColor();
			const text = background === "white" ? "treeGreen" : "white";

			return {
				...cur,
				ballSize: "small" as "small",
				ballText: text as ThemeColor,
				ballBackground: background as ThemeColor,
			};
		})
		.reverse();
};

export const getBallsMockup = (): BallType[] => {
	return [
		{
			id: "0",
			top: 74,
			left: 149,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "1",
			top: 168,
			left: 117,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "2",
			top: 231,
			left: 200,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "3",
			top: 267,
			left: 86,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "4",
			top: 335,
			left: 235,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "5",
			top: 372,
			left: 128,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "6",
			top: 417,
			left: 34,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "7",
			top: 475,
			left: 148,
			name: "dummy",
			phone: "dummy",
		},
		{
			id: "8",
			top: 436,
			left: 268,
			name: "dummy",
			phone: "dummy",
		},
	]
		.map((cur) => {
			const background = getRandColor();
			const text = background === "white" ? "treeGreen" : "white";

			return {
				...cur,
				ballSize: "big" as "big",
				ballText: text as ThemeColor,
				ballBackground: background as ThemeColor,
			};
		})
		.reverse();
};
