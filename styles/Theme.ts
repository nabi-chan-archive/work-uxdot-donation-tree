import Color from "color";

interface Theme {
	fontFamily: string;
	montserratFontFamily: string;
	white: Color;
	black: Color;
	treeLightGrey: Color;
	treeDarkGrey: Color;
	treeGrey: Color;
	treeBrownBright: Color;
	treeBrownShade: Color;
	treeBrown: Color;
	treeRedBright: Color;
	treeRedShade: Color;
	treeRed: Color;
	treeOrangeBright: Color;
	treeOrangeShade: Color;
	treeOrange: Color;
	treeGreenBright: Color;
	treeGreenShade: Color;
	treeGreen: Color;
	treeDeepGreenBright: Color;
	treeDeepGreenShade: Color;
	treeDeepGreen: Color;
}

type ThemeColor = Exclude<keyof Theme, "fontFamily" | "montserratFontFamily">;

const PretendardFontFamilly = [
	"Pretendard",
	"-apple-system",
	"BlinkMacSystemFont",
	"system-ui",
	"Roboto",
	"Helvetica Neue",
	"Segoe UI",
	"Apple SD Gothic Neo",
	"Malgun Gothic",
	"sans-serif",
	"Apple Color Emoji",
	"Segoe UI Emoji",
	"Segoe UI Symbol",
	"Noto Color Emoji",
]
	.map((f) => (f.includes(" ") ? `"${f}"` : f))
	.join(",");

const MontserratFontFamilly = ["Montserrat", "sans-serif"]
	.map((f) => (f.includes(" ") ? `"${f}"` : f))
	.join(",");

const castShadow = (
	color: Color,
	x: number,
	y: number,
	r: number,
	s?: number,
) => {
	return `${x}em ${y}em ${r}em ${s !== undefined ? `${s}em ` : ``}${color
		.alpha(0.15)
		.toString()}`;
};

const White = Color.rgb(255, 255, 255);
const Black = Color.rgb(0, 0, 0);

const TreeGrey = Color.rgb(196, 196, 196);
const TreeLightGrey = Color.rgb(225, 225, 225);
const TreeDarkGrey = Color.rgb(154, 154, 154);

const TreeBrown = Color.rgb(140, 57, 27);
const TreeBrownBright = Color.rgb(177, 92, 61);
const TreeBrownShade = Color.rgb(102, 39, 16);

const TreeRed = Color.rgb(167, 63, 64);
const TreeRedBright = Color.rgb(202, 105, 106);
const TreeRedShade = Color.rgb(133, 61, 62);

const TreeOrange = Color.rgb(242, 79, 20);
const TreeOrangeBright = Color.rgb(251, 108, 56);
const TreeOrangeShade = Color.rgb(197, 66, 19);

const TreeGreen = Color.rgb(38, 89, 74);
const TreeGreenBright = Color.rgb(54, 113, 95);
const TreeGreenShade = Color.rgb(23, 57, 47);

const TreeDeepGreen = Color.rgb(19, 38, 34);
const TreeDeepGreenBright = Color.rgb(49, 72, 67);
const TreeDeepGreenShade = Color.rgb(5, 11, 9);

const BreakPoints = {
	xs: 0,
	sm: 600,
	md: 960,
	lg: 1280,
	xl: 1920,
};

const Light: Theme = {
	fontFamily: PretendardFontFamilly,
	montserratFontFamily: MontserratFontFamilly,
	white: White,
	black: Black,
	treeLightGrey: TreeLightGrey,
	treeDarkGrey: TreeDarkGrey,
	treeGrey: TreeGrey,
	treeBrownBright: TreeBrownBright,
	treeBrownShade: TreeBrownShade,
	treeBrown: TreeBrown,
	treeRedBright: TreeRedBright,
	treeRedShade: TreeRedShade,
	treeRed: TreeRed,
	treeOrangeBright: TreeOrangeBright,
	treeOrangeShade: TreeOrangeShade,
	treeOrange: TreeOrange,
	treeGreenBright: TreeGreenBright,
	treeGreenShade: TreeGreenShade,
	treeGreen: TreeGreen,
	treeDeepGreenBright: TreeDeepGreenBright,
	treeDeepGreenShade: TreeDeepGreenShade,
	treeDeepGreen: TreeDeepGreen,
};

const Dark: Theme = {
	fontFamily: PretendardFontFamilly,
	montserratFontFamily: MontserratFontFamilly,
	white: White,
	black: Black,
	treeLightGrey: TreeLightGrey,
	treeDarkGrey: TreeDarkGrey,
	treeGrey: TreeGrey,
	treeBrownBright: TreeBrownBright,
	treeBrownShade: TreeBrownShade,
	treeBrown: TreeBrown,
	treeRedBright: TreeRedBright,
	treeRedShade: TreeRedShade,
	treeRed: TreeRed,
	treeOrangeBright: TreeOrangeBright,
	treeOrangeShade: TreeOrangeShade,
	treeOrange: TreeOrange,
	treeGreenBright: TreeGreenBright,
	treeGreenShade: TreeGreenShade,
	treeGreen: TreeGreen,
	treeDeepGreenBright: TreeDeepGreenBright,
	treeDeepGreenShade: TreeDeepGreenShade,
	treeDeepGreen: TreeDeepGreen,
};

export type { Theme, ThemeColor };
export { BreakPoints, Light, Dark, castShadow };
