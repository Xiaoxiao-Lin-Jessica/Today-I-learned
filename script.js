console.log("hello world!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        btn.textContent = "Close";
    } else {
        form.classList.add("hidden");
        btn.textContent = "Share a fact";
    }
});

/*
function calcFactAge(year) {
    let currentYear = new Date().getFullYear();
    const age = currentYear - year;
    return age;
}
console.log(calcFactAge(2000));

const calcFactAge2 = (year) =>
    year <= new Date().getFullYear()
        ? new Date().getFullYear() - year
        : "invalid year";
console.log(calcFactAge2(2024));
*/
/*
let votesInteresting = 20;
let votesMindBlowing = 15;

if (votesInteresting === votesMindBlowing) {
    console.log("Interesting and Mind-blowing are equal");
} else if (votesInteresting > votesMindBlowing) {
    console.log("Interesting!");
} else if (votesInteresting < votesMindBlowing) {
    console.log("MindBlowing fact!");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindBlowing;

const message = totalUpvotes > votesFalse ? "true fact" : "false fact";
console.log(message);

const text = "This is a fact about the universe";
const upperCaseText = text.toUpperCase();
console.log(upperCaseText);

const str = `backticks are allow you to instert variables like "${text}" It is ${calcFactAge(
    2024
)} years old. It is probably ${totalUpvotes > votesFalse ? "true" : "false"}.`;
console.log(str);
*/

const facts = ["fact 1", 2015, true];

const [text, createdIn, isCorrect] = facts;
console.log(createdIn);

const newFact = [...facts, "society"];
console.log(newFact);
