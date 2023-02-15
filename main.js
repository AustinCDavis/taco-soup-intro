// (Harry Potter Titles)
/*
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for (var i = 0; i < harryPotterTitles.length; i++){
    console.log(`"Harry Potter and ${harryPotterTitles[i]}"`)
}
*/
//--------------------------------------------------

// (Student Grades)
/*
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for (var i = 0; i < grades.length; i++){
    if (grades[i] >= 0 && grades[i] <= 69){
        console.log("You got an F")
    }else if (grades[i] >= 70 && grades[i] <= 76){
        console.log("You got a D")
    }else if (grades[i] >= 77 && grades[i] <= 84){
        console.log("You got a C")
    }else if (grades[i] >= 85 && grades[i] <= 92){
        console.log("You got a B")
    }else if (grades[i] >= 93 && grades[i] <= 100){
        console.log("You got an A")
    }
}
*/
//----------------------------------------------------

//(Student Grades: Part 2)
/*
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
// Variales for uestion 1
let aStudents = 0;
let bStudents = 0;
let cStudents = 0;
let dStudents = 0;
let fStudents = 0;
//Variables for question 3
var mostCommonCount = 0;
var mostCommonGrade = "";
//Variables for question 4
var gradeSum = 0;
var gradeAverage = 0;

for (var i = 0; i < grades.length; i++){
    if (grades[i] >= 0 && grades[i] <= 69){
        //F
        fStudents++
    }else if (grades[i] >= 70 && grades[i] <= 76){
        //D
        dStudents++
    }else if (grades[i] >= 77 && grades[i] <= 84){
        //C
        cStudents++
    }else if (grades[i] >= 85 && grades[i] <= 92){
        //B
        bStudents++
    }else if (grades[i] >= 93 && grades[i] <= 100){
        //A
        aStudents++
    }
}

    for (i = 0; i < grades.length; i++){
        if (mostCommonCount < fStudents){
            mostCommonCount = fStudents
            mostCommonGrade = "F"
        } if (mostCommonCount < dStudents){
            mostCommonCount = dStudents
            mostCommonGrade = "D"
        } if (mostCommonCount < cStudents){
            mostCommonCount = cStudents
            mostCommonGrade = "C"
        } if (mostCommonCount < bStudents){
            mostCommonCount = bStudents
            mostCommonGrade = "B"
        } if (mostCommonCount < aStudents){
            mostCommonCount = aStudents
            mostCommonGrade = "A"
        }
    }

    for (i = 0; i < grades.length; i++){
        gradeSum += grades[i]
    }
gradeAverage = gradeSum / grades.length

console.log(`There are ${aStudents} with an A.`)
console.log(`There are ${bStudents} with an B.`)
console.log(`The most common letter grade is ${mostCommonGrade}`)
console.log(`The average percentage grade is ${gradeAverage}`)
*/
//----------------------------------------------------------------------

//(Two, Four, Six, Eight - Who do we appreciate?! CHEER)
/*
let count = '', i = 2;

while (i < 10){
    count += i + ' ';
    i += 2;
}
console.log(`${count}Who do we appreciate?!`)
*/
//----------------------------------------------------

// (Interrupting Cow)
/*
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let sentence = '';
let moo = " MOOOOOO"; 

for (var j = 0; j < sentenceArray.length; j++){
    if ((j + 1) % 3 === 1 && (j != 0)){
        sentence += moo;
     }  sentence += ` ${sentenceArray[j]}`
    }
    console.log(sentence)
*/
//----------------------------------------------------------------------------------------

//(The Beatles)
/*
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[0].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[0].birth}. He contributed heavily to the ${beatles.albums[1]} Album.`)

// Please note that these values are not correct. They're just placeholders that you will need to correctly fill out.

*/

