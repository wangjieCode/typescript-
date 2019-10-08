import { Square } from './core/Square';
import { View } from './core/View';
import { SquareGroup } from './core/SquareGroup';
import { createTeris } from './core/Teris';
import { rules } from './core/rules';
import { MoveDirection } from './core/types';
const down: HTMLElement = document.getElementById('downMove');
const left: HTMLElement = document.getElementById('leftMove');
const right: HTMLElement = document.getElementById('rightMove');
const change: HTMLElement = document.getElementById('changeMove');


const sq = createTeris();
const mm = new SquareGroup(sq, { x: 3, y: 0 }, "#f40");
mm.squareS.forEach(sq => {
	sq.view = new View(sq, document.getElementById('root'))
})
down.addEventListener('click', function () {
	rules.autoMove(mm, MoveDirection.down)
})
left.addEventListener('click', function () {
	rules.autoMove(mm,MoveDirection.left)
})
right.addEventListener('click', function () {
	rules.autoMove(mm, MoveDirection.right)	
})
change.addEventListener('click', function () {
	// mm.center = {
	// 	x: mm.center.x,
	// 	y: mm.center.y + 1
	// }
})

// const temer = setInterval( () => {
// 	const flag = rules.canMove(sq, {
// 		x: mm.center.x,
// 		y: mm.center.y + 1
// 	})
// 	if(flag) {
// 		clearInterval(temer)
// 	}
// 	mm.center = {
// 		x:mm.center.x,
// 		y:mm.center.y + 1
// 	}
// },1000)