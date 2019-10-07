import { Point } from "./types";
import { Square } from "./Square";
/**
 * 小方块信息
 */
const squareInfo = {
	size:{
		width: 30,
		height:30
	}
}
/**
 * 展示到page
 */
export class View {
	private isRemove:boolean = false
	constructor(
		private square:Square,
		private wrapper: HTMLElement | null,
		private dom?:HTMLElement
	){}
	show(): void{
		if( this.isRemove ) return;
		if(!this.dom){
			this.dom = document.createElement('div');
			this.dom.style.position = 'absolute';
			this.dom.style.width = squareInfo.size.width + 'px';
			this.dom.style.height = squareInfo.size.height + 'px';
			this.dom.style.border = '1px solid #000';
			this.dom.style.boxSizing = 'border-box';
		}
		this.dom.style.left = this.square.point.x * squareInfo.size.width + 'px';
		this.dom.style.top = this.square.point.y * squareInfo.size.height  + 'px';
		this.dom.style.backgroundColor = this.square.color
		this.wrapper && this.wrapper.appendChild(this.dom)
	}
	remove(): void{
		if(this.dom && !this.isRemove ){
			this.dom.style.display = 'none';
			this.isRemove = true;
		}
	}
}
