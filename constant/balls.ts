export const ballPosition = [
	{
		top: 74,
		left: 149,
	},
	{
		top: 168,
		left: 117,
	},
	{
		top: 231,
		left: 200,
	},
	{
		top: 267,
		left: 86,
	},
	{
		top: 335,
		left: 235,
	},
	{
		top: 372,
		left: 128,
	},
	{
		top: 417,
		left: 34,
	},
	{
		top: 475,
		left: 148,
	},
	{
		top: 436,
		left: 268,
	},
].reverse();

export const dummyBallPosition = [
	{
		top: 0.79,
		left: 181.9,
	},
	{
		top: 41.49,
		left: 195.7,
	},
	{
		top: 179.6,
		left: 218.01,
	},
	{
		top: 202.53,
		left: 248.78,
	},
	{
		top: 318,
		left: 182,
	},
	{
		top: 384,
		left: 53,
	},
	{
		top: 355,
		left: 205,
	},
	{
		top: 345.53,
		left: 67.67,
	},
	{
		top: 381.35,
		left: 92.58,
	},
	{
		top: 445.52,
		left: 226.69,
	},
	{
		top: 503.19,
		left: 112.72,
	},
	{
		top: 517.22,
		left: 34.11,
	},
	{
		top: 530.82,
		left: 329.14,
	},
	{
		top: 541,
		left: 0,
	},
	{
		top: 541.38,
		left: 90.64,
	},
	{
		top: 541.38,
		left: 245.06,
	},
	{
		top: 542.27,
		left: 363.02,
	},
	{
		top: 499,
		left: 244,
	},
]
	.sort(({ top: prevTop }, { top: nextTop }) => (prevTop > nextTop ? 1 : -1))
	.reverse();
