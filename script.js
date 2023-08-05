function buttonFunction() {
  const numberPrompt = prompt("enter the maximum number to count evens to", 10);
  console.log("banana1");
  evenNumbers(numberPrompt);
}
function evenNumbers(to) {
  let evenArray = [];

  if (to > 0) {
    for (let i = 1; i <= to; i++) {
      if (i % 2 === 0) {
        evenArray.push(i);
      }
    }
  }
  document.getElementById("button").innerHTML =
    "The evens between 0 and " + to + " are: <br/> " + evenArray;
}
