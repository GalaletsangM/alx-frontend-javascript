interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher: Teacher = {
    firstName: "Abel",
    lastName: "Smith",
    fullTimeEmployee: true,
    yearsOfExperience: 16,
    location: "South Africa",
    occupation: "Engineer"
}

const director: Directors = {
    firstName: "Bruce",
    lastName: "Wuttor",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Ghana",
    occupation: "Director",
    numberOfReports: 3
}

console.log(teacher);