import { Point } from "./types";
import { View } from "./View";

/**
 * 小方块
 */
export class Square {
	private _view?: View
	private _color: string = 'red'
	private _point: Point = {
		x: 0,
		y: 0
	}
	public get view() {
		if(this._view) {
			return this._view;
		}
	}
	public set view(view: View) {
		this._view = view
		if (view) {
			view.show();
		}
	}
	public get point() {
		return this._point;
	}
	public set point(val: Point) {
		this._point = val;
		if (this._view) {
			this._view.show()
		}
	}
	public set color(val:string) {
		this._color = val;
	}
	public get color() {
		return this._color;
	}
}
