interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}

	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}

	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

export class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}

	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}

	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

export const createEmployee = (
	salary: number | string
): DirectorInterface | TeacherInterface => {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	}
	return new Director();
};

export const isDirector = (
	employee: DirectorInterface | TeacherInterface
): employee is Director => {
	return employee.workFromHome() === 'Working from home';
};

export function executeWork(
	employee: DirectorInterface | TeacherInterface
): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	}
	return employee.workTeacherTasks();
}
