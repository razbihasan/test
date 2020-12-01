const lol = 1000;

var  OK = `NY ${lol}`;

let x = 1000;

any()

function any(a, b , c){
    
    return 1000
}


const arrow0 = () => {
    return 0;   
}

const arrow1 = (aka) => aka * 100;

const arrow2 = aka => aka * 100;

console.log(arrow2(100))

// localStorage.setItem("TEST", JSON.stringify({
//     name: "razbi",
//     roll:   10,
// }))

// console.log(JSON.parse(localStorage.getItem("TEST")))


const {name, roll} = JSON.parse(localStorage.getItem("TEST"))

console.log(name, roll)


const h1 = document.querySelectorAll("div .h")

const h1_ = document.getElementById("poop")

h1.innerHTML = 'heloowwwwwwwwwwwwwwwwwwwwww'  

console.log(h1, h1_)

h1.forEach((item, index)=> {
    console.log(item, index);
})

const _ = [10, 10, 20]

console.log(_.reduce((number, total)=> (
    number + total
), 0)); 