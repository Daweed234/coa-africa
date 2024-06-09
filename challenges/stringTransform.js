function transformString(input) {
  let output = input;

  if (input.length % 15 === 0) {
    output = reverseString(input);
    output = convertToASCII(output);
  } else if (input.length % 3 === 0) {
    output = reverseString(input);
  } else if (input.length % 5 === 0) {
    output = convertToASCII(input);
  }

  return output.split(" ").join("");
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function convertToASCII(str) {
  let asciiArray = [];
  for (let i = 0; i < str.length; i++) {
    asciiArray.push(str.charCodeAt(i));
  }
  return asciiArray.join(" ");
}

// Examples:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
