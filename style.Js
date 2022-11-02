
// 1 //
// let int = prompt('любще число')
// if(int % 2 === 1 ){
//     console.log("not even ")
// } else( 
//     console.log("even")
// )
//  2 //



// // 3 //
// let age = prompt("сколько тебе лет ")
// if(age >= '18'){
//     console.log("you can go through")
// } else(
//     console.log("go home ")
// )


// let name = prompt("как тебя зовут").toLowerCase().trim()

// if( name[0] === 'b' && name.length  % 2 === 0 ){
//     console.log('you can go through' + name );
// } else{
//     console.log('go home' + name );
// }
// let a = +prompt("a")
// let m = prompt(' + - * /')
// let b = +prompt('b')
// if(m === '+' ){
//     console.log(a + b)
// }

//  else if  (m === '*' ){
//     console.log(a * b)
// } 

// else if  (m === '/' ){
//     console.log(a / b)
// } 

// else if  (m === '-' ){
//     console.log(a - b)
// } else {
//     console.log("пшол в жопу" )
// }


// let userName = prompt('What is your name').toLowerCase().trim()
// if (userName[0] === 'a') {
//     let userAge = prompt('Welcome mr Alex please type your age here')
//     if (userAge >= 20 && userAge <= 40) {
//         let userMoney = prompt('cash out')
    
//     if (userMoney >= 100) {
//         alert("welcome")
//     }
// }
// } else {
//     console.log(' SORRY MR OR MS ' + userName)
// }
let students = ['Aziz','Saidbek','Shaxzod','muhhamadAmin','Odilbek']
alert(`
    ${students[0]},
    ${students[1]},
    ${students[2]},
    ${students[3]},
    ${students[4]},
`) 
let name = prompt('Напишите имя котого вы хотите удалить: ')

if(students.includes(name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase())){
    name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
    let index = students.indexOf(name)
    console.log(students);
    students.splice(index, 1)
    console.log(students);
}else{
    console.log('we have not this name in our array');
}   