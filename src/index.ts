import { Square } from './core/Square';
import { View } from './core/View';
import { SquareGroup } from './core/SquareGroup';
import { createTeris } from './core/Teris';

const sq = createTeris();
const mm = new SquareGroup(sq,{x:3, y:0},"#f40");
console.log(createTeris())
mm.squareS.forEach(sq=> {
	sq.view = new View(sq, document.getElementById('root'))
})

setInterval( () => {
	mm.center = {
		x:mm.center.x,
		y:mm.center.y + 1
	}
},1000)