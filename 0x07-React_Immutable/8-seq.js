import { Seq } from 'immutable';

const printBestStudents = (obj) => {
	// Filters every student and gets the ones who have more than 70 in score
	const bestStudents = Seq(obj)
		.filter((x) => x.score > 70)
		.toJS();

	// Converts the first letter to an uppercased one and adds the rest of the string
	const firstCharToUpperCase = (str) =>
		str.charAt(0).toUpperCase() + str.slice(1);

	Object.keys(bestStudents).map((key) => {
		const { firstName, lastName } = bestStudents[key];
		bestStudents[key].firstName = firstCharToUpperCase(firstName);
		bestStudents[key].lastName = firstCharToUpperCase(lastName);
	});

	return bestStudents;
};

export default printBestStudents;
