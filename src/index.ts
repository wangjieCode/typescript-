import { Square } from './core/Square';
import { View } from './core/View';
import { SquareGroup } from './core/SquareGroup';

const sq = new Square();
const mm = new SquareGroup([
	{
		x: 2,
		y: 0
	},
	{
		x: 1,
		y: 0
	},
	{
		x: 0,
		y: 0
	},
	{
		x: 0,
		y: -1
	}
],
	{
		x: 0,
		y: 3
	},
	"#f50"
)
console.log(mm)
mm.squareS.forEach(sq=> {
	sq.view = new View(sq, document.getElementById('root'))
})

setInterval( () => {
	mm.center = {
		x:mm.center.x + 1,
		y:mm.center.y + 1
	}
},1000)