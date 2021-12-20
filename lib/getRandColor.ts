import { ThemeColor } from "../styles/Theme";

export function getRandColor(): ThemeColor {
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
