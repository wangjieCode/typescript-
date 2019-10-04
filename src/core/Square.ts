import { Point } from "./types";

/**
 * 小方块
 */
export class Square {
	private _point:Point = {
		_x:0,
		_y:0
	}
	public get point(){
		return this._point;
	}
	public set point(val:Point){
		this._point = val
	}
}
