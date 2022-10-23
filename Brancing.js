const a = prompt("Please enter the number")
if (a > 0) {
    alert(1)
} else if (a < 0) {
    alert(-1)
} else if (a == 1) {
    alert(0)
}


const b = prompt("Please enter the number");
const c = parseInt(b);
if (c > 0 && c < 3) {
    alert(1-3)
} else if (c > 3 && c < 5) {
    alert(3-5)
} else if (c > 5) {
    alert(5-7)
}

const d = 1; 
const e = 2; 
const result =  (d + e < 5) ? "Below":"Over";


const BirthDate = 1993;
const FutureYear = 2077;
const res  = (FutureYear - BirthDate)
alert("I will be either " + res + " or " + (res +1) + " in " + FutureYear)

const Age = promt("What is your age?")
const Name = promt("What is your age?")
const Living = promt("what do you do for a living?")
alarm("Hello " + Name + "," +  " you are" + Age + "," + " you doing great job by " + Living)
 