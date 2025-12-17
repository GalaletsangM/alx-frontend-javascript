var teacher = {
    firstName: "Abel",
    lastName: "Smith",
    fullTimeEmployee: true,
    yearsOfExperience: 16,
    location: "South Africa",
    occupation: "Engineer",
};
console.log(teacher);
var director = {
    firstName: "Bruce",
    lastName: "Wuttor",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Ghana",
    occupation: "Director",
    numberOfReports: 3,
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
};
console.log(printTeacher("Precious", "Mafoko"));
