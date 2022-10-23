// the first task
for (const x=0; x<=15; x++) {
    console.log(x)
}


//the second task
const a = promt("Write smth")
while (x>=12 && x<=24,x++); {
    console.log(x)
}


// the third task
const  numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const odds = numDaysInMonth.filter((numDaysInMonth) => numDaysInMonth % 2 === 1);
console.log(odds);

// the fourth
for (let i = -20; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);}
}
// the fifth task

console.log("5. Log in console all the elements of the daysInWeek array");
for (let i = 0; i < daysInWeek.length; i++) { console.log(daysInWeek[i]);
}

// the sixth task

console.log("6. Calculate the sum of all the numbers in the numDaysInMonth array and log it in console");
let sum = 0;
for (let i = 0; i < numDaysInMonth.length; i++) { sum += numDaysInMonth[i];}
console.log(sum);


//the seventh task

const superheroes = [
    {
      name: 'Bruce Wayne',
      alias: 'Batman',
      powerLevel: 50,
    },
    {
      name: 'Wade Wilson',
      alias: 'Deadpool',
      powerLevel: 90,
    },
    {
      name: 'Peter Parker',
      alias: 'Spiderman',
      powerLevel: 70,
    },
    {
      name: 'Kristin Wells',
      alias: 'Superwoman',
      powerLevel: 99,
    },
    {
      name: 'Barry Allen',
      alias: 'The Flash',
      powerLevel: 80,
      
    },
    {
      name: 'Diana Prince',
      alias: 'Wonder Woman',
      powerLevel: 90,
    },
    {
      name: 'Ororo Munroe',
      alias: 'Storm',
      powerLevel: 85,
    },
    {
      name: 'Helen Parr',
      alias: 'Elastigirl',
      powerLevel: 70,
    },
  ];

  let getHero = 0; //change to [] if you need name
  for (const key in superheroes) {
    if (superheroes[key].powerLevel > 90) {
      // getHero.push(superheroes[key].name); // to get name
      // console.log("7. " + getHero);
      getHero++;
    }
    console.log(getHero);
  }

//the eighth task

const i = new Date();
let day = daysInWeek[i.getDay()];
console.log(day);

// the ninth task

let quote =
  "There are times in life when people must know when not to let go. Balloons are designed to teach small children this.";
  let eCount = quote.match(/e/gi);
  console.log(`There are ${eCount.length} letters 'e' in the quote`);


