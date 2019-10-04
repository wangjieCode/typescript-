import { Point } from "./types";
import { View } from "./View";

/**
 * 小方块
 */
export class Square {

	private _color: string = 'red'
	public set view(view: View) {
		this._view = view
	}
	public get point() {
		return this._point;
	}
	public set point(val: Point) {
		this._point = val;
		if (this._view.show) {
			this._view.show()
		}
	}
	public get color() {
		return this._color;
	}
	constructor(
		private _point: Point,
		private _view: View
	) { }
}
