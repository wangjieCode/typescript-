import { Square } from './Square';
import { Shape, Point } from './types';
export class SquareGroup {
	private _squareS: readonly Square[] = [];

	
	public get squareS() {
		return this._squareS;
	}
	
	public get center():Point  {
		return this._center;
	}
	
	public set center(v : Point) {
		this._center  = v;
		console.log(this._center)
		this._shape.forEach( (ele,index) => {
			this._squareS[index].point={
				x: this._center.x + ele.x,
				y: this._center.y + ele.y
			}
		})
	}
	

	constructor(
		private _shape:Shape,
		private _center:Point,
		private _color: string
	){
		const arr: Square[] = [];
		this._shape.forEach( el => {
			const square = new Square();
			square.color = this._color;
			square.point = {
				x: this._center.x + el.x,
				y: this._center.y + el.y
			};
			arr.push(square)
		})
		this._squareS = arr
	}
}