function reverseString(string) {
  let newString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
}

const palavra = "Target";

console.log(reverseString(palavra));