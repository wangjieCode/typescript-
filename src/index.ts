import { Square }from './core/Square';
import { View } from './core/View';

const sq = new Square({x:0,y:0},new View);

console.log(sq)
sq.point = {
	x:100,
	y:100
}