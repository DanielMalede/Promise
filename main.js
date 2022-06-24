// function somefunc() {
//     const mydate = new Date()
//     return new Promise((resolve, reject) => {
//         if (mydate.getHours() > 11) {
//             resolve("good morning good luck")
//         }
//         else{
//         reject("good after noon")
//         }
//     })
//     .then((data) => { h1_line.innerText = data })
//     .catch((err) => { h1_line.innerText = err })
// }


// function chackNumbers(num1, num2) {
//     return new Promise((resolve, reject) => {
//         if (num1 % num2 == 0) {
//             resolve("yes its good")
//         }
//         else {
//             reject("not divided")
//         }
//     })
// }
// chackNumbers(10,3)
//     .then((data)=>{h1_line.innerText=data})
//     .catch((err)=>{h1_line.innerText=err})


// function chackIfNumInArray(num1, myArray) {
//     return new Promise((resolve, reject) => {
//         if (myArray.includes(num1)) {
//             resolve("yes")
//         }
//         reject("no")
//     })
// }
// let myBTN3 = document.getElementById("myBTN3")
// myBTN3.addEventListener("click", chackIfNumInArray(2, [4, 7, 5, 2])
//     .then((data) => { h1_line.innerText = data })
//     .catch((err) => { h1_line.innerText = err }))

// async function somefunc() {
//     try {
//         return await chackIfNumInArray(2,[4,5,2])
//             .then((data) => { h1_line.innerText = data })
//             .catch((err) => { h1_line.innerText = err })
//     }
//     catch(err){

//     }
//     finally{

//     }
// }
// somefunc()

async function getAdrresses() {
    try{
        await fetch("https://moviesmern.herokuapp.com/movies/all")
        .then(response=>{
            return response.json();
        })
        // .then((res)=>res.data.forEach(element => {
            
        // });)
    }
}