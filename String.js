//the first task
const a = prompt("Bla-bla-bla");
const b = a.toLocaleUpperCase();
console.log(b);

//the second task
const c = promt("lol-lol-lol");
const d = c.toLocaleLowerCase();

//the third task
const e = promt("Please write something");
const f = e.charAt(0).toUpperCase() + srt.slice(1);


//the fourth task
function findLongestWord(g) {
    var longestWord = g.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }

  function reverse(h){
    return h.split("").reverse().join("");
}