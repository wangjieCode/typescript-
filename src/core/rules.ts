import { Point, Shape, SquareGroup, MoveDirection } from "./types";
const sqG:Point = {
	x: 10,
	y: 15
}
export class rules{
	/**
	 * 判断方块是否可以移动到目标位置
	 * @param shape 
	 * @param target 
	 */
	static canMove(shape:Shape,target:Point):boolean{
		const targetShape:Point[] = shape.map( item => {
			return {
				x: item.x + target.x,
				y: item.y + target.y
			}
		})
		let flag = targetShape.some(item => {
			return item.x < 0 || item.x > sqG.x - 1 || item.y > sqG.y
		})
		if(flag){
			return false;
		}
		return true;
	}
	/**
	 * 移动小方块
	 * @param shape 
	 * @param targetCenter 
	 */
	static move(shape: SquareGroup, targetCenter: Point): boolean{
		if( this.canMove(shape.shape, targetCenter)){
			shape.center = targetCenter
			return true
		}
		return false;
	}
	/**
	 * 向指定方向移动小方块
	 * @param shape 
	 * @param dir 
	 */
	static autoMove(shape: SquareGroup,dir:MoveDirection){
		switch (dir) {
			case MoveDirection.left:{
				console.log('left')
				this.move(shape, { x: shape.center.x - 1, y: shape.center.y  })
			}
				break;
			case MoveDirection.down:{
				this.move(shape, { x: shape.center.x, y: shape.center.y + 1 })
			}
				break;
			case MoveDirection.right:{
				this.move(shape, { x: shape.center.x + 1, y: shape.center.y })
			}
				break;
		}
	}
}