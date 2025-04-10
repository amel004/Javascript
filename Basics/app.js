const firstName = "Mark";
const job = "Software Engineer";
const age = 34;
const hobbies = ["coding", "reading", "gaming"];

// concate strings to create a description of mark 

const mark = "i'm " + firstName + " i'm a " + job + " and i'm a " + age + " my hobbies are: " + hobbies
console.log(mark)


/// if // else // 


let hour = 20;

if(hour >= 6 && hour < 12){
    console.log("good morning")
}else if(hour >= 12 && hour < 18){
    console.log("good afternoon")
}else{
    console.log("good evening")
}

//fizzBuzz

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i, "FizzBuzz")
    }else if(i % 3 === 0){
        console.log(i,"Fizz")
    }else if(i % 5 === 0){
        console.log(i, "Buzz")
    } 
}
