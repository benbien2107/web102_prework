let animals = ["giraffe", "horse", "narwhal", "chinchilla"];
let firstLetters = animals.reduce( (sum, animal) => {
  return sum + animal.charAt(0);
}, "");

console.log(firstLetters);