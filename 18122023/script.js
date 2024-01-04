const student = {
    age: 22,
    school: "katzir",
    isIsraeli: true,
    grade: 80,
    sName: "nir"
};

const student2 = {
    age: 25,
    school: "amal",
    isIsraeli: true,
    grade: 90,
    sName: "moshe"

};

const student3 = {
    age: 28,
    school: "sinay",
    isIsraeli: false,
    grade: 69,
    sName: "nachom"

};

const student4 = {
    age: 29,
    school: "amal",
    isIsraeli: true,
    grade: 80,
    sName: "moshe"

};


let students = [student, student2, student3, student4]


//  let max = 0;  
//  let fName = ''; 
//  for (let index = 0; index < students.length; index++) {
//    console.log(students[index].grade)
//     if (max < students[index].grade) {
//         max = students[index].grade  
//     }
//     console.log(fName)
//  }

if (student4.grade === 10) {
    console.log(`blabla`)
    if (student4.grade === 22) {
        console.log(`ooohhhhyyyyy`)
    }
}
switch (students[0].grade) {
    case 10:
        console.log(`bla`)
        break;
    case 80:
        console.log(`bla`)

        break;
    case 69:
        console.log(`bla`)

        break;
    case 90:
        console.log(`bla`)

        break;
    default:
        break;
}








