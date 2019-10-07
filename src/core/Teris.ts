import { Shape, Point } from "./types";

export const TShape: Shape = [
	{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }
]

export const LShape: Shape = [
	{ x: -2, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }
]

export const TMirrorShape: Shape = [
	{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }
]


/**
 * 随机生成方块
 */
export const shapes = [
	TShape,
	LShape,
	TMirrorShape
]
export function createTeris():Shape {
	const tempIndex = getRandom(0,3);
	return shapes[tempIndex];
}
function getRandom(min:number,max:number):number {
	const temp = max - min;
	return Math.floor(Math.random() * temp + min)
}
