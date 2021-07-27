import printBestStudents from './8-seq';

const grades = {
	1: {
		score: 99,
		firstName: 'guillaume',
		lastName: 'salva',
	},
	2: {
		score: 100,
		firstName: 'pepe',
		lastName: 'sierra',
	},
	3: {
		score: 70,
		firstName: 'juan',
		lastName: 'castro',
	},
};

console.log(printBestStudents(grades));
