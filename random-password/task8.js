// Character pools
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/";

document.getElementById("generate").addEventListener("click", () => {
  const includeUpper = document.getElementById("uppercase").checked;
  const includeLower = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSpecial = document.getElementById("special").checked;
  const length = parseInt(document.getElementById("length").value);

  // Validate length
  if (length < 12 || length > 64) {
    alert("Please choose a length between 12 and 64.");
    return;
  }

  // Validate at least one character type
  if (!includeUpper && !includeLower && !includeNumbers && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }

  const password = generatePassword(includeUpper, includeLower, includeNumbers, includeSpecial, length);
  document.getElementById("password").value = password;
});

function generatePassword(upper, lower, numbers, special, length) {
  let charPool = "";
  if (upper) charPool += upperChars;
  if (lower) charPool += lowerChars;
  if (numbers) charPool += numberChars;
  if (special) charPool += specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }
  return password;
}
