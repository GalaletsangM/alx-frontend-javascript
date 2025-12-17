interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher: Teacher = {
  firstName: "Abel",
  lastName: "Smith",
  fullTimeEmployee: true,
  yearsOfExperience: 16,
  location: "South Africa",
  occupation: "Engineer",
};
console.log(teacher);
interface Director extends Teacher {
    numberOfReports: number;
}

const director: Director = {
  firstName: "Bruce",
  lastName: "Wuttor",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "Ghana",
  occupation: "Director",
  numberOfReports: 3,
};

interface printTeacherFunction {
    ({firstName, lastName}: {firstName:string, lastName:string}): string;
}

//const printTeacher: printTeacherFunction = 
function printTeacher({ firstName, lastName }:{firstName:string, lastName:string}):string{
    return `${firstName}. ${lastName}`;
}

printTeacher({firstName:"Precious", lastName:"Mafoko"});
//console.log(printTeacher("Precious", "Mafoko"));

