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
//const printTeacher: printTeacherFunction = 
function printTeacher(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "".concat(firstName, ". ").concat(lastName);
}
printTeacher({ firstName: "Precious", lastName: "Mafoko" });
//console.log(printTeacher("Precious", "Mafoko"));
