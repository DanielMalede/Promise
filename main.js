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

// async function getAdrresses() {
//     try {
//         h1_line.innerHTML = '<img src="Loading_2.gif" >'
//         await fetch("https://moviesmern.herokuapp.com/movies/all")
//             .then(data => { console.log(data) }
//             )
//     }
//     catch (err) {
//         alert(err)
//     }
//     finally {
//         myBTN3.disabled = false
//         h1_line.innerHTML = ""
//     }

// }
// let myBTN3 = document.getElementById("myBTN3")
// myBTN3.addEventListener("click", () => { getAdrresses() })

// async function fetchfun() {
//     try {
//         h1_line.innerHTML = '<img src="Loading_2.gif" >'
//         await fetch('https://cat-fact.herokuapp.com/facts')
//             .then(data => { console.log(data); })
//     } catch (error) {
//         alert("error")
//     }
//     finally {
//         h1_line.innerHTML = ""
//     }

// }
// let myBTN3 = document.getElementById("myBTN3")
// myBTN3.addEventListener("click", () => { fetchfun() })

async function fetchfun2() {
    try {
        h1_line.innerHTML = '<img src="Loading_2.gif" >'
        await fetch('https://placekeanu.com/200/150')
        .then(data =>(h2_line=data))
    } catch (error) {
        alert("error")
    }
    finally{
        h1_line = ""
        
    }

}
fetchfun2()